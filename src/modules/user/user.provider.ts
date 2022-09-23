import { DataSource } from 'typeorm';
import { MYSQL_SOURCE } from '../../common/modules/database/database.constant';
import { User } from './entities/user.entity';
import { USRE_REPOSITORY } from './user.constant';

export const userProvider = [
  {
    provide: USRE_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [MYSQL_SOURCE],
  },
];
