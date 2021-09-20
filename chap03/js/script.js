var SCISSORS = '가위';
var ROCK = '바위';
var PAPER = '보';

// 코드- 문자열 축소가 중요하다.
// 1. 문자열을 다른 문자열로 치환시 위의 상단 부분만 고치면 편리하다.
// 2. 문자열이 아닌 변수명으로 작성시 오타 발견이 용이하다.

var userInput = prompt('가위, 바위, 보!');

// 사용자가 잘 못 입력한 경우
if (userInput !== SCISSORS && userInput !== ROCK && userInput !== PAPER) {
    alert('가위, 바위, 보 중에서 하나를 입력해주세요.');
// 사용자가 올바르게 입력한 경우
} else {
    var comInput;

    var randNum = Math.random();

    if (randNum < 0.33) {
        comInput = SCISSORS;
    } else if (randNum < 0.66) {
        comInput = ROCK;
    } else {
        comInput = PAPER;
    }

    // 승패를 찾아낼 경우
    if (userInput === SCISSORS) {
        if (comInput === SCISSORS) {
            alert('컴퓨터:' + comInput +'로 컴퓨터와 비겼습니다.');
        } else if (comInput === ROCK) {
            alert('컴퓨터:' + comInput +'로 컴퓨터에게 졌습니다.');
        } else {
            alert('컴퓨터:' + comInput +'로 컴퓨터에게 이겼습니다.');
        }
    } else if (userInput === ROCK) {
        if (comInput === SCISSORS) {
            alert('컴퓨터:' + comInput +'로 컴퓨터와 이겼습니다.');
        } else if (comInput === ROCK) {
            alert('컴퓨터:' + comInput +'로 컴퓨터에게 비겼습니다.');
        } else {
            alert('컴퓨터:' + comInput +'로 컴퓨터에게 졌습니다.');
        }
    } else {
        if (comInput === SCISSORS) {
            alert('컴퓨터:' + comInput +'로 컴퓨터와 졌습니다.');
        } else if (comInput === ROCK) {
            alert('컴퓨터:' + comInput +'로 컴퓨터에게 이겼습니다.');
        } else {
            alert('컴퓨터:' + comInput +'로 컴퓨터에게 비겼습니다.');
        }
    }
    // console.log("컴퓨터의 패:", comInput);
}