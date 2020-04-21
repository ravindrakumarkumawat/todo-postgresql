const Pool = require('pg').Pool
const pool = new Pool({
  user: 'todo_api',
  host: 'localhost',
  database: 'todos_api',
  password: 'todo123',
  port: 5432,
})