// import test from '../src/utils/test.js'
// import assert from 'assert';

import assert from 'assert'
import test from '../src/utils/test'

describe('Utils', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1,2,3].indexOf(4));
    });

    // it('should not return -1', () => {
    //   assert.equal(-1, [1,4,2,3].indexOf(4));
    // });
  });

  describe('utils/tools', () => {
    it('test.js', () => {
      console.log('random test():', test());
      assert.ok(test());
    });
  });
});
