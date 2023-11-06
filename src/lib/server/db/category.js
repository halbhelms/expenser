export class Category{
  constructor(db) {
    this.db = db;
  }

  init() {
    const creationString = `
      CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        is_active INTEGER DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    `
      this.db.exec(creationString)
  }

  async create(name) {
    return await this.db.categories.create({
      name
    })
  }

  async findByName(name) {
    const stmt = db.prepare('SELECT * FROM categories WHERE name = ?');
    return stmt.get(name);
  }

  async findAll() {
    const stmt = db.prepare('SELECT * FROM categories');
    return stmt.all();
  }

}