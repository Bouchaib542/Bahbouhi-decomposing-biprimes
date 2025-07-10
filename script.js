function factorize() {
  const input = document.getElementById("inputNumber").value;
  const number = BigInt(input);
  const sqrt = sqrtBigInt(number);

  for (let i = sqrt; i > 1n; i--) {
    if (number % i === 0n) {
      const other = number / i;
      document.getElementById("result").innerText =
        "Facteurs trouvés : " + i.toString() + " × " + other.toString();
      return;
    }
  }

  document.getElementById("result").innerText = "Aucun facteur trouvé.";
}

function sqrtBigInt(value) {
  if (value < 0n) throw 'Erreur : racine carrée d’un nombre négatif.';
  if (value < 2n) return value;
  
  let x0 = value / 2n;
  let x1 = (x0 + value / x0) / 2n;
  while (x1 < x0) {
    x0 = x1;
    x1 = (x0 + value / x0) / 2n;
  }
  return x0;
}
