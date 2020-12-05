// Write a program that will create an Alert in the browser of each of the object's values for the key value pairs.

const employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    greet: function() {
      alert(
        "Name is " + this.name,
        ", Job is " + this.job,
        ", Age is " + this.age
      );
    }
  };
  
  employee.greet();