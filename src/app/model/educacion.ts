export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    img: string;
    fechaini: string;
    fechafin: string;

    constructor(nombreE: string, descripcionE: string, img: string, fechaini: string, fechafin: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.img = img;
        this.fechaini = fechaini;
        this.fechafin = fechafin;
    }
}
