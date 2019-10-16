// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  tracking: {
    clientRequest: 'https://probaetap2.azurewebsites.net/api/ClientRequestValidation?code=0vQIb8GIwZ/cz6vvwnhopfWZCvZHp0DNQlVxoDai2sZKFjcKwhKGpw==',
    downloadArt: 'https://probaetap2.azurewebsites.net/api/ArtifactDownload?code=b2xpqXEZ1aIXXpqbcFHTgwUP7M0iuQK3CUAnq5HYSETgEkQryLOm4Q==',
    artifactInfo: 'https://probaetap2.azurewebsites.net/api/ArtifactInfo?code=Zk1wdBW1D3GpzXHtJZqTjU9xL2LEmYIZIaMIgBKZFA/JxstrXEbo7g=='
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
