// 확률성 게임을 제작하되, 확률을 제어할 수 있어야 하고,
// 한번 실행 시, 50번씩 게임이 실행되는 프로그렘을
// 제작하세오.

// 단, 현재 확률이 나와야 하며
// 당첨 or 당첨되지 않은 경우를 출력하세요.

function randomGame(hahaha) {
  const ps = 100 / hahaha;
  console.log("확률은" + ps + "% 임.");
  const ha = Math.random() * hahaha + 1;
  const nextha = Math.floor(ha);

  if (nextha === 1) {
    return "당첨!!";
  } else {
    return "꽝";
  }
}

for (let i = 0; i < 50; i++) {
  const resurt = randomGame(100);
  console.log(resurt);
}
