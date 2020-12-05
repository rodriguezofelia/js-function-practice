// Add a method called nameLength that prints out the length of the employees name to the console.

const employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    nameLength: function() {
      console.log(this.name.length);
    }
  };
  
  employee.nameLength();