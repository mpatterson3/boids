import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Log each incoming request
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Serve public folder as before:
app.use(express.static(path.join(__dirname, 'public')));
// Serve root files (Vehicle.js, Vector.js) under "/js"
app.use('/js', express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', "index.html"));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
