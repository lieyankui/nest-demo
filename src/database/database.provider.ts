import { MYSQL_SOURCE } from './database.constant';
import { mysqlSource } from './database.source';

export const databaseProviders = [
  {
    provide: MYSQL_SOURCE,
    useFactory: async () => {
      return mysqlSource.initialize();
    },
  },
];
