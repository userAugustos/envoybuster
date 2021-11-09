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
      response.json();
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
    response => response.json()
  );
};

export const update = async ({ id, data }: patch) => {
  console.log(data);
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
