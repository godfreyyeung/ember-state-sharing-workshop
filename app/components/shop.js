import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class ShopComponent extends Component {
  @tracked isSubmitting = false;

  @action
  onSubmit() {
    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
    }, 1000)
  }
}
