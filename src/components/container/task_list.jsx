import React, { useEffect, useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Example",
    "Default Description",
    false,
    LEVELS.NORMAL
  );

  //Estado del componentes
  const [tasks, setTasks] = useState(defaultTask);
  const [loading, setLoading] = useState(true);

  //Conteol del ciclo de vida del componente
  useEffect(() => {
    console.log("Task State has been modified");
    setLoading(false);
    return () => {
      console.log("TaskList component is going to Unmount");
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log("TODO: Cambiar estado de una tarea");
  };

  return (
    <div>
      <div>Your Task:</div>
      {/*TODO: Aplicar un For/Map para renderizar una lista */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskListComponent;
