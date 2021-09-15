/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project{
constructor(id, name, description) {
    this.id = id
    this.name = name;
    this.description  = description
    this.allTasks = [];
    this.active
}
addTask(task){
    this.allTasks.push(task)
}
deleteTask(taskId){
  this.allTasks = this.allTasks.filter((task) => task.id !== taskId)
    // this.allTasks.splice(taskId, 1)
} 
setTaskId(){
    return this.allTasks.length
}
getAllTasks(){
    return this.allTasks
}
getId(){
    return this.id
}

getTitle(){
    return this.name
}
}
 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/modules/ToDoItem.js":
/*!*********************************!*\
  !*** ./src/modules/ToDoItem.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// function ToDoItem() {
//     console.log("A todo item has been created");
// }

class ToDoItem {
    constructor(id, title, description, dueDate, priority, notes) {
        this.id = id;
        this.title = title;
        this.description = description; 
        this.dueDate = dueDate;
        this.priority = priority;
        // this.notes = notes
    }
    // getId(){
    //     return this.id
    // }

   toDoTitle (){
        return this.title
    }
    toDoDescription(){
        return this.description;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoItem);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ToDoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ToDoItem */ "./src/modules/ToDoItem.js");
/* harmony import */ var _modules_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Project */ "./src/modules/Project.js");


console.log("hello world!");

const myProjects = [];

const addTaskBtn = document.getElementById("addTask");
const projectDiv = document.getElementById("projectList");

const addProjectsBtn = document.getElementById("addProject");

//button event listeners
addTaskBtn.addEventListener("click", createTaskForm);
addProjectsBtn.addEventListener("click", createProjectForm);
window.addEventListener('load', ()=>{
  let getAllTask = JSON.parse(localStorage.getItem('myProjects')) || []
  console.log(getAllTask);
  // getAllTask.forEach(task => {
  //   displayProjectTask()
  // })
})

//project form
function createProjectForm() {
  let projectFormDiv = document.getElementById("projectForm");
  projectFormDiv.style.display = "block";
  projectFormDiv.innerHTML = `
        <div class="modal-content"> 
        <label for="projectNme">Project Name</label>
        <input id="projectNme" type="text">
        <label for="">Project Description</label>
        <input id="projectDesc" type="text">
        <button id="createProject" class="button">create project</button>
        <button id="cancelProject" class="button-cancel">cancel</button>
        </div>
    `;
  let projectDelBtn = document.getElementById("cancelProject");
  projectDelBtn.onclick = () => {
    cancelProject();
  };

  let projectCreateBtn = document.getElementById("createProject");
  projectCreateBtn.onclick = createProject;
}

function createProject(projName, projDescription) {
  let projId = myProjects.length;
  projName = document.getElementById("projectNme").value;
  projDescription = document.getElementById("projectDesc").value;
  let projectState;

  if (!projName) {
    alert("Enter a project name");
  } else {
    let newProject = new _modules_Project__WEBPACK_IMPORTED_MODULE_1__["default"](
      projId,
      projName,
      projDescription,
      projectState
    );
    myProjects.push(newProject);
    displayProject();
    cancelProject();
    newProject.active = true;
    for (let i = 0; i < myProjects.length - 1; i++) {
      myProjects[i].active = false;
    }
    displayProjectTask();
    console.log(myProjects);
    // localStorage.setItem('myProjects', JSON.stringify(myProjects));
  }
}

function displayProject() {
  projectDiv.innerHTML = "";
  myProjects.forEach((project, i) => {
    projectDiv.innerHTML += `
        <div class="singleProjDiv">
            <span class="projectName">${project.name}</span>
            <button class="projectDelItem icon-btns"><i class="fal fa-trash-alt fa-2x"></i></button>
        </div>
        `;
  });

  let removeProject = document.querySelectorAll(".projectDelItem");
  removeProject.forEach((button, index) => {
    button.addEventListener("click", () => deleteProject(index));
  });

  let projectItem = document.querySelectorAll(".projectName");

  projectItem.forEach((item, id) =>
    item.addEventListener("click", (e) => {
      let currentProject = myProjects[id];
      console.log(currentProject);
      currentProject.active = true;
      for (let i = 0; i < myProjects.length; i++) {
        if (i !== id) {
          myProjects[i].active = false;
        }
      }
      cancelTask();
      displayProjectTask();
      localStorage.setItem('myProjects')
      console.log(myProjects);
    })
  );
}

