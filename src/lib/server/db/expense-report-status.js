export class ExpenseReportStatus{
  constructor() {
    this.expenseReportStatuses = {
      SUBMITTED_FOR_REVIEW: 1,
      PARTIALLY_APPROVED: 2,
      FULLY_APPROVED: 3,
      REJECTED: 4,
      PAID: 5
    }
  }   
  
  findByName(name) {
    return this.expenseReportStatuses[name]
  }

  findById(id) {
    return Object.keys(this.expenseReportStatuses).find(key => this.expenseReportStatuses[key] === id)
  }
}