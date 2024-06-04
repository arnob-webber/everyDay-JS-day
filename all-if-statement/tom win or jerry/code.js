let tomRun = 50;

let jerryRun = 40;

function tomAndJerry(tomRun, jerryRun) {
  if (tomRun > jerryRun) {
    console.log("tom win");
  } else if (jerryRun > tomRun) {
    console.log("jerry win");
  } else {
    console.log("no one win webber win");
  }
}

tomAndJerry(tomRun, jerryRun); //function calling, dont forget to call function otherwise this code wont runn
