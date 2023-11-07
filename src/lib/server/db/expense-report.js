 import { models } from "$lib/server/db/index.js"
 const initialStatus = models.ExpenseReportStatus.findByName('SUBMITTED_FOR_REVIEW')

 export class ExpenseReport {
  constructor(db) {
    this.db = db
  }

  init() {
    // Create the expense_reports table if it doesn't exist
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
        FOREIGN KEY (verified_by_id) REFERENCES users(id)
      `
      this.db.exec(creationString)
  }

  create({ created_by_id, month, year }) {
    // create a statement using this.db.prepare()
    const stmt = this.db.prepare(`
      INSERT INTO expense_reports (
        created_by_id,
        month,
        year,
        status_id
      ) 
      VALUES (
        :created_by_id,
        :month,
        :year,
        status_id: 
      )
    `)
    // run the statement with the data for the new expense_report (no need to return anything)
    stmt.run({
      created_by_id,
      month,
      year,
      status_id: initialStatus  })
  }

  findAllByUserId(created_by_id) {
    const stmt = db.prepare('SELECT * FROM expense_reports WHERE created_by_id = :created_by_id')
    return stmt.all({created_by_id}) // Pass created_by_id as the parameter here
  }

  findById(id) {
    const stmt = db.prepare('SELECT * FROM expense_reports WHERE id = :id')
    return stmt.get({id}) // Pass id as the parameter here
  }
}
