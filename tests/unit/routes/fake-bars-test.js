import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fake-bars', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:fake-bars');
    assert.ok(route);
  });
});
