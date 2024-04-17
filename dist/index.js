"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const departamentos_enums_1 = require("./departamentos.enums");
const salario_function_1 = require("./salario.function");
const empleado = {
    id: 1,
    nombre: 'Juan',
    salarioBase: 50000,
    departamento: departamentos_enums_1.Departamento.IT
};
const salarioCalculado = (0, salario_function_1.calcularSalario)(empleado);
console.log(`El salario de ${empleado.nombre} es ${salarioCalculado}`);
