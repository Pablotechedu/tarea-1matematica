Para la primera sección, los ejercicios resueltos se encuentran en este documento: https://docs.google.com/document/d/1hr3iXAX3LZ68ir6yGPtTHyhAMnnp4GGX8n952alZrJw/edit?tab=t.0


Explicación de la función Sistema de Evaluación de Riesgo:

La función evaluateRisk toma cuatro parámetros:

income: los ingresos del cliente (número)
hasLoans: si el cliente tiene préstamos activos (booleano)
latePayments: número de pagos atrasados (número)
isStudent: si el cliente es estudiante (booleano)
Primero, evaluamos las condiciones de alto riesgo:

Si los ingresos son menores a $20,000 y tiene más de 3 pagos atrasados, O
Si tiene préstamos activos y es estudiante Si se cumple alguna de estas condiciones, la función retorna 'High'.
Si no se cumplen las condiciones de alto riesgo, evaluamos las de riesgo moderado:

Si los ingresos están entre $20,000 y $50,000 (inclusive) y no tiene más de 2 pagos atrasados, O
Si tiene préstamos pero no es estudiante Si se cumple alguna de estas condiciones, la función retorna 'Moderate'.
Si no se cumple ninguna de las condiciones anteriores, la función retorna 'Low', considerando al cliente de bajo riesgo.

=============================================================================================================================================================================================================================================
Explicación de la función:

La función recommendProduct toma tres parámetros:

age: la edad del usuario (número)
isMember: si el usuario es miembro o no (booleano)
purchaseHistory: un objeto que contiene el historial de compras del usuario por categoría
Primero, evaluamos las condiciones para recomendar un producto de alta tecnología:

Si el usuario es miembro y ha comprado 5 o más productos tecnológicos, O
Si el usuario tiene entre 18 y 30 años (inclusive) y ha comprado 2 o más productos de moda Si se cumple alguna de estas condiciones, la función retorna "High-Tech Product".
Si no se cumplen las condiciones para un producto de alta tecnología, evaluamos las condiciones para un producto de moda:

Si el usuario no es miembro, pero ha comprado al menos 3 productos en total (sumando todas las categorías), O
Si el usuario tiene entre 25 y 40 años (inclusive) Si se cumple alguna de estas condiciones, la función retorna "Fashion Product".
Si no se cumple ninguna de las condiciones anteriores, la función retorna "Generic Product", recomendando un producto genérico.
