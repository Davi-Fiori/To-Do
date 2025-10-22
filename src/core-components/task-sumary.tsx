import Badge from "../components/badge";
import Text from "../components/text";
import useTasks from "../hooks/use-tasks";

export default function TaskSumary() {
  const { CreatedtaskCount, concludedTasksCount, isLoadingTasks } = useTasks();


  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="text-gray-300">
          Tarefas Criadas
        </Text>
        <Badge variant="secondary" loading={isLoadingTasks}>{CreatedtaskCount}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold">Concluídas</Text>
        <Badge variant="primary" loading={isLoadingTasks}>{concludedTasksCount} de {CreatedtaskCount}</Badge>
      </div>
    </>
  );
}
