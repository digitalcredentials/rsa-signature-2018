/*!
 * Copyright (c) 2020 Digital Bazaar, Inc. All rights reserved.
 */
import chai from 'chai';
import dirtyChai from 'dirty-chai';
chai.use(dirtyChai);
chai.should();
const {expect} = chai;

import {RsaSignature2018} from '../../';

describe('RsaSignature2018', () => {
  describe('constructor', () => {
    it('should exist', async () => {
      const ex = new RsaSignature2018();

      expect(ex).to.exist();
    });
  });
});
