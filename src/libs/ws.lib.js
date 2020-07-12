const DISCONNECT_TIME_OUT = 3000;
let disconnectTimer;
const CLOSE_TIME_OUT = 10000;
let closeTimer;

export const wSocket = {
  socket: null,
};

export const startSockets = (url, onMessage, onClose) => {
  wSocket.socket = new WebSocket(url);

  wSocket.socket.onmessage = (event) => {
    if (onMessage) onMessage(event.data);
  };
  wSocket.socket.onclose = async (event) => {
    //
    if (onClose) onClose(event.code, event.wasClean, event.reason);
  };
  wSocket.socket.onerror = () => {
    wSocket.socket.close();
  };
};

export const closeSocket = () => {
  if (!wSocket.socket) return;
  clearTimeout(closeTimer);
  wSocket.socket.close();
};

export const setDisconnectEvents = (disconnectCallback, closeCallback) => {
  clearTimeout(disconnectTimer);
  disconnectTimer = setTimeout(disconnectCallback, DISCONNECT_TIME_OUT);
  clearTimeout(closeTimer);
  closeTimer = setTimeout(() => {
    closeSocket();
    closeCallback();
  }, CLOSE_TIME_OUT);
};

export const getSocket = () => wSocket.socket;
