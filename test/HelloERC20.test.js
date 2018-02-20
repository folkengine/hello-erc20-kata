import mlog from 'mocha-logger';
const util = require('util');

const BigNumber = web3.BigNumber;

require('chai')
    .use(require('chai-as-promised'))
    .use(require('chai-bignumber')(BigNumber))
    .should();

const HelloERC20 = artifacts.require('HelloERC20');

contract('HelloERC20', function([owner, sender, receiver, proxy]) {
  const TOKEN_COUNT = 1000000;

  beforeEach(async function() {
    this.token = await HelloERC20.new({ from: owner });
  });

  describe('Given that I have a Token Contract', function() {
    it('it should have the correct name', async function() {
      const name = await this.token.name();
      name.should.be.equal("Hello ERC20 Coin");
    });
    it('should have the correct decimals', async function() {
        const decimals = await this.token.decimals();
        decimals.should.be.bignumber.equal(0);
    });
  });

});