function displayProjectTask() {
  let activeProject = getActiveProject();
  let currentProject = activeProject.getAllTasks();
  let taskDiv = document.getElementById("taskDiv");
  let taskHead = document.getElementById("main-content").firstElementChild;
  let taskDesc = document.getElementById("project-desc");
  taskDiv.innerHTML = "";

  taskHead.innerHTML = activeProject.name;
  taskDesc.innerHTML = activeProject.description;

  let singleTask = "";
  currentProject.forEach((projectTask) => {
    let taskid = projectTask.id;

    singleTask += `<div class="single-task">
            <input type="checkbox">
            <h4>${projectTask.title}</h4>
            <span>${projectTask.dueDate}</span>
            <div class="singleTask-btn">
                <button class="edit-task icon-btns"><i class="fal fa-edit fa-2x"></i></button>
                <button class="delete-task icon-btns"><i data-task=${taskid} class="fal fa-trash-alt fa-2x"></i></button>
            </div>
            <div class="singletask-desc" style="display:none">${projectTask.description}</div>
        </div>
        `;
  });

  taskDiv.innerHTML = "";
  taskDiv.innerHTML += singleTask;

  showTaskDescription();

  let deleteTaskBtn = document.querySelectorAll(".delete-task");
  deleteTaskBtn.forEach((element) => {
    element.addEventListener("click", removeTask);
  });
}

function showTaskDescription() {
  let tasks = document.querySelectorAll(".single-task");
  tasks.forEach((task, id) => {
    task.setAttribute("id", id);
    task.onclick = (e) => {
      console.log(e.target.parentNode);

      if (id == e.target.parentNode.id || id == e.target.id) {
        console.log("clicked here", id);
        let description = task.querySelector(".singletask-desc");

        if (description.style.display == "block") {
          description.style.display = "none";
        } else if (description.style.display == "none") {
          description.style.display = "block";
        }
      }
    };
  });
}

function deleteProject(projId) {
  myProjects.splice(projId, 1);
  displayProject();
  console.log(myProjects);
}

function cancelProject() {
  let div = document.getElementById("projectForm");
  div.style.display = "none";
}

//task form
function createTaskForm(e) {
  const todoForm = document.getElementById("taskForm");
  todoForm.style.display = "block";

  todoForm.innerHTML = `
        <div class="form-inputs">
            <input id="todoTitle" type="text" placeholder="Task title">
            <input id="date" type="date">
        </div>
        <div>
            <textarea id="description" type="text" placeholder="task description" col></textarea>
        </div>
        <div class="form-buttons">
            <button id="createTaskBtn" class="button">add Task</button>
            <button id="cancelTaskBtn" class="button-cancel">cancel</button>
        </div>
    `;

  let createTaskBtn = document.getElementById("createTaskBtn");
  let cancelBtn = document.getElementById("cancelTaskBtn");

  createTaskBtn.addEventListener("click", createTask);
  cancelBtn.addEventListener("click", cancelTask);
}

function cancelTask() {
  const todoForm = document.getElementById("taskForm");
  todoForm.style.display = "none";
}

function createTask(taskTitle, taskDescription, taskDueDate, taskPriority) {
  let activeProject = getActiveProject();

  let taskId = activeProject.setTaskId();
  taskTitle = document.getElementById("todoTitle").value;
  taskDescription = document.getElementById("description").value;
  taskDueDate = document.getElementById("date").value;

  if (!taskTitle) {
    alert("You must enter a task Title for this to be valid");
  } else {
    let newTask = new _modules_ToDoItem__WEBPACK_IMPORTED_MODULE_0__["default"](taskId, taskTitle, taskDescription, taskDueDate);
    activeProject.addTask(newTask);
    displayProjectTask();
    const todoForm = document.getElementById("taskForm");
    todoForm.style.display = "none";
    // localStorage.setItem("allTask", JSON.stringify(myProjects))
    // console.log(JSON.parse(localStorage.getItem('allTask')));

  }
}

function getActiveProject() {
  return myProjects.find((project) => {
    return project.active;
  });
}

