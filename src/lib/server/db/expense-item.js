 export class ExpenseItem {
  constructor(db) {
    this.db = db
  }

  init() {
    const creationString = `
      CREATE TABLE IF NOT EXISTS expense_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        qty INTEGER NOT NULL,
        amount DECIMAL(10, 2) NOT NULL,
        description TEXT NOT NULL,
        expense_report_id INTEGER NOT NULL,
        category_id INTEGER NOT NULL,
        status_id INTEGER NOT NULL,
        approved_by_id INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (approved_by_id) REFERENCES users(id),
        FOREIGN KEY (category_id) REFERENCES categories(id),
        FOREIGN KEY (status_id) REFERENCES expense_item_statuses(id),
        FOREIGN KEY (expense_report_id) REFERENCES expense_reports(id)
      `
      this.db.exec(creationString)
  }

  async create(qty, amount, description, category_id, expense_report_id) {
    return await this.db.expense_reports.create({
    })
  }

  async findAllByUserId(created_by_id) {
    const stmt = db.prepare('SELECT * FROM expense_reports WHERE created_by = ?')
    return stmt.all(created_by_id) // Pass created_by_id as the parameter here
  }

  async findById(id) {
    return await this.db.expense_reports.findByPk(id)
  }

// TODO
  async update(id, {name, description}) {
    const stmt = db.prepare('UPDATE expense_reports SET name = ?, description = ? WHERE id = ?')
    return stmt.run(name, description, id)
  }
}
