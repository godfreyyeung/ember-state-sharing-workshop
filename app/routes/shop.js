import Route from '@ember/routing/route';

export default class ShopRoute extends Route {
  async model() {
    const myShop = {
      sales: 0,
      customers: [
        {
          id: 1,
          name: 'bob',
        },
        {
          id: 1,
          name: 'susan',
        }
      ],
    };

    myShop.addSale = () => {
      console.log("mauahha", myShop.sales);
      myShop.sales = myShop.sales + 1;
    }

    return myShop;
  }
}
