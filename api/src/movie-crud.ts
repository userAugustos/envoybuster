import express = require("express");
import fs = require("fs");

import { DBdata, Movies, patchBody } from "./types";

const getDB = () => {
  const db = fs.readFileSync("./db.json", "utf-8");

  const defaultData = {
    movies: [],
    // genres: []
  };

  if (!db) {
    fs.writeFileSync("./db.json", JSON.stringify(defaultData), "utf-8");
  }

  return JSON.parse(db);
};

export const getMovies = async (
  req: express.Request,
  res: express.Response
) => {
  const { movies }: DBdata = await getDB();

  res.send(movies);
};

export const getMovie = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const movies = await getDB().movies;

  const index = await movies.findIndex((movie: any) => movie.id == id);

  index >= 0
    ? res.status(200).send(movies[index])
    : res.status(400).send({ success: false, error: "Não achamos o filme!" });
};

export const postMovies = async (
  req: express.Request,
  res: express.Response
) => {
  const movie: Movies = req.body;

  const currentData = getDB();

  const lastMovieInDB = currentData.movies[currentData.movies.length - 1]; //could use .pop(), but... idk

  try {
    lastMovieInDB ? (movie.id = lastMovieInDB.id + 1) : (movie.id = 1);

    await currentData.movies.push(movie);

    fs.writeFileSync("./db.json", JSON.stringify(currentData), "utf-8");

    res.status(200).send({
      success: true,
      message: "Filme Inserido com Sucesso!",
      // filme: movie
    });
  } catch (error) {
    res.status(400).send({ success: false, error: error });
  }
};

export const patchMovies = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;

  const currentData = await getDB();

  try {
    let index = currentData.movies.findIndex((movie: any) => movie.id == id);

    if (index >= 0) {
      for (let data in req.body) {
        if (data in patchBody) {
          currentData.movies[index][data] = req.body[data];
        } else {
          res.status(400).send("Esse parametro não existe!");
        }
      }

      fs.writeFileSync("./db.json", JSON.stringify(currentData), "utf-8");

      res.status(200).send({
        success: true,
        message: "Filme Atualizado com sucesso!",
        // changes: newData
      });
      return;
    }
  } catch (error) {
    // res.status(400).send("Ouve um problema ao atualizar seu filme" + error);
    res.status(400).send({ success: false, error: error });
  }
};

export const deleteMovies = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;

  const currentData = await getDB();

  try {
    let index = currentData.movies.findIndex((movie: any) => movie.id == id);

    if (index >= 0) {
      currentData.movies.splice(index, 1);

      fs.writeFileSync("./db.json", JSON.stringify(currentData), "utf-8");

      res.status(200).send({
        success: true,
        message: "Filme Deletado com sucesso!",
      });
      return;
    }
  } catch (error) {
    res.status(400).send({ success: false, error: error });
  }
};
