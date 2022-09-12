import { Movie, patch } from "../utils/moviesTypes";

const baseUrl = "http://localhost:3030";

export const get = async (getUrl: string) => {
  return await fetch(`${baseUrl}/${getUrl}`).then(response => response.json());
};

export const post = async (data: Movie) => {
  const Request = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  };

  return await fetch(`${baseUrl}/movie`, Request).then(response => {
    if (response.ok) {
      return{
        success: true,
        message: "Filme Adicionado com sucesso! :)"
      }
    } else {
      return{
        success: false,
        message: "Falha ao cadastrar o filme, confira os campos :)"
      }
    }
  });
};

export const remove = async (id: number) => {
  return await fetch(`${baseUrl}/movie/${id}`, { method: "DELETE" }).then(
    response => {
      if (response.ok) {
        return{
          success: true,
          message: "Filme Deletado com Sucesso! :)"
        }
      } else {
        return{
          success: false,
          message: "Vish, se recusa a ir pro lixo!"
        }
      }
    }
  );
};

export const update = async ({ id, data }: patch) => {
  const Request = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify(data),
  };

  return await fetch(`${baseUrl}/movie/${id}`, Request).then(response =>
    response.json()
  );
};
