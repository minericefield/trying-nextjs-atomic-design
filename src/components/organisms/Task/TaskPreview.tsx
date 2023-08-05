import { Image } from '@/components/atoms/Images/Image';
import { MediaObject } from '@/components/atoms/Layouts/MediaObject';
import { Vertical, VERTICAL_SPACE } from '@/components/atoms/Layouts/Vertical';
import { Text, FONT_SIZE } from '@/components/atoms/Texts/Text';
import { BADGE_TYPE, Badge } from '@/components/molecules/Badges/Badge';
import { Task } from '@/domain-like/task';
import { Clickable } from '@/hocs/Clickable';

export interface Props {
  task: Task;
  onClickTask: (id: number) => void;
}

export const TaskPreview: React.FC<Props> = ({ task, onClickTask }) => {
  const badgeParam = task.isDone
    ? { text: '完了', type: BADGE_TYPE.SUCCESS }
    : { text: '未完了', type: BADGE_TYPE.DANGER };
  const onClick = () => {
    onClickTask(task.id);
  };

  const ClickablePresenter = Clickable(Presenter);
  return (
    <ClickablePresenter
      taskTitle={task.title}
      taskImage={task.image}
      badgeText={badgeParam.text}
      badgeType={badgeParam.type}
      onClick={onClick}
      clickkey="タスク一覧 アイテム"
    />
  );
};

interface PresenterProps extends React.ComponentPropsWithoutRef<'div'> {
  taskTitle: string;
  taskImage: string;
  badgeText: string;
  badgeType: BADGE_TYPE;
}

const Presenter: React.FC<PresenterProps> = ({
  taskTitle,
  taskImage,
  badgeText,
  badgeType,
  ...attr
}) => (
  <MediaObject fixedSideWidth="100px" {...attr}>
    <Image src={taskImage} width={88} height={88} alt="" priority />
    <Vertical space={VERTICAL_SPACE.SMALL}>
      <Badge text={badgeText} type={badgeType} />
      <Text fontSize={FONT_SIZE.LARGE}>{taskTitle}</Text>
    </Vertical>
  </MediaObject>
);

/**
 * 実際 i18n とかでやるけど presenter を分けておくと以下みたいなこともできる
  
   export const TaskPreviewEnglish: React.FC<Props> = ({ task }) => {
    const badgeParam = task.isDone ? { text: "Done", type: BADGE_TYPE.SUCCESS } : { text: "Undone", type: BADGE_TYPE.DANGER }

    return (
      <Presenter
        taskTitle={task.title}
        taskImage={task.image}
        badgeText={badgeParam.text}
        badgeType={badgeParam.type}
      />
    )
  }
 */
