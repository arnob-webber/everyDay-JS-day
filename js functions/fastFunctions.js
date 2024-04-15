let mathNmbr = parseInt(prompt("wht's maths score"));
let engNmbr = parseInt(
  prompt("wht's english score")
);
 /* if u dont use parseInt then function returns a string, not a number*/

function nmbr(mathNmbr, engNmbr) {
  return mathNmbr + engNmbr;
}

console.log(nmbr(mathNmbr, engNmbr));
