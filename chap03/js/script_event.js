// 해당 파일은 버튼을 클릭했을 시 이벤트를 확인해보도록 작성.
var SCISSORS = '가위';
var ROCK = '바위';
var PAPER = '보';

// 버튼 클릭 시 동작하기 위한 함수
function onScissorsClick() {
    var comInput;
    var randNum = Math.random();

    if (randNum < 0.33) {
        comInput = SCISSORS;
    } else if (randNum < 0.66) {
        comInput = ROCK;
    } else {
        comInput = PAPER;
    }

    if (comInput === SCISSORS) {
        alert('컴퓨터:' + comInput + '로 컴퓨터와 비겼습니다.');
    } else if (comInput === ROCK) {
        alert('컴퓨터:' + comInput + '로 컴퓨터에게 졌습니다.');
    } else {
        alert('컴퓨터:' + comInput + '로 컴퓨터에게 이겼습니다.');
    }
}

function onRockClick() {
    var comInput;
    var randNum = Math.random();

    if (randNum < 0.33) {
        comInput = SCISSORS;
    } else if (randNum < 0.66) {
        comInput = ROCK;
    } else {
        comInput = PAPER;
    }

    if (comInput === SCISSORS) {
        alert('컴퓨터:' + comInput + '로 컴퓨터를 이겼습니다.');
    } else if (comInput === ROCK) {
        alert('컴퓨터:' + comInput + '로 컴퓨터에게 비겼습니다.');
    } else {
        alert('컴퓨터:' + comInput + '로 컴퓨터에게 졌습니다.');
    }
}

function onPaperClick() {
    var comInput;
    var randNum = Math.random();

    if (randNum < 0.33) {
        comInput = SCISSORS;
    } else if (randNum < 0.66) {
        comInput = ROCK;
    } else {
        comInput = PAPER;
    }

    if (comInput === SCISSORS) {
        alert('컴퓨터:' + comInput + '로 컴퓨터와 졌습니다.');
    } else if (comInput === ROCK) {
        alert('컴퓨터:' + comInput + '로 컴퓨터에게 이겼습니다.');
    } else {
        alert('컴퓨터:' + comInput + '로 컴퓨터에게 비겼습니다.');
    }
}

// onSicssorsClick과 onScissorsClick() 차이점
// 전자는 함수 자체, 후자는 인자 없이 호출 시 리턴된느 결과값을 나타낸다.
// 즉, 함수 호출시 () 붙이는 것을 주의해야한다.