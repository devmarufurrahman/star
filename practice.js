let n = 50;

for (let i = n; i >= 1; i--) {
  let result = "";
  for(let k=1;k<=(n-i);k++){
    result += " "
  }
  for (let j = 1; j <= i; j++) {
    result += "* ";
  }
  console.log(result);
}

for (let i = 1; i <= n; i++) {
  let result = "";
  for (let k =1; k <= n - i; k++) {
    result += " ";
  }
  for (let j = 1; j <= i; j++) {
    result += "* ";
  }
  console.log(result);
}
