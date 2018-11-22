const assert = require('assert');
const Web3 = require('web3');
const ganache = require('ganache-cli');
const {bytecode, interface} = require('./complie');


const web3 = new Web3(ganache.provider());

let accounts;
let note;

beforeEach( async () => {
    accounts = await web3.eth.getAccounts();
    note = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:'0x'+ bytecode, arguments:['Happy hacking']})
    .send({from: accounts[0]})
})


describe('note 컨트랙트', ()=>{
    it('배포가 될 수 있다.', () => {
        console.log(note)
    });
})

// 1. ganache-cli 이더리움 가상 로컬 네트워크에 배포
// 2. 배포된 코드와 interact하면서 코드 테스트

