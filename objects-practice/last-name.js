// Add a method called lastName that prints out the employee's last name to the console.

const employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    lastName: function() {
      console.log(this.name.split(" ")[1]);
    }
  };
  
  employee.lastName();