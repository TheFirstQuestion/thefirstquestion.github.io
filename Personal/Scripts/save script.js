// Project Page
function saveEditsProjects() {

  //get the editable element
  var edited = document.getElementById("everything");

  //get the edited element content
  var userVersion = edited.innerHTML;

  //save the content to local storage
  localStorage.setItem('EditsProjects', userVersion);

}

function checkEditsProjects() {

  //find out if the user has previously saved edits
  var savedEdits = localStorage.getItem('EditsProjects');

  if (savedEdits != null) {
    document.getElementById("everything").innerHTML = savedEdits;
  }
}


// Home Page
function saveEditsHome() {

  //get the editable element
  var edited = document.getElementById("everything");

  //get the edited element content
  var userVersion = edited.innerHTML;

  //save the content to local storage
  localStorage.setItem('EditsHome', userVersion);

}

function checkEditsHome() {

  //find out if the user has previously saved edits
  var savedEdits = localStorage.getItem('EditsHome');

  if (savedEdits != null) {
    document.getElementById("everything").innerHTML = savedEdits;
  }
}