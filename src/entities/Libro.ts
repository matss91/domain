export interface Libro {
  id: string;
  titulo: string;
  autor: string;
  usuarioId: string; // Relación con el Usuario
};