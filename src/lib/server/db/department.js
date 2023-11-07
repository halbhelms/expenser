export class Department{
  constructor(db) {
    this.db = db;
  }

  init() {
    const creationString = `
      CREATE TABLE IF NOT EXISTS departments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        is_active INTEGER DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    `
      this.db.exec(creationString)
  }

  create(name) {
    // create a statement using this.db.prepare()
    const stmt = this.db.prepare(`
      INSERT INTO departments (
        name
      ) 
      VALUES (
        :name
      )
    `)
    
    // run the statement with the data for the new department (no need to return anything)
    stmt.run({
      name
    })
  }

  findByName(name) {
    // create a statement using this.db.prepare()
    const stmt = db.prepare('SELECT * FROM departments WHERE name = :name');
    // get the statement to return the department with the given name
    return stmt.get(name);
  }

  findAll() {
    // create a statement using this.db.prepare()
    const stmt = db.prepare('SELECT * FROM departments');
    // all the statement to return all departments
    return stmt.all();
  }

}