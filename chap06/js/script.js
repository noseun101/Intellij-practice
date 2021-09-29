let list = [];

for (let i = 1; i <= 45; i++) {
    list.push(i); // i만큼 추가
}

for (let i = 0; i < 6; i++) {
    // Math.floor : 소수점 이하를 없앰.
    let index = Math.floor(Math.random() * list.length);


    // 랜덤으로 뽑은 숫자를 배열에 담고 변수 num에 저장함
    let num = list[index];

    // splice: 특정 요소를 제거함
    // index 위치에 있는 요소만 제거함.
    list.splice(index, 1);

    console.log(num, list);
}