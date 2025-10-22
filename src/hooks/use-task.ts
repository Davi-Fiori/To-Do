import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task, TaskState } from "../models/task";
import React from "react";
import { delay } from "../helpers/utils";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [isUpdatingTask, setUpdatingTask] = React.useState(false);
  const [isDeletingTask, setDeletingTask] = React.useState(false);

  function prepareTasks() {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: "",
        state: TaskState.Creating,
      },
    ]);
  }

  async function updateTask(id: string, payload: {title: Task["title"]}) {
    setUpdatingTask(true);
    await delay(1000)
    setTasks(
      tasks.map((task) => 
          task.id === id 
            ? {...task, state: TaskState.Created, title: payload.title} 
            : task
      )
    )
    setUpdatingTask(false);
  }

  function updateTaskStatus(id: string, conclued: boolean) {
    setTasks (
      tasks.map((task) => task.id === id ? {...task, conclued} : task)
    )
  }

  async function deleteTask(id: string) {
    setDeletingTask(true);

    await delay(1000);

    setTasks(tasks.filter((task) => task.id !== id));

    setDeletingTask(false);

  }

  return {
    prepareTasks,
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask
  };
}
