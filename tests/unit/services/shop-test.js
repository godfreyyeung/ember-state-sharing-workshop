import { module, test } from 'qunit';
import { setupTest } from 'ember4playground/tests/helpers';

module('Unit | Service | shop', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:shop');
    assert.ok(service);
  });
});
