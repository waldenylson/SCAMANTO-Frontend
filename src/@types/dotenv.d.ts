declare namespace NodeJS {
  export interface ProcessEnv { // eslint-disable-line
    // API Server
    NODE_ENV: 'production' | 'development';
  }
}
