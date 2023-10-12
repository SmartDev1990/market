"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contracts = exports.NETWORK_LABEL = void 0;

var _sdk = require("@sushiswap/sdk");

var _NETWORK_LABEL;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NETWORK_LABEL = (_NETWORK_LABEL = {}, _defineProperty(_NETWORK_LABEL, 250, 'Mantle Mainnet'),_defineProperty(_NETWORK_LABEL, 4002, 'Fantom Test'), _NETWORK_LABEL);
exports.NETWORK_LABEL = NETWORK_LABEL;
var Contracts = {
  250: {
    auction: '',
    sales: '',
    bundleSales: '',
    factory: '', //FantomNFTFactory
    privateFactory: '', //FantomNFTFactoryPrivate
    artFactory: '', //FantomArtFactory
    privateArtFactory: '', //FantomArtFactoryPrivate
    zooBooster: '',
    zooElixir: '',
    zooAlchemy: '',
    zooGenes: '',
    sasAirdrop: ''
  },
  4002: {
    auction: '0x82A55acA3a5adE4663a37d7C49d82c7F270eb2c8',
    sales: ' 0x08A7E83569733b8f41B9dfcffDF4Ec2E9422193B',
    bundleSales: '0xff5d8425BAd959180c68d35Dbeb1458927514A00',
    factory: '0x2a4790Ac4f5C26752d8542c068B5CC63Ab99529D', //FantomNFTFactory
    privateFactory: '0x783aE1aCcc3319d4C00AAB196D15DcB730D4dF37', //FantomNFTFactoryPrivate
    artFactory: ' 0x2a4790Ac4f5C26752d8542c068B5CC63Ab99529D', //FantomArtFactory
    privateArtFactory: '0x25A54AF18A5ef6e187Ebb351AD543C4Da947b1CF', //FantomArtFactoryPrivate
    zooBooster: '',
    zooElixir: '',
    zooAlchemy: '',
    zooGenes: '',
    sasAirdrop: ''
  }
};
exports.Contracts = Contracts;
