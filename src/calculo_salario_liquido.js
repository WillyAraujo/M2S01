function calcSalarioLiquido(salarioBruto, outrosDescontos = 0) {
    const calcularInss = require("./calculo_inss")
    const calcularImpRenda = require("./calculo_imposto_renda")

    const inss = calcularInss(salarioBruto)
    const ir = calcularImpRenda(salarioBruto)

    const salarioLiquido = salarioBruto - inss - ir - outrosDescontos

    return salarioLiquido;
}

module.exports = calcSalarioLiquido