const todoList = () => {
    all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      var i;
      var l = [];
      for (i in all) {
        if (all[i].dueDate < new Date().toLocaleDateString("en-CA")) {
          l.push(all[i]);
        }
      }
      return l;
    };
  
    const dueToday = () => {
      var i;
      var l = [];
      for (i in all) {
        if (all[i].dueDate === new Date().toLocaleDateString("en-CA")) {
          l.push(all[i]);
        }
      }
      return l;
    };
  
    const dueLater = () => {
      var i;
      var l = [];
      for (i in all) {
        if (all[i].dueDate > new Date().toLocaleDateString("en-CA")) {
          l.push(all[i]);
        }
      }
      return l;
    };
  
    const toDisplayableList = (list) => {
      var i;
      var final_list = [];
      for (i = 0; i < list.length; i++) {
        if (list[i].completed === false) {
          if (list[i].dueDate === today) {
            final_list.push(`[ ] ${list[i].title}`);
          } else {
            final_list.push(`[ ] ${list[i].title} ${list[i].dueDate}`);
          }
        } else {
          if (list[i].dueDate === today) {
            final_list.push(`[x] ${list[i].title}`);
          } else {
            final_list.push(`[x] ${list[i].title} ${list[i].dueDate}`);
          }
        }
      }
  
      return final_list.join("\n");
    };
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  module.exports = todoList;