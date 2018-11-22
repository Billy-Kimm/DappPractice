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
    fly(){
        return '날아라';
    }
    swim(){
        return '헤엄헤엄';
    }
}

let porche = new Car();

// assert.equal('나의코드', '예상한코드');

let car;
beforeEach(() => {
    car = new Car();

});


// 내가 어떤 모듈을 테스트할건지: car (주어)
describe('Car 클래스는', () => {
    // 그 모듈이 뭘하는건지 : drive(), park() 동사()
    it('주차가 가능하다.', () => {
        assert.equal(car.park(), '주차');
    });

    it('드라이브가 가능하다', () => {
        assert.equal(car.drive(), '붕붕');
    });

    it('날아갈 수 있다.', () => {
        assert.equal(car.fly(), '날아라');
    });

    it('수륙 양용이다', () => {
        assert.equal(car.swim(), '헤엄헤엄');
    });
});

