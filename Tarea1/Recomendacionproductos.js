function recommendProduct(age, isMember, purchaseHistory) {
  // Condiciones para recomendar un producto de alta tecnología
  if (
    (isMember && purchaseHistory.tech >= 5) ||
    (age >= 18 && age <= 30 && purchaseHistory.fashion >= 2)
  ) {
    return "High-Tech Product";
  }

  // Condiciones para recomendar un producto de moda
  if (
    (!isMember &&
      purchaseHistory.tech + purchaseHistory.fashion + purchaseHistory.other >=
        3) ||
    (age >= 25 && age <= 40)
  ) {
    return "Fashion Product";
  }

  // Si no se cumple ninguna de las condiciones anteriores, recomendar un producto genérico
  return "Generic Product";
}

// Ejemplos de uso:
console.log(recommendProduct(22, true, { tech: 6, fashion: 1, other: 2 })); // "High-Tech Product"
console.log(recommendProduct(35, false, { tech: 1, fashion: 1, other: 1 })); // "Fashion Product"
console.log(recommendProduct(50, false, { tech: 0, fashion: 0, other: 1 })); // "Generic Product"
