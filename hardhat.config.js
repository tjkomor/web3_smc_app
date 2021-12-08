require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/T5GgGbbHxxYRhUNmgaV_xZLwB3geFvfo',
      accounts: ['7ae4857cdd3dba97722374eb554dd1a19ab78a443150deda9d4e61185c4a6e58'],
    },
  },
};
