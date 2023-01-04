import Model, { attr } from '@ember-data/model';

export default class ShopModel extends Model {
  @attr('number', { defaultValue: 0 }) sales;

  @attr customers;

  addSale() {
    this.sales += 1;
  }
}
