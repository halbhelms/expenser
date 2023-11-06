 import { models } from "$lib/server/db/index.js"
 const initialStatus = models.ExpenseReportStatus.findByName('SUBMITTED_FOR_APPROVAL')

 export class ExpenseReport {
  constructor(db) {
    this.db = db
  }

  init() {
    const creationString = `
      CREATE TABLE IF NOT EXISTS expense_reports (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        created_by_id INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        verified_by_id INTEGER,
        verified_at TIMESTAMP,
        paid_at TIMESTAMP,
        month: INTEGER,
        year: INTEGER,
        status_id INTEGER NOT NULL,
        FOREIGN KEY (created_by_id) REFERENCES users(id),
        FOREIGN KEY (verified_by_id) REFERENCES users(id),
        FOREIGN KEY (status_id) REFERENCES expense_report_statuses(id)
      `
      this.db.exec(creationString)
  }

  async create({ created_at_id, month, year }) {
    return await this.db.expense_reports.create({
      created_at_id,
      month,
      year,
      expense_report_status_id: initialStatus.id
    })
  }

  async findAllByUserId(created_by_id) {
    const stmt = db.prepare('SELECT * FROM expense_reports WHERE created_by = ?')
    return stmt.all(created_by_id) // Pass created_by_id as the parameter here
  }

  async findById(id) {
    return await this.db.expense_reports.findByPk(id)
  }
}
