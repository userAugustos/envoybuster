import { Movie, patch } from "../utils/moviesTypes";

const baseUrl = "http://localhost:3030";

export const get = async () => {
  return await fetch(`${baseUrl}/movies`).then(response => response.json());
};

export const post = async (data: Movie) => {
  const Request = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  };

  return await fetch(`${baseUrl}/movie`, Request).then(response =>
    response.json()
  );
};

export const remove = async (id: number) => {
  return await fetch(`${baseUrl}/movie/${id}`, { method: "DELETE" }).then(response =>
    response.json()
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
