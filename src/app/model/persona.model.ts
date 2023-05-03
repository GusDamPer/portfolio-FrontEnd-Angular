export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    puesto: string;
    compania: string;
    acerca: string;
    ubicacion: string;


    constructor (nombre: string, apellido: string, descripcion: string, img: string, puesto: string, compania: string, acerca: string, ubicacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.puesto = puesto;
        this.compania = compania;
        this.acerca = acerca;
        this.ubicacion = ubicacion;
    }
}