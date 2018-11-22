// mocha
// TDD: Test Driven Dev
// 1. 테스트를 먼저 짠다. == 내가 구현할 기능
// 2. 테스트를 돌린다. (빨간불)
// 3. 한 개씩 빨간불을 꺼간다.
// 4. 모듈화된 기능(view -> component 기준)
// 5. micro service achitecture

const assert = require('assert');

class Car {
    park(){
        return '주차';
    }
    drive(){
        return '붕붕';
    }
}

let porche = new Car();

assert.equal('나의코드', '예상한코드');
