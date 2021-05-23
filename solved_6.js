function randomGame(param) {
  const per = 100 / param;
  console.log("확률은" + per + "% 입니다.");

  const rv = Math.random() * param + 1;

  const nextRv = Math.floor(rv);

  if (nextRv === 1) {
    return "당첨됨!";
  } else {
    return "당첨 안됨";
  }
}
const resurt = randomGame(100);
console.log(resurt);
