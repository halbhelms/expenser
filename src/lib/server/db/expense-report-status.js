export class ExpenseReportStatus{
  constructor(db) {
    this.db = db;
  }

  init() {
    const creationString = `
      CREATE TABLE IF NOT EXISTS expense_report_statuses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        is_active INTEGER DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    `
      this.db.exec(creationString)
  }

  async create({ name }) {
    return await this.db.expense_report_statuses.create({
      name
    });
  }

  async findAll() {
    const stmt = db.prepare('SELECT * FROM expense_report_statuses');
    return stmt.all();
  }

  async findByName(name) {
    const stmt = db.prepare('SELECT * FROM expense_report_statuses WHERE name = ?');
    return stmt.get(name);
  }
 
}