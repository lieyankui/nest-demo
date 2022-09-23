import { getEnvConfig } from '../../../utils';

const port = getEnvConfig('server_port');
const monitorPrefix = getEnvConfig('monitor_prefix') || 'monitor';
const monitorSocketPrefix =
  getEnvConfig('monitor_socket_prefix') || 'socket.io';
export const monitorConfig = {
  title: 'Nest.js Monitoring Page',
  port: port,
  path: monitorPrefix,
  socketPath: monitorSocketPrefix,
  ignoreStartsWith: '/health/alive',
  healthChecks: [
    // {
    //   protocol: 'http',
    //   host: 'localhost',
    //   path: '/cats',
    //   port: port,
    // }
  ],
  spans: [
    {
      interval: 1,
      retention: 60, // Keep 60 datapoints in memory
    },
    {
      interval: 5,
      retention: 60,
    },
    {
      interval: 15,
      retention: 60,
    },
    {
      interval: 60,
      retention: 600,
    },
  ],
  chartVisibility: {
    cpu: true,
    mem: true,
    load: true,
    eventLoop: true,
    heap: true,
    responseTime: true,
    rps: true,
    statusCodes: true,
  },
};
