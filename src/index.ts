import { Departamento } from "./departamentos.enums";
import { Empleado } from "./empleados.interface";
import { calcularSalario } from "./salario.function";

const empleado: Empleado = {
    id: 1,
    nombre: 'Juan',
    salarioBase: 50000,
    departamento: Departamento.IT
}

const salarioCalculado = calcularSalario(empleado)
console.log(`El salario de ${empleado.nombre} es ${salarioCalculado}`)