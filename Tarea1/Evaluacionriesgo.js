function evaluateRisk(income, hasLoans, latePayments, isStudent) {
  // Condiciones de alto riesgo
  if ((income < 20000 && latePayments > 3) || (hasLoans && isStudent)) {
    return "High";
  }

  // Condiciones de riesgo moderado
  if (
    (income >= 20000 && income <= 50000 && latePayments <= 2) ||
    (hasLoans && !isStudent)
  ) {
    return "Moderate";
  }

  // Si no cumple ninguna de las condiciones anteriores, es de bajo riesgo
  return "Low";
}

// Ejemplos de uso:
console.log(evaluateRisk(15000, true, 4, true)); // "High"
console.log(evaluateRisk(30000, false, 1, false)); // "Moderate"
console.log(evaluateRisk(60000, false, 0, false)); // "Low"
