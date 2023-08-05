import { Vertical, VERTICAL_SPACE } from '@/components/atoms/Layouts/Vertical';
import { TaskPreview } from '@/components/organisms/Task/TaskPreview';
import { Task } from '@/domain-like/task';

export interface Props {
  tasks: Task[];
  onClickTask: (id: number) => void;
}

export const TaskPreviews: React.FC<Props> = ({ tasks, onClickTask }) => (
  <Vertical space={VERTICAL_SPACE.LARGE}>
    {tasks.map((task) => (
      <TaskPreview task={task} onClickTask={onClickTask} key={task.id} />
    ))}
  </Vertical>
);
