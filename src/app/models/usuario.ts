export class Usuario{
    abrev_usuario: string | undefined;
    nom_usuario: string | undefined;
    password: string | undefined
    mail: string | undefined;  
    fec_add: Date | undefined;
    est_activo: number | undefined;
    est_primer_ingreso: number | undefined;
    num_intentos: number | undefined;
}