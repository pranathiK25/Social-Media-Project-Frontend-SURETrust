import {io } from 'socket.io-client'
export const socket = io(
  "https://social-media-project-backend-suretrust.onrender.com",
  {
    transports: ["polling", "websocket"],
    autoConnect: true,
  }
);