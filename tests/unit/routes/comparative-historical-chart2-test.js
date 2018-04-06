import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | comparativeHistoricalChart2', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:comparative-historical-chart2');
    assert.ok(route);
  });
});
