# Steps



```
$> truffle init
$> npm init
```

```
$> truffle create test HelloERC20
$> truffle create contract HelloERC20
```

* Add HelloERC20 migrations. (migrations/2_deploy_contracts.js)
```
var HelloERC20 = artifacts.require("./HelloERC20.sol");

module.exports = function(deployer) {
    deployer.deploy(HelloERC20);
};
```
* Added import to test
```
$> const HelloERC20 = artifacts.require('HelloERC20');
```
