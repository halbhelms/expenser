 export class ExpenseItem {
  constructor(db) {
    this.db = db
  }

  init() {
    // Create the expense_items table if it doesn't exist
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

  create(qty, amount, description, category_id, expense_report_id) {
    // create a statement using this.db.prepare()
    this.db.prepare(`
      INSERT INTO expense_items (
        qty,
        amount,
        description,
        category_id,
        expense_report_id
      ) 
      VALUES (
        :qty,
        :amount,
        :description,
        :category_id,
        :expense_report_id
      )
    `)
    // run the statement with the data for the new expense_item (no need to return anything)
    stmt.run({
      qty,
      amount,
      description,
      category_id,
      expense_report_id
    })
  }

  findAllByUserId(created_by_id) {
    // create a statement using this.db.prepare()
    const stmt = db.prepare('SELECT * FROM expense_items WHERE created_by = :created_by_id')
    // all the statement to return all expense_items
    return stmt.all({created_by_id}) // Pass created_by_id as the parameter here
  }

  findById(id) {
    // create a statement using this.db.prepare()
    const stmt = db.prepare('SELECT * FROM expense_items WHERE id = :id')
    // get the statement to return the expense_item with the given id
    return stmt.get({id}) // Pass id as the parameter here

  }

// TODO
  approve(id, approved_by_id) {
    // create a statement using this.db.prepare()
    const stmt = db.prepare('UPDATE expense_items SET status_id = 2, approved_by_id = :approved_by_id WHERE id = :id')
    // get the statement to return the expense_item with the given id
    return stmt.run({id, approved_by_id}) // Pass id as the parameter here
  }

}
