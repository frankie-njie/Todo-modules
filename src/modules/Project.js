class Project {
  constructor(id, name, description, allTasks = []) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.allTasks = allTasks;
    this.active;
  }
  addTask(task) {
    this.allTasks.push(task);
  }
  deleteTask(taskId) {
    this.allTasks = this.allTasks.filter((task) => task.id !== taskId);
    // this.allTasks.splice(taskId, 1)
  }
  setTaskId() {
    return this.allTasks.length;
  }
  getAllTasks() {
    return this.allTasks;
  }
  getId() {
    return this.id;
  }

  getTitle() {
    return this.name;
  }
}

export default Project;
