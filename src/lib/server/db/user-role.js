export class UserRole{
  constructor() {
    this.userRoles = {
      APP_USER: 1,
      MANAGER: 2,
      SUPER_ADMIN: 3,
    }
  }   
  
  findByName(name) {
    return this.userRoles[name]
  }

  findById(id) {
    return Object.keys(this.userRoles).find(key => this.userRoles[key] === id)
  }
}