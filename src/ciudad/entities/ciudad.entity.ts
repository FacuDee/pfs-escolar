import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ciudad')
export class Ciudad {
  @PrimaryGeneratedColumn()
  idCiudad: number;

  @Column()
  private nombreCiudad: string;

  constructor(idCiudad: number, nombreCiudad: string) {
    this.idCiudad = idCiudad;
    this.nombreCiudad = nombreCiudad;
  }
  getIdCiudad(): number {
    return this.idCiudad;
  }
  getNombreCiudad(): string {
    return this.nombreCiudad;
  }
  setIdCiudad(idCiudad: number): void {
    this.idCiudad = idCiudad;
  }
  setNombreCiudad(nombreCiudad: string): void {
    this.nombreCiudad = nombreCiudad;
  }
}
