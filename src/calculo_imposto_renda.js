function calcularImpRenda(salarioBruto) {
  let ir = 0

  if (salarioBruto <= 2112) {
    ir = 0;
  } else if (salarioBruto >= 2112.01 && salarioBruto <= 2826.65) {
    ir = salarioBruto * 0.075 - 158.4
  } else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
    ir = salarioBruto * 0.15 - 370.40
  } else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
    ir = salarioBruto * 0.225 - 651.73
  } else {
    ir = salarioBruto * 0.275 - 884.96
  }

  return ir;
}

module.exports = calcularImpRenda