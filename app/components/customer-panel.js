import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CustomerPanelComponent extends Component {
  @action
  addSale() {
    console.log("adding to Sales", this.args.shop.sales);
    this.args.shop.addSale();
    console.log("added to Sales", this.args.shop.sales);
  }
}