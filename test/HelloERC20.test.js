const HelloERC20 = artifacts.require('HelloERC20');

contract('HelloERC20', function(accounts) {
  it("should assert true", function(done) {
    var helloERC20 = HelloERC20.deployed();
    assert.isTrue(true);
    done();
  });
});
