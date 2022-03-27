## About

This app uses Vite, React, Typescript, Tailwind and WebSocket.

## Setup

### Backend

Go to the backend directory.
Install dependencies and run `npm run dev` in a terminal, don't close it.

### Frontend

Go to the frontend directory.

Add `.env` and set your ip as `VITE_WS_SERVER` like this:

```
VITE_WS_SERVER=ws://<ip>
```

Install dependencies and run `npm run dev` in a terminal. You can run `npm run dev:host` to expose the app to your local network.