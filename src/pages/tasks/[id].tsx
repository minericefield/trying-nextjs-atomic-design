import { ParsedUrlQuery } from 'node:querystring';

import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Task as TaskTemplate } from '@/components/templates/Task/Task';
import { Task } from '@/domain-like/task';

interface Params extends ParsedUrlQuery {
  id: string;
}

interface Props {
  task: Task;
}

const TaskPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ task }) => {
  const router = useRouter();
  const [taskEdit, setTaskEdit] = useState({ ...task }); // reducer ?

  const onSubmit = async () => {
    await fetch(`/api/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task: taskEdit }),
    });

    router.push('/');
  };
  const onClickNavigationItem = (to: string) => {
    if (
      JSON.stringify(task) !== JSON.stringify(taskEdit) &&
      !confirm('変更内容を破棄してもよろしいですか？')
    ) {
      return;
    }

    router.push(to);
  };

  return (
    <TaskTemplate
      task={taskEdit}
      onTaskChange={setTaskEdit}
      onSubmit={onSubmit}
      onClickNavigationItem={onClickNavigationItem}
    />
  );
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({
  params,
}) => {
  if (!params) throw 'Unexpected';

  const task = await fetch(
    `http://localhost:3000/api/tasks/${params.id}`,
  ).then<Task>((res) => res.json().then(({ task }) => task));

  return {
    props: {
      task,
    },
  };
};

export default TaskPage;

/**
 * 変更内容を破棄してもよろしいですか？ は、実際には router のフックとか window の beforeunload を組み合わせてやるのが良い
 */
