import { Context, createContext } from 'react';
import { io, Socket } from 'socket.io-client';

export const socket: Socket = io('http://localhost:3001', {
  transports: ['websocket'],
}) as Socket;

export const SocketContext: Context<Socket> = createContext(socket);
