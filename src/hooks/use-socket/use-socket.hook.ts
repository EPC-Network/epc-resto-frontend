import { io, Socket } from 'socket.io-client';
import { useState } from 'react';
import { useDidMount, useDidUpdate } from '@better-hooks/lifecycle';

import { BaseListeners, SocketInstance, SocketListenerObject, SocketArguments } from './use-socket.types';

import { environment } from '@/config';

export const useSocket = <T extends SocketListenerObject>({ namespace }: SocketArguments) => {
  const [socket, setSocket] = useState<SocketInstance<T> | null>(null);
  const [isConnected, setConnected] = useState<boolean>(false);

  const listenerHandlers: BaseListeners = {
    connect: () => {
      setConnected(true);
    },
    connectError: () => {
      setConnected(false);
    },
    disconnect: () => {
      setConnected(false);
    },
  };

  const addJobListener =
    (socketInstance: Socket<BaseListeners>) =>
    <E extends keyof BaseListeners>(event: E) => {
      const handler = listenerHandlers[event];
      if (!handler) return () => null;

      socketInstance.on<keyof BaseListeners>(event, handler);

      return () => {
        socketInstance.off<keyof BaseListeners>(event, handler);
      };
    };

  const mountListeners = (socketInstance: Socket<BaseListeners>) => {
    const unmountFunctions = Object.keys(listenerHandlers).map((event) =>
      addJobListener(socketInstance)(event as keyof BaseListeners),
    );

    return () => {
      unmountFunctions.forEach((unmount) => unmount());
    };
  };

  useDidMount(() => {
    const socketInstance: Socket<BaseListeners & Partial<T>> = io(environment.API_URL + namespace, {
      autoConnect: false,
    });

    setSocket(socketInstance);
  });

  useDidUpdate(() => {
    if (socket) {
      const unmountListeners = mountListeners(socket);
      socket.connect();

      return () => {
        socket.disconnect();
        unmountListeners();
      };
    }
  }, [socket]);

  return { socket, isConnected };
};
