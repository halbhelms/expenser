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

  async create(name) {
    return await this.db.departments.create({
      name
    });
  }

  async findByName(name) {
    const stmt = db.prepare('SELECT * FROM departments WHERE name = ?');
    return stmt.get(name);
  }

  async findAll() {
    const stmt = db.prepare('SELECT * FROM departments');
    return stmt.all();
  }

}