const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
//app.use(express.static('public'));

// Endpoint untuk halaman utama
app.get('/', (req, res) => {
  const todos = JSON.parse(fs.readFileSync('data.json'));
  res.send(todos);
});

// Endpoint untuk menambahkan tugas baru
app.post('/add', (req, res) => {
  const newTodo = req.body.todo;
  const todos = JSON.parse(fs.readFileSync('data.json'));
  todos.push(newTodo);
  fs.writeFileSync('data.json', JSON.stringify(todos));
  res.redirect('/');
});

// Endpoint untuk menghapus tugas
app.get('/delete/:index', (req, res) => {
  const index = req.params.index;
  const todos = JSON.parse(fs.readFileSync('data.json'));
  todos.splice(index, 1);
  fs.writeFileSync('data.json', JSON.stringify(todos));
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});