import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {User} from '../models';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.email
> {
  constructor(
    @inject('datasources.mongo') protected datasource: juggler.DataSource,
  ) {
    super(User, datasource);
  }
}
