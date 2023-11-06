export class User{
  constructor(db) {
    this.db = db;
  }

  init() {
    const creationString = `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        role_id INTEGER NOT NULL,
        department_id INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
        FOREIGN KEY (department_id) REFERENCES departments(id),
        FOREIGN KEY (role_id) REFERENCES roles(id),
    `
      this.db.exec(creationString)
  }

  async create({ first_name, last_name, username, password, role_id, department_id }) {
    return await this.db.users.create({
      first_name,
      last_name,
      username,
      password: await bcrypt.hash(password, 10),
      role_id,
      department_id
    });
  }

  async findByUsername(username) {
    return await this.db.users.findOne({
      where: { username },
    });
  }

  async findById(id) {
    return await this.db.users.findByPk(id);
  }

  async findAll() {
    return await this.db.users.findAll();
  } 
}
