import { TaskPreviews } from '@/components/organisms/Task/TaskPreviews';
import { DefaultLayout } from '@/components/templates/Shared/DefaultLayout';
import { Task } from '@/domain-like/task';

export interface Props {
  tasks: Task[];
  onClickTask: (id: number) => void;
}

export const Tasks: React.FC<Props> = ({ tasks, onClickTask }) => (
  <DefaultLayout>
    <TaskPreviews tasks={tasks} onClickTask={onClickTask} />
  </DefaultLayout>
);
