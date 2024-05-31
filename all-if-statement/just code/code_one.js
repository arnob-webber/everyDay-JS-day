let numBr = prompt("enter your math mark");
let EnglishnumBr = prompt("enter your math mark");
let BanglanumBr = prompt("enter your math mark");
let Social_science_numBr = prompt("enter your math mark");

let result = {
  math: numBr,
  english: EnglishnumBr,
  bangla: BanglanumBr,
  social_science: Social_science_numBr,
};

const totalMark = numBr + EnglishnumBr + BanglanumBr + Social_science_numBr;

// console.log(result.bangla)

if (totalMark > 132) {
  console.log("you are pass");
}

else {
    console.log('sorry you r fail')
}
