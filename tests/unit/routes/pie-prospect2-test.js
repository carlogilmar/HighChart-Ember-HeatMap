import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pieProspect2', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pie-prospect2');
    assert.ok(route);
  });
});
