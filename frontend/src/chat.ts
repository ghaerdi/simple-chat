const endpoint = import.meta.env.VITE_WS_SERVER as string;
if (!endpoint) {
  throw new Error('VITE_WS_SERVER is not defined');
}
const ws = new WebSocket(endpoint);

export default ws;
