// script.js 파일을 siwtch문을 이용하여 가위바위보게임을 작성해보자.
// switch문
// 1. 일반적으로 if문이 많이 사용된다.
// 2. 하나의 변수를 여러 값과 대조할 때 사용된다.

var SCISSORS = '가위';
var ROCK = '바위';
var PAPER = '보';

// UserInput의 값을 구분한 뒤 다음 스위치문의 comInput값을 비교해 보는 구조.
switch(userInput) {
    case SCISSORS:
        switch(comInput) {
            case SCISSORS:
                alert('컴퓨터:' + comInput + '로 컴퓨터와 비겼습니다.');
                break;
            case ROCK:
                alert('컴퓨터:' + comInput + '로 컴퓨터와 졌습니다.');
                break;
            case PAPER:
                alert('컴퓨터:' + comInput + '로 컴퓨터와 이겼습니다.');
                break;
        }
        break;

    case ROCK:
        switch(comInput) {
            case SCISSORS:
                alert('컴퓨터:' + comInput + '로 컴퓨터와 이겼습니다.');
                break;
            case ROCK:
                alert('컴퓨터:' + comInput + '로 컴퓨터와 비겼습니다.');
                break;
            case PAPER:
                alert('컴퓨터:' + comInput + '로 컴퓨터와 졌습니다.');
                break;
        }
        break;

    // default: case 조건이 해당되지 않을 때 사용된다.
    default:
        switch(comInput) {
            case SCISSORS:
                alert('컴퓨터:' + comInput + '로 컴퓨터와 졌습니다.');
                break;
            case ROCK:
                alert('컴퓨터:' + comInput + '로 컴퓨터와 이겼습니다.');
                break;
            case PAPER:
                alert('컴퓨터:' + comInput + '로 컴퓨터와 비겼습니다.');
                break;
        }
        break;
}
// if문과 switch문으로 작성한 후
// if문: 여러 조건들을 비교할 때는 편하지만 코드가 길어지거나 복잡할 때는 가독성이 떨어지는 것 같다.
// switch문:
// 하나의 변수로 값을 비교할 때는 편리하고 가독성이 if문보다 괜찮다.