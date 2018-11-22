// npm init 과 
// npm install solc@0.4.25

//fs $ path, note.sol 파일에 들어간 내용을 가져오기 위한 것
const fs = require('fs');
const path = require('path');

// complie를 위한 것
const solc = require('solc');

// path, fs를 통해서 const note에 Note.sol의 내용을 가져온다
// fs.readFilesync()
const filePath = path.resolve(__dirname, 'Note.sol');
const note = fs.readFileSync(filePath, 'utf8');
//console.log(note);

// solc로 compile 실행
const source = solc.compile(note, 1);
//console.log(source);

// ABI, Btyecode 찾기
const bytecode = source.contracts[':Note'].bytecode;
const interface = source.contracts[':Note'].interface;

// console.log(bytecode);
// console.log(interface);

module.exports = source.contracts[':Note'];

