import express = require("express");
const server = express();
const router = express.Router();

import * as movieCRUD from "./movie-crud";

import { movieSchema } from "./validate";

server.use(express.json());

import cors = require("cors");

server.use(cors({ origin: " http://localhost:3000" }));

const validate = (schema: any) => async (req: express.Request, res: express.Response, next: express.NextFunction) =>{
  const data = req.body;

  try {
    await schema.validate(data);
    next();
  } catch (error) {
    res.status(400).send("Identificamos o erro" + error);
  }
}

router.get("/", (req: express.Request, res: express.Response) => {
  res.send("Aoba, tudo certo aqui");
})

router.get("/movies", movieCRUD.getMovies);

router.post("/movie", validate(movieSchema), movieCRUD.postMovies);

router.patch("/movie/:id", movieCRUD.patchMovies);

router.delete("/movie/:id", movieCRUD.deleteMovies);


server.use(router);

server.listen(3030);
