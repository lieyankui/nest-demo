import { DataSource } from 'typeorm';

export const mysqlSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nest_test',
  entities: [__dirname + '/../../../**/*.entity{.ts,.js}'],
  // synchronize: true, // This option should't be used in production, otherwise you can lose production data
});
