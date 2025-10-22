import Container from "../components/container";
import TaskItem from "../core-components/task-items";
import TaskSumary from "../core-components/task-sumary";
import TasksList from "../core-components/tasks-list";

export default function PageHome() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TaskSumary />
      </header>
      <TasksList />
    </Container>
  );
}
