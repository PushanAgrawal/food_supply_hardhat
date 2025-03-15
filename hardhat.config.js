

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",

  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/e60c860a7aa34d368ee0a4415e9faa16`,

      ////////////// LOCALHOST ////////////////////

    //   accounts: [`0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`,'0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a',
    //   '0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6',
    //   "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a",
    //   '0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba',
    //   '0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97',
    //   '0xf214f2b2cd398c806f84e317254e0f0b801d0643303237d97a22a48e01628897'

    // ],


    /////// SEPOLIA //////////////////////////

      accounts: [`0x3e36ee44398daa5c1a693cbc0b634547909f3153806ecb4483c5ddb797996432`,'0x4db1325a07bc3af35aa7a75124b62eb8e74ee9a6d340563e0b793d926f0d8d70',
      '0xbec19cc0d9e4699b353beb894423adb774895ac456809c37e3bc894d1964617f',
      "0xce1ef485b5f7cc81615a6ca64fae03fba109ac12784d4a0bb7b6e5c261df4341",
      '0x71411a831fff535c7531fb1106aaf04b416df32e0dea0f16776ff6901ca49f73',
      '0x0a7b943f687f9372e27631cb99456552df5d22172f198c84f5c842b578d5f059',
      '0x31cad08507577fbad396cd90c719ae447301bb4098e0e1cc15b34b04c49434f3'

    ],  //0x73E29cD70CBA744Cd1277EC2B2383B6eB147619c
       //0x02869714153A46E861FaaD428b5fa32F05528190
       //0xa1fc730522d5846a98fc0db82bfe931cc42c0ee9
       //0x8c6d9026c993cd72c5b541f630356062a51ec72e
       //0x4c0a848561c13391205d0aaffe6d6edca78aad2e
       //0x4eF0f9924a2ADec9ca2E75022fFAF15a92cC731A
       //0xaA8E30E7265ea96EcAD6829864820773330eC4cD




    },},
};


