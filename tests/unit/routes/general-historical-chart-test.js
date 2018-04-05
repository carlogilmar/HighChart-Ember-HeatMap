import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | generalHistoricalChart', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:general-historical-chart');
    assert.ok(route);
  });
});
