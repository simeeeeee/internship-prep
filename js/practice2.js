function multiplyTable(number) {
  for (let i = 1; i < 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
}
let input = Number(prompt("숫자를 입력하시오"));
multiplyTable(input);

console.log(true || false);
console.log(true && true);
console.log(true || false);
console.log(!false);

isEligible = true;
if (!isEligible) {
  console.log("에러 메세지");
}

//1부터 30까지 춧자를 돌면서
//3배수면 'fizz'
//5     'buzz'
//3,5배수면 'fizzbuzz'
//나머진 그냥출력
function fizzbuzz() {
  let i = 1;
  while (i <= 30) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
    i++;
  }
}

fizzbuzz();
