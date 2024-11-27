function primeNums(n, m) {
  if (n > m) {
    return { message: "start number can not bigger than end number" };
  }

  const isPrime = (num) => {
    if (num < 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  };

  const primeNums = Array.from({ length: m - n - 1 }, (_, i) => {
    return i + 1 + n;
  }).filter(isPrime);

  return primeNums;
}

console.log(primeNums(7, 24));
