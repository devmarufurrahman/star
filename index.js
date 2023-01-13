
let n = 1;
for (let i = 11; i >= n; i--) {
  let output = "";
  for(let k = 9; k>= i-n; k--){
    output += " ";
  }

  for (let j = 1; j <= i; j++) {
    output += "* ";
  }

  console.log(output);
}

let m = 11;
for (let i = 1; i <= m; i++) {
  let output = "";

  for(let k = 1; k<= m-i; k++){
    output += " ";
  }


  for (let j = 1; j <= i; j++) {
    output += "* ";
  }

  console.log(output);
}










