let mathNmbr = parseInt(prompt("wht's maths score"));
let engNmbr = parseInt(prompt("wht's english score"));
/* if u dont use parseInt() then function returns a string, not a number*/
//  u can use parseFloat() also

function nmbr(mathNmbr, engNmbr) {
  return mathNmbr + engNmbr;
}

let totalNmbr = nmbr(mathNmbr, engNmbr);

if (totalNmbr < 66) {
  alert("u dumshit");
}

// console.log(nmbr(mathNmbr, engNmbr));
