// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  }
  
  module.exports = Employee;


  // In the above code, Employee is the parent class and Manager, Engineer, and Intern are the child classes that extend the Employee class. Each class has its own constructor that takes in the required parameters and sets the role property accordingly.

// Also, you should export the class at the end of the file so that it can be imported in the main file.

// You can also add the methods like getName(), getId(), getEmail(), getRole() in the Employee class and override the getRole() method in the child classes if you want.