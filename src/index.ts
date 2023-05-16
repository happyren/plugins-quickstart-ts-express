import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import fs from "fs";
import path from "path";

dotenv.config();
const app = express();

app.use(helmet());
app.use(cors({
  origin: "https://chat.openai.com",
}));
app.use(express.json());

const todo: Record<string, any[]> = {};

// app routes
app.post("/todos/:username", async (req: Request, res: Response) => {
  const username = req.params.username;
  const request = req.body;

  if (!todo[username]) {
    todo[username] = [];
  }

  todo[username].push(request.todo);
  res.status(200).send('OK');
});

app.get("/todos/:username", async (req: Request, res: Response) => {
  const username = req.params.username;
  res.status(200).json(todo[username] || []);
});

app.delete('/todos/:username', async (req: Request, res: Response) => {
  const username = req.params.username;
  const request = req.body;
  const todo_idx = request.todo_idx;

  if (0 <= todo_idx && todo_idx < todo[username].length) {
    todo[username].splice(todo_idx, 1);
  }

  res.status(200).send('OK');
});

app.get('/logo.png', (req: Request, res: Response) => {
  const filename = 'logo.png';
  res.sendFile(filename,  { root: './' }, (err) => {
    if (err) {
      res.status(404).send('File not found');
    }
  });
});

app.get('/.well-known/ai-plugin.json', (req: Request, res: Response) => {
  fs.readFile('./.well-known/ai-plugin.json', 'utf-8', (err, data) => {
    if (err) {
      res.status(404).send('File not found');
    } else {
      res.set('Content-Type', 'text/json');
      res.status(200).send(data);
    }
  });
});

app.get('/openapi.yaml', (req: Request, res: Response) => {
  fs.readFile('./public/openapi.yaml', 'utf-8', (err, data) => {
    if (err) {
      res.status(404).send('File not found');
    } else {
      res.set('Content-Type', 'text/yaml');
      res.status(200).send(data);
    }
  });
});

// app starts listening
app.listen(5003, () => {
  console.log(`Listening on port ${5003}`);
});