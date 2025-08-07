import { describe, it, expect, test } from "vitest";
import { PrestarLibro } from "../use.cases/prestar-libro";
import { mockUserLibrosRepository } from "../mocks/libro-user.repository";
import { Libro } from "../entities/Libro";

describe("Use Case: PrestarLibro", () => {
  it("debería prestar un libro si no está prestado", async () => {
    const mockRepo = mockUserLibrosRepository([]); // ningún libro prestado
    const useCase = new PrestarLibro(mockRepo);

    const result = await useCase.execute("1", "Cien años de soledad");

    expect(result).toBe("Libro prestado correctamente.");
  });

  it("debería lanzar error si el libro ya está prestado", async () => {
    const libro: Libro = { id: "1", titulo: "Cien años de soledad",autor:"german hese",usuarioId:"4" };
    const mockRepo = mockUserLibrosRepository([libro]);
    const useCase = new PrestarLibro(mockRepo);

    await expect(useCase.execute("1", "Cien años de soledad")).rejects.toThrow("El libro ya ha sido prestado.");
  });
});