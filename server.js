
// @ts-check

import { spawnSync } from 'child_process';
import express from 'express';
import bodyParser from 'body-parser';
import { inspect } from 'util';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;


app.get('/', (req, res) => {
  const ls = spawnSync('find', ['/sdcard/Pictures/']);
  res.send(ls.stdout.toString());
});

app.post('/', (req, res) => {
  console.log(req.body.shell_cmd);
  const command = req.body.shell_cmd;
  const args = req.body.args;
  spawnSync(command, args); 
  res.send('success');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
