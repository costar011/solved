// 특정 정수 값을 변수 lines에 저장하고,
// 1부터 lines까지 짝수와 홀수를 구분하여 출력하세요.

const lines = 820;

const startValue = 1;
const evenCnt = 0;
const oddCnt = 0;

for (let i = startValue; i <= lines; i++) {
  if (i % 2 === 0) {
    console.log(i + "는 짝수입니다.");
    evenCnt += 1;
  } else {
    console.log(i + "는 홀수입니다.");
    oddCnt += 1;
  }
}

console.log("짝수의 총 수는 " + evenCnt + "입니다.");
console.log("홀수의 총 수는 " + oddCnt + "입니다.");
