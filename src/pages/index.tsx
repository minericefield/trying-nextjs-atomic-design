import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';

import { Tasks } from '@/components/templates/Task/Tasks';
import { Task } from '@/domain-like/task';

interface Props {
  tasks: Task[];
}

const Index: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ tasks }) => {
  const router = useRouter();
  const onClickTask = (id: number) => {
    router.push(`/tasks/${id}`);
  };

  return <Tasks tasks={tasks} onClickTask={onClickTask} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => ({
  props: {
    tasks: await fetch('http://localhost:3000/api/tasks').then<Task[]>((res) =>
      res.json().then(({ tasks }) => tasks),
    ),
  },
});

export default Index;
