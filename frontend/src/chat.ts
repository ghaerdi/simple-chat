const endpoint = import.meta.env.VITE_WS_SERVER as string;
const ws = new WebSocket(endpoint);

export default ws;