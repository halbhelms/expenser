export class ExpenseItemStatus{
  constructor() {
    this.expenseItemStatuses = {
      PENDING: 1,
      APPROVED: 2,
      REJECTED: 3,
    }
  }   
  
  findByName(name) {
    return this.expenseItemStatuses[name]
  }

  findById(id) {
    return Object.keys(this.expenseItemStatuses).find(key => this.expenseItemStatuses[key] === id)
  }
}