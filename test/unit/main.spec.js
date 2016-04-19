import chai, {assert, expect} from 'chai'; // eslint-disable-line no-unused-vars
import Utils from '../../src/client/utils/Utils';
import chaiAsPromised from 'chai-as-promised';
import dirtyChai from 'dirty-chai';

chai.use(chaiAsPromised);
chai.use(dirtyChai);
chai.should();

describe('axiom', () => {
  it('should always be true', () => {
    expect(Utils.axiom()).to.be.true();
  });
});