function removeTask(event) {
  console.log(event.target);
  let taskId = event.target.dataset.task;
  console.log(taskId);

  let activeProject = getActiveProject();
  activeProject.deleteTask(parseInt(taskId));
  displayProjectTask();
  console.log(myProjects);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veS8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9tb2R1bGVzL1RvRG9JdGVtLmpzIiwid2VicGFjazovL3kvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8veS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3kvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly95Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2plY3R7XG5jb25zdHJ1Y3RvcihpZCwgbmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gID0gZGVzY3JpcHRpb25cbiAgICB0aGlzLmFsbFRhc2tzID0gW107XG4gICAgdGhpcy5hY3RpdmVcbn1cbmFkZFRhc2sodGFzayl7XG4gICAgdGhpcy5hbGxUYXNrcy5wdXNoKHRhc2spXG59XG5kZWxldGVUYXNrKHRhc2tJZCl7XG4gIHRoaXMuYWxsVGFza3MgPSB0aGlzLmFsbFRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPT0gdGFza0lkKVxuICAgIC8vIHRoaXMuYWxsVGFza3Muc3BsaWNlKHRhc2tJZCwgMSlcbn0gXG5zZXRUYXNrSWQoKXtcbiAgICByZXR1cm4gdGhpcy5hbGxUYXNrcy5sZW5ndGhcbn1cbmdldEFsbFRhc2tzKCl7XG4gICAgcmV0dXJuIHRoaXMuYWxsVGFza3Ncbn1cbmdldElkKCl7XG4gICAgcmV0dXJuIHRoaXMuaWRcbn1cblxuZ2V0VGl0bGUoKXtcbiAgICByZXR1cm4gdGhpcy5uYW1lXG59XG59XG4gXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyIsIi8vIGZ1bmN0aW9uIFRvRG9JdGVtKCkge1xuLy8gICAgIGNvbnNvbGUubG9nKFwiQSB0b2RvIGl0ZW0gaGFzIGJlZW4gY3JlYXRlZFwiKTtcbi8vIH1cblxuY2xhc3MgVG9Eb0l0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uOyBcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAvLyB0aGlzLm5vdGVzID0gbm90ZXNcbiAgICB9XG4gICAgLy8gZ2V0SWQoKXtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaWRcbiAgICAvLyB9XG5cbiAgIHRvRG9UaXRsZSAoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGVcbiAgICB9XG4gICAgdG9Eb0Rlc2NyaXB0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9Eb0l0ZW07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVG9Eb0l0ZW0gZnJvbSBcIi4vbW9kdWxlcy9Ub0RvSXRlbVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vbW9kdWxlcy9Qcm9qZWN0XCI7XG5jb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkIVwiKTtcblxuY29uc3QgbXlQcm9qZWN0cyA9IFtdO1xuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrXCIpO1xuY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdExpc3RcIik7XG5cbmNvbnN0IGFkZFByb2plY3RzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0XCIpO1xuXG4vL2J1dHRvbiBldmVudCBsaXN0ZW5lcnNcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVRhc2tGb3JtKTtcbmFkZFByb2plY3RzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVQcm9qZWN0Rm9ybSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XG4gIGxldCBnZXRBbGxUYXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlQcm9qZWN0cycpKSB8fCBbXVxuICBjb25zb2xlLmxvZyhnZXRBbGxUYXNrKTtcbiAgLy8gZ2V0QWxsVGFzay5mb3JFYWNoKHRhc2sgPT4ge1xuICAvLyAgIGRpc3BsYXlQcm9qZWN0VGFzaygpXG4gIC8vIH0pXG59KVxuXG4vL3Byb2plY3QgZm9ybVxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0oKSB7XG4gIGxldCBwcm9qZWN0Rm9ybURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEZvcm1cIik7XG4gIHByb2plY3RGb3JtRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIHByb2plY3RGb3JtRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj4gXG4gICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0Tm1lXCI+UHJvamVjdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwicHJvamVjdE5tZVwiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJcIj5Qcm9qZWN0IERlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwicHJvamVjdERlc2NcIiB0eXBlPVwidGV4dFwiPlxuICAgICAgICA8YnV0dG9uIGlkPVwiY3JlYXRlUHJvamVjdFwiIGNsYXNzPVwiYnV0dG9uXCI+Y3JlYXRlIHByb2plY3Q8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbFByb2plY3RcIiBjbGFzcz1cImJ1dHRvbi1jYW5jZWxcIj5jYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbiAgbGV0IHByb2plY3REZWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbFByb2plY3RcIik7XG4gIHByb2plY3REZWxCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICBjYW5jZWxQcm9qZWN0KCk7XG4gIH07XG5cbiAgbGV0IHByb2plY3RDcmVhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVByb2plY3RcIik7XG4gIHByb2plY3RDcmVhdGVCdG4ub25jbGljayA9IGNyZWF0ZVByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvak5hbWUsIHByb2pEZXNjcmlwdGlvbikge1xuICBsZXQgcHJvaklkID0gbXlQcm9qZWN0cy5sZW5ndGg7XG4gIHByb2pOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Tm1lXCIpLnZhbHVlO1xuICBwcm9qRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3REZXNjXCIpLnZhbHVlO1xuICBsZXQgcHJvamVjdFN0YXRlO1xuXG4gIGlmICghcHJvak5hbWUpIHtcbiAgICBhbGVydChcIkVudGVyIGEgcHJvamVjdCBuYW1lXCIpO1xuICB9IGVsc2Uge1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgICBwcm9qSWQsXG4gICAgICBwcm9qTmFtZSxcbiAgICAgIHByb2pEZXNjcmlwdGlvbixcbiAgICAgIHByb2plY3RTdGF0ZVxuICAgICk7XG4gICAgbXlQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIGRpc3BsYXlQcm9qZWN0KCk7XG4gICAgY2FuY2VsUHJvamVjdCgpO1xuICAgIG5ld1Byb2plY3QuYWN0aXZlID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15UHJvamVjdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBteVByb2plY3RzW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBkaXNwbGF5UHJvamVjdFRhc2soKTtcbiAgICBjb25zb2xlLmxvZyhteVByb2plY3RzKTtcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdCgpIHtcbiAgcHJvamVjdERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICBteVByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGkpID0+IHtcbiAgICBwcm9qZWN0RGl2LmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaW5nbGVQcm9qRGl2XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3ROYW1lXCI+JHtwcm9qZWN0Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2plY3REZWxJdGVtIGljb24tYnRuc1wiPjxpIGNsYXNzPVwiZmFsIGZhLXRyYXNoLWFsdCBmYS0yeFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gIH0pO1xuXG4gIGxldCByZW1vdmVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0RGVsSXRlbVwiKTtcbiAgcmVtb3ZlUHJvamVjdC5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkZWxldGVQcm9qZWN0KGluZGV4KSk7XG4gIH0pO1xuXG4gIGxldCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdE5hbWVcIik7XG5cbiAgcHJvamVjdEl0ZW0uZm9yRWFjaCgoaXRlbSwgaWQpID0+XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGxldCBjdXJyZW50UHJvamVjdCA9IG15UHJvamVjdHNbaWRdO1xuICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuICAgICAgY3VycmVudFByb2plY3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaSAhPT0gaWQpIHtcbiAgICAgICAgICBteVByb2plY3RzW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYW5jZWxUYXNrKCk7XG4gICAgICBkaXNwbGF5UHJvamVjdFRhc2soKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVByb2plY3RzJylcbiAgICAgIGNvbnNvbGUubG9nKG15UHJvamVjdHMpO1xuICAgIH0pXG4gICk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0VGFzaygpIHtcbiAgbGV0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG4gIGxldCBjdXJyZW50UHJvamVjdCA9IGFjdGl2ZVByb2plY3QuZ2V0QWxsVGFza3MoKTtcbiAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEaXZcIik7XG4gIGxldCB0YXNrSGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250ZW50XCIpLmZpcnN0RWxlbWVudENoaWxkO1xuICBsZXQgdGFza0Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZGVzY1wiKTtcbiAgdGFza0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIHRhc2tIZWFkLmlubmVySFRNTCA9IGFjdGl2ZVByb2plY3QubmFtZTtcbiAgdGFza0Rlc2MuaW5uZXJIVE1MID0gYWN0aXZlUHJvamVjdC5kZXNjcmlwdGlvbjtcblxuICBsZXQgc2luZ2xlVGFzayA9IFwiXCI7XG4gIGN1cnJlbnRQcm9qZWN0LmZvckVhY2goKHByb2plY3RUYXNrKSA9PiB7XG4gICAgbGV0IHRhc2tpZCA9IHByb2plY3RUYXNrLmlkO1xuXG4gICAgc2luZ2xlVGFzayArPSBgPGRpdiBjbGFzcz1cInNpbmdsZS10YXNrXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICA8aDQ+JHtwcm9qZWN0VGFzay50aXRsZX08L2g0PlxuICAgICAgICAgICAgPHNwYW4+JHtwcm9qZWN0VGFzay5kdWVEYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaW5nbGVUYXNrLWJ0blwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0LXRhc2sgaWNvbi1idG5zXCI+PGkgY2xhc3M9XCJmYWwgZmEtZWRpdCBmYS0yeFwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLXRhc2sgaWNvbi1idG5zXCI+PGkgZGF0YS10YXNrPSR7dGFza2lkfSBjbGFzcz1cImZhbCBmYS10cmFzaC1hbHQgZmEtMnhcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaW5nbGV0YXNrLWRlc2NcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPiR7cHJvamVjdFRhc2suZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICB9KTtcblxuICB0YXNrRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gIHRhc2tEaXYuaW5uZXJIVE1MICs9IHNpbmdsZVRhc2s7XG5cbiAgc2hvd1Rhc2tEZXNjcmlwdGlvbigpO1xuXG4gIGxldCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtdGFza1wiKTtcbiAgZGVsZXRlVGFza0J0bi5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVtb3ZlVGFzayk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93VGFza0Rlc2NyaXB0aW9uKCkge1xuICBsZXQgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpbmdsZS10YXNrXCIpO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpZCkgPT4ge1xuICAgIHRhc2suc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgIHRhc2sub25jbGljayA9IChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnROb2RlKTtcblxuICAgICAgaWYgKGlkID09IGUudGFyZ2V0LnBhcmVudE5vZGUuaWQgfHwgaWQgPT0gZS50YXJnZXQuaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkIGhlcmVcIiwgaWQpO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoXCIuc2luZ2xldGFzay1kZXNjXCIpO1xuXG4gICAgICAgIGlmIChkZXNjcmlwdGlvbi5zdHlsZS5kaXNwbGF5ID09IFwiYmxvY2tcIikge1xuICAgICAgICAgIGRlc2NyaXB0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBlbHNlIGlmIChkZXNjcmlwdGlvbi5zdHlsZS5kaXNwbGF5ID09IFwibm9uZVwiKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2pJZCkge1xuICBteVByb2plY3RzLnNwbGljZShwcm9qSWQsIDEpO1xuICBkaXNwbGF5UHJvamVjdCgpO1xuICBjb25zb2xlLmxvZyhteVByb2plY3RzKTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsUHJvamVjdCgpIHtcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEZvcm1cIik7XG4gIGRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbi8vdGFzayBmb3JtXG5mdW5jdGlvbiBjcmVhdGVUYXNrRm9ybShlKSB7XG4gIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybVwiKTtcbiAgdG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICB0b2RvRm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlucHV0c1wiPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwidG9kb1RpdGxlXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgdGl0bGVcIj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImRhdGVcIiB0eXBlPVwiZGF0ZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInRhc2sgZGVzY3JpcHRpb25cIiBjb2w+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjcmVhdGVUYXNrQnRuXCIgY2xhc3M9XCJidXR0b25cIj5hZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbFRhc2tCdG5cIiBjbGFzcz1cImJ1dHRvbi1jYW5jZWxcIj5jYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcblxuICBsZXQgY3JlYXRlVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlVGFza0J0blwiKTtcbiAgbGV0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsVGFza0J0blwiKTtcblxuICBjcmVhdGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVUYXNrKTtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxUYXNrKTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsVGFzaygpIHtcbiAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tGb3JtXCIpO1xuICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWVEYXRlLCB0YXNrUHJpb3JpdHkpIHtcbiAgbGV0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XG5cbiAgbGV0IHRhc2tJZCA9IGFjdGl2ZVByb2plY3Quc2V0VGFza0lkKCk7XG4gIHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb1RpdGxlXCIpLnZhbHVlO1xuICB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZTtcblxuICBpZiAoIXRhc2tUaXRsZSkge1xuICAgIGFsZXJ0KFwiWW91IG11c3QgZW50ZXIgYSB0YXNrIFRpdGxlIGZvciB0aGlzIHRvIGJlIHZhbGlkXCIpO1xuICB9IGVsc2Uge1xuICAgIGxldCBuZXdUYXNrID0gbmV3IFRvRG9JdGVtKHRhc2tJZCwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWVEYXRlKTtcbiAgICBhY3RpdmVQcm9qZWN0LmFkZFRhc2sobmV3VGFzayk7XG4gICAgZGlzcGxheVByb2plY3RUYXNrKCk7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tGb3JtXCIpO1xuICAgIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFRhc2tcIiwgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpXG4gICAgLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFzaycpKSk7XG5cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBY3RpdmVQcm9qZWN0KCkge1xuICByZXR1cm4gbXlQcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3QuYWN0aXZlO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFzayhldmVudCkge1xuICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuICBsZXQgdGFza0lkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFzaztcbiAgY29uc29sZS5sb2codGFza0lkKTtcblxuICBsZXQgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcbiAgYWN0aXZlUHJvamVjdC5kZWxldGVUYXNrKHBhcnNlSW50KHRhc2tJZCkpO1xuICBkaXNwbGF5UHJvamVjdFRhc2soKTtcbiAgY29uc29sZS5sb2cobXlQcm9qZWN0cyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=