// deploy

// web3 : ethereum interact
// git config --global url."https://".insteadOf git://
// $ npm install --global --production windows-build-tools
// $ npm install web3

// HDWalletProvider : 12words -> private key 생성
// $ npm install truffle-hdwallet-provider

// $ npm install mocha
// $ npm install ganache-cli

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

// 배포하기 위한 컨트랙 컴파일 결과물 가져오기.
const { bytecode, interface } = require('./complie');

const provider = new HDWalletProvider(
    // '본인 계정의 12개의 mnemonic words',
    "  ",
    // 'Infura API'
    'https://ropsten.infura.io/v3/03463b0648d145bbbe4f95a32237aeba'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    const result = await new web3.eth.Contract(JSON.parse(interface))                            // 인터페이스정보 입력해주고 배포된 계정 주소 받기
    .deploy({ data: '0x' + bytecode, arguments:['Happy Hacking']})                               // {바이트코드, 생성자관련인자} 입력하기
    .send({ from: accounts[0], gas: '1000000', gasPrice: web3.utils.toWei('2', 'gwei')});        //  {누구로부터, 수수료} 입력하기

    console.log(result.options.address);
}

deploy();