let form = document.getElementsByClassName("form");
form.onclick = function (e) {
  if (e.target === form[0]) {
    createPrpjectForm();
  } else if (e.target === form[1]) {
    createTaskForm();
  }
};

//get the buttons from the html with class name form
// if form[0] == e.target
// add an onlcik event that call the function createProjectForm
// if form[1] == e.target
// add an onclick event that will call the function createTaskForm
