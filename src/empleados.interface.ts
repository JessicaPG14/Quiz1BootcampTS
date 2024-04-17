import { Departamento } from "./departamentos.enums"

export interface Empleado {
    id: number
    nombre: string
    salarioBase: number
    departamento: Departamento
}