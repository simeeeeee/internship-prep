//1.
//오브젝트 내에 인자(argument)를 받는 함수를 만들어서
//짝/홀인지 판별하시오

let obj = {
  fuc: function (num) {
    if (num % 2 == 1) {
      console.log("홀수");
    } else {
      console.log("짝수");
    }
  },
};

obj.fuc(2);

//2.
//배열내 최대값 찾기
//배열을 인자로 받는 함수를 만들어서
//배열의 최대값 변환해보세요
let arr = [1, 4, 7, 3];
let max = 0;
for (let i = 0; i < 4; i++) {
  if (arr[i] > max) max = arr[i];
}
console.log(max);

//두번째로 큰 값
for (let i = 0; i < 3; i++) {
  for (let j = 3; j > i; j--) {
    if (arr[j - 1] > arr[j]) {
      let tem = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = tem;
    }
  }
}
for (let i of arr) {
  console.log(i);
}

console.log(`두번째 최대값은 ${arr[2]}`);
