// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
  , SERVER_SOCKET: "https://cuongdq.no-ip.info"
  , SERVER_SOCKET_PATH: "/socket"
  , SERVER_SOCKET_PING: 1000
  , SERVER_SOCKET_TIMEOUT: 60000
  , SERVER_SOCKET_DELAY: 5000
  , SERVER_SOCKET_DELAYMAX: 10000
  , APP_NAME: "CLIENT-CHAT-DEMO"   // chỉ tương thích với ngxi4-socket-client@0.0.5
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
