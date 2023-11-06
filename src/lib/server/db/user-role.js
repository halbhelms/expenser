export class UserRole{
  constructor(db) {
    this.db = db;
  }

  init() {
    const creationString = `
      CREATE TABLE IF NOT EXISTS user_roles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        is_active INTEGER DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    `
      this.db.exec(creationString)
  }

  async create(name) {
    return await this.db.user_roles.create({
      name
    });
  }

  async findAll() {
    const stmt = db.prepare('SELECT * FROM user_roles');
    return stmt.all();
  }

}