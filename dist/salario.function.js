"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularSalario = void 0;
const departamentos_enums_1 = require("./departamentos.enums");
// 0.1  0.08  0.12    0.09
function calcularSalario(empleado) {
    let porcentaje = 0;
    switch (empleado.departamento) {
        case departamentos_enums_1.Departamento.IT:
            porcentaje = 0.1;
            break;
        case departamentos_enums_1.Departamento.HR:
            porcentaje = 0.08;
            break;
        case departamentos_enums_1.Departamento.Sales:
            porcentaje = 0.12;
            break;
        case departamentos_enums_1.Departamento.Finance:
            porcentaje = 0.09;
            break;
        default:
    }
    const salario = (empleado.salarioBase * (porcentaje)) + empleado.salarioBase;
    return salario;
}
exports.calcularSalario = calcularSalario;
