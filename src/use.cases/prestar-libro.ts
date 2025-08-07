
   import { UserLibrosRepository } from "../usersRepositories/user-libro-repository";

export class PrestarLibro {
  private userLibrosRepository: UserLibrosRepository;

  constructor(userLibrosRepository: UserLibrosRepository) {
    this.userLibrosRepository = userLibrosRepository;
  }

  async execute(libroId: string, titulo: string): Promise<string> {
    const estaPrestado = await this.userLibrosRepository.LibroPrestado(libroId, titulo);

    if (estaPrestado) {
      throw new Error("El libro ya ha sido prestado.");
    }

    // Lógica simulada para prestar el libro (podrías agregar más lógica aquí)
    return "Libro prestado correctamente.";
  }
}