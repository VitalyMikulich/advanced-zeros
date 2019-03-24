module.exports = function getZerosCount(number, base) {
  // your implementation
  let maxFactor;
  let factors = [];
  let baseCopy = base;
  for(let i = 2; i <= base; i++) {
    let count = 0;
    while(baseCopy % i == 0) {
      baseCopy /= i;
      count++;
    }
    if(count != 0) {
      factors[i] = count;
      maxFactor = i;
    }
  }
  let result = 0;
  while(number > 0) {
    number = Math.floor(number /= maxFactor);
    result += number;
  }

  return result;
}