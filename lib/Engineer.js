const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email) {
    super(name, id, email)
    this.role = "Engineer";
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
}

module.exports = Engineer;