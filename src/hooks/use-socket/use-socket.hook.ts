import { io, Socket } from 'socket.io-client';
import { useRef, useState } from 'react';
import { useDidMount } from '@better-hooks/lifecycle';

import { BaseListeners, SocketInstance, SocketListenerObject, SocketArguments } from './use-socket.types';

import { environment } from '@/config';

export const useSocket = <T extends SocketListenerObject>({ namespace }: SocketArguments) => {
  const socket = useRef<SocketInstance<T> | null>(null);

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
    socket.current = io(environment.API_URL + namespace, {
      autoConnect: false,
    });

    const unmountListeners = mountListeners(socket.current);
    socket.current.connect();

    return () => {
      socket.current?.disconnect();
      unmountListeners();

      socket.current = null;
    };
  });

  return { socket: socket.current, isConnected };
};
