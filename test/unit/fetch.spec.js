import { fetch } from "@/functions/fetch";

describe("fetchData", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("debería devolver datos correctamente", async () => {
    // Definir datos simulados
    const mockData = { data: "some data" };

    // Configurar el mock para resolver la promesa con datos simulados
    global.fetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    });

    // Llamar a la función y verificar el resultado
    const data = await fetch();
    expect(data).toEqual(mockData);
  });

  // it("debería manejar errores", async () => {
  //   // Configurar el mock para rechazar la promesa
  //   global.fetch.mockResolvedValue({
  //     ok: false,
  //   });

  //   // Verificar que la función lanza el error correcto
  //   await expect(fetch()).rejects.toThrow("Error fetching data");
  // });

  // it("debería manejar errores de red", async () => {
  //   // Configurar el mock para lanzar un error de red
  //   global.fetch.mockRejectedValue(new Error("Network error"));

  //   // Verificar que la función lanza el error correcto
  //   await expect(fetch()).rejects.toThrow("Error fetching data");
  // });
});
