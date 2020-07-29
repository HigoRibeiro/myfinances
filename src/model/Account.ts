import { Model } from '@nozbe/watermelondb';
import { date, readonly, field } from '@nozbe/watermelondb/decorators';

export default class Account extends Model {
  static table = 'accounts';

  @field('name') name: String;
  @field('initial_value') initalValue: Number;
  @field('type') type: String;
  @readonly @date('created_at') createdAt: Number;
  @readonly @date('updated_at') updatedAt: Number;
}
