import { TaskDetailEdit } from '@/components/organisms/Task/TaskDetailEdit';
import { DefaultLayout } from '@/components/templates/Shared/DefaultLayout';
import { Task as _Task } from '@/domain-like/task';

export interface Props {
  task: _Task;
  onTaskChange: (task: _Task) => void;
  onSubmit: () => void;
  onClickNavigationItem: (to: string) => void;
}

export const Task: React.FC<Props> = ({
  task,
  onTaskChange,
  onSubmit,
  onClickNavigationItem,
}) => (
  <DefaultLayout onClickNavigationItem={onClickNavigationItem}>
    <TaskDetailEdit
      task={task}
      onTaskChange={onTaskChange}
      onSubmit={onSubmit}
    />
  </DefaultLayout>
);
