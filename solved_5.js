// 1부터 ~ 10까지 난수(랜덤한 숫자)를 구하시오.

function getRandomNumber() {
  const rv = Math.random() * 10 + 1;

  const nextRv = Math.floor(rv);
  console.log(nextRv);
}

getRandomNumber();
