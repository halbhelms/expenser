export class User{
  constructor(db) {
    this.db = db;
  }

  init() {
    const creationString = `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        role_id INTEGER NOT NULL,
        department_id INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
        FOREIGN KEY (department_id) REFERENCES departments(id)
    `
      this.db.exec(creationString)
  }

  create(first_name, last_name, username, password, role_id, department_id) {
    // create a statement using this.db.prepare()
    const stmt = this.db.prepare(`
      INSERT INTO users (
        first_name,
        last_name,
        username,
        password,
        role_id,
        department_id
      ) 
      VALUES (
        :first_name,
        :last_name,
        :username,
        :password,
        :role_id,
        :department_id
      )
    `)
    
    // run the statement with the data for the new user (no need to return anything)
    stmt.run({
      first_name,
      last_name,
      username,
      password:  bcrypt.hash(password, 10),
      role_id,
      department_id
    })
  }

  findByUsername(username) {
    // create a statement using this.db.prepare()
    const stmt = this.db.prepare('SELECT * FROM users WHERE username = :username')
    // get the statement to return the user with the given username
    return stmt.get({ username })
  }

  findById(id) {
    // create a statement using this.db.prepare()
    const stmt = thios.db.prepare('SELECT * FROM users WHERE id = :id')
    // get the statement to return the user with the given id
    return stmt.get({ id })
  }

  findAll() {
    // create a statement using this.db.prepare()
    const stmt = this.db.prepare('SELECT * FROM users')
    // all the statement to return all users
    return stmt.all()
  } 
}
