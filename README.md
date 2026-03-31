# CrudMobile

Simple CRUD mobile application built with React Native, using a local API powered by JSON Server.

## Getting Started

1. Install dependencies

```
npm install
```

2. Start the services

Run Concurrently in one terminal:
```
npm run dev
```
And Expo in another:
```
npx expo start --tunnel
```
## Dev Tools

If not installed, add the required dev dependencies:

npm install concurrently json-server ngrok

## API Configuration

To switch between environments (local, tunnel, production), update the API base URL in:

/config/urlConfig.js

## Stack

- React Native (Expo)
- JSON Server (mock API)
- Ngrok (external access)

## Notes

- Ensure ngrok is running to allow external API access.
- Keep the API URL in sync with the ngrok URL when testing on mobile devices.
