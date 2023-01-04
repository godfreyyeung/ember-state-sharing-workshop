import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ShopRoute extends Route {
  @service store;

  async model(params) {
    const myShop = this.store.createRecord('shop', {
      sales: 0,
      customers: [
        {
          id: 1,
          name: 'bob',
        },
        {
          id: 2,
          name: 'susan',
        },
      ],
    });

    return myShop;
  }
}
