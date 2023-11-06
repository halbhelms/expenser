import Database from 'better-sqlite3'
import { Category } from './category'
import { Department } from './category'
import { ExpenseItemStatus } from './expense-item-status'
import { ExpenseItem } from './expense-item'
import { ExpenseReportStatus } from './expense-report-status'
import { ExpenseReport } from './expense-report'
import { UserRole } from './user-role'
import { User } from './user'

const database = new Database('expenser.db', {verbose: console.log})

export const models = {
  Category: new Category(database),
  Department: new Department(database),
  ExpenseItemStatus: new ExpenseItemStatus(database),
  ExpenseItem: new ExpenseItem(database),
  ExpenseReportStatus: new ExpenseReportStatus(database),
  ExpenseReport: new ExpenseReport(database),
  UserRole: new UserRole(database),
  User: new User(database)
}
