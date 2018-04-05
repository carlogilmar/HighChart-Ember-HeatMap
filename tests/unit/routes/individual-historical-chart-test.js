import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | individualHistoricalChart', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:individual-historical-chart');
    assert.ok(route);
  });
});
