// Create Empty Student Roster Array
const roster = [];

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addName that takes in a name
// and uses .push to add a new student to the array

function addName() {
  const newName = prompt("What name would you like to add?").toLowerCase();
  roster.push(newName);
}

// REMOVE STUDENT

// Create a function called removeName that takes in a name
// Finds its index location, then removes that name from the roster

function removeName() {
  const deleteName = prompt(
    "What name would you like to remove?"
  ).toLowerCase();

  if (deleteName !== roster) {
    console.log("Sorry, that name isn't in the roster!");
  } else {
    const index = roster.indexOf(deleteName);
    roster.splice(index);
  }
}

// DISPLAY ROSTER

// Create a function called displayRoster that prints out the roster to the console.

function displayRoster() {
  console.log(roster);
}
// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.

const startApp = prompt(
  "Would you like to start the roster app? y/n"
).toLowerCase();
let request = "";

if (startApp == "y") {
  while (request !== "quit") {
    request = prompt(
      "Please select an action: add, remove, display or quit."
    ).toLowerCase();
    if (request === "add") {
      addName();
    } else if (request === "display") {
      displayRoster();
    } else if (request === "remove") {
      removeName();
    } else if (request === "quit") {
      console.log("Thanks for playing!");
    } else {
      console.log(
        "Sorry, that's not an option. You can choose between add, remove, display or quit."
      );
    }
  }
}
