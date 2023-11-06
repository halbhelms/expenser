// mock data
const expenseItemStatuses = [
  {
    id: 1,
    type: 'APPROVED',
    description: 'Approved',
    active: true
  },
  
  {
    id: 2,
    type: 'PENDING_APPROVAL',
    description: 'Pending Approval',
    active: true
  },
  
  {
    id: 3,
    type: 'SUBMITTED',
    description: 'Submitted for Payment',
    active: true
  },
  
  {
    id: 4,
    type: 'DENIED',
    description: 'Expense over $25 missing receipt',
    active: true
  },
  
  {
    id: 5,
    type: 'DENIED',
    description: 'Unapproved expense',
    active: true
  },
  
  {
    id: 6,
    type: 'DENIED',
    description: 'Just wasn\'t feeling it',
    active: false
  },
]

export async function load(event) {
  return {
    expenseItemStatuses   
  }
}