class ToDoItem {
  constructor(id, title, description, dueDate, priority, notes) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    // this.notes = notes
  }

  toDoTitle() {
    return this.title;
  }
  toDoDescription() {
    return this.description;
  }
}

export default ToDoItem;
