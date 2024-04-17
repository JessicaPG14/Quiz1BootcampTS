import { Departamento } from './departamentos.enums';
import { Empleado } from './empleados.interface';

// IT:0.1 HR:0.08 Sales:0.12 Finance:0.09
export function calcularSalario(empleado: Empleado) {
    let porcentaje = 0

    switch(empleado.departamento) {
        case Departamento.IT:
            porcentaje = 0.1
            break
        case Departamento.HR:
            porcentaje = 0.08
            break
        case Departamento.Sales:
            porcentaje = 0.12
            break
        case Departamento.Finance:
            porcentaje = 0.09
            break
        default:
    } 

    const salario = (empleado.salarioBase * (porcentaje)) + empleado.salarioBase
    return salario
}