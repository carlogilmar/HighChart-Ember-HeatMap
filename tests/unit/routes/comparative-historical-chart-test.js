import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | comparativeHistoricalChart', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:comparative-historical-chart');
    assert.ok(route);
  });
});
