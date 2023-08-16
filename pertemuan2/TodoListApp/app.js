const express = require('express');
const fs = require('fs');
const app = express ();
const port = 3000;

app.use(express.urlencoded({ extended: false}));

//endpoint untuk get todos
app.get('/', (req, res)=>{
  const todos = JSON.parse(fs.readFileSync('database.json'));
  res.send(todos);
})

//endpoint untuk add todos
app.post('/', (req, res, next)=>{
  if(req.body.todo==null){
    res.send('data kosong');
    return;
  }
    const newTodo = req.body.todo;
    const todos = JSON.parse(fs.readFileSync('database.json'));
    todos.push(newTodo);
    fs.writeFileSync('database.json', JSON.stringify(todos,null,2));
    res.status(201);
    res.send('data sudah diinput');
})

//endpoint untuk delete todos

app.get('/delete/:index', (req,res)=>{
  const index = req.params.index;
  const todos = JSON.parse(fs.readFileSync('database.json'));
  todos.splice(index, 1);
  fs.writeFileSync('database.json', JSON.stringify(todos,null,2));
  res.send('data dengan index ', index, 'sudah didelete');
})

app.listen(port, ()=>{
  console.log('server running on port ', port);
})