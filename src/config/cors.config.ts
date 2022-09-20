export interface CorsConfig {
  crossDomain: {
    allowedOrigins: string | string[];
    allowedReferer: string | string[];
  };
}

export const corsConfig: CorsConfig = {
    crossDomain: {
        allowedOrigins: '*',
        allowedReferer: '*',
    }
};

export default () => {
  return corsConfig;
};
