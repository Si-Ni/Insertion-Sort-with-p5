let numbers = [];
let fr = 15;
let i = 1;
let check = false;
let check2 = false;
let j;
let hilfe;

for(let i = 0; i < 120; i++) {
  numbers.push(Math.floor(Math.random() * 450)+50);
}

function setup() {
  createCanvas(1200, 600);
  frameRate(fr);
}

console.log(numbers);


function draw() {
  if(i < numbers.length && check === false) {
    hilfe = numbers[i];
    j = i-1
    check = true;
    check2 = true;
    console.log(numbers)
  }

  if(j > -1 && hilfe < numbers[j]){
    numbers[j+1] = numbers[j]
    numbers[j] = hilfe
  } 

  j--
  if(hilfe > numbers[j] || j < 0){
    check2 = false;
    check = false;
    i++
  }

  background(200);
  let x = 0;
  for(let y = 0; y < numbers.length; y++){
    if(y == j+1 && check2 == true){
      stroke(0, 255, 0)
    }else if(y == i){
      stroke(0, 0, 255)
    }
    else{
      stroke(255, 0, 0)
    }
    rect(x, 0, 5, numbers[y]);
    x = x + 10;
  }
}


/*
let numbers = [];
for(let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 450)+50);
}
console.log(numbers)
for(let i = 0; i < numbers.length-1; i++){
    if(numbers[i+1] < numbers[i]){
    let hilfe = numbers[i+1];
    for(let j = i; j >= 0; j--){
      if(hilfe < numbers[j]){
        let hilfe2 = numbers[j]
        numbers[j] = hilfe
        numbers[j+1] = hilfe2
        console.log(numbers)
      }
    }
  }
}
*/