import { Button } from '@/components/atoms/Buttons/Button';
import { Vertical } from '@/components/atoms/Layouts/Vertical';
import { FormItem } from '@/components/molecules/FormItems/FormItem';
import { Task } from '@/domain-like/task';

export interface Props {
  task: Task;
  onTaskChange: (task: Task) => void;
  onSubmit: () => void;
}

export const TaskDetailEdit: React.FC<Props> = ({
  task,
  onTaskChange,
  onSubmit,
}) => {
  const handleBlurTitle = (event: React.FocusEvent<HTMLInputElement>) => {
    onTaskChange({ ...task, title: event.target.value });
  };
  const handleBlurBody = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    onTaskChange({ ...task, body: event.target.value });
  };
  const handleChangeIsDone = (_event: React.ChangeEvent<HTMLInputElement>) => {
    onTaskChange({ ...task, isDone: !task.isDone });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Vertical>
        <FormItem label="タイトル" help="タスクタイトル">
          <input
            className="form-control"
            onBlur={handleBlurTitle}
            defaultValue={task.title}
          />
        </FormItem>
        <FormItem label="本文" help="タスク本文">
          <textarea
            className="form-control"
            onBlur={handleBlurBody}
            defaultValue={task.body}
            rows={10}
            style={{ resize: 'none' }}
          />
        </FormItem>
        <FormItem label={task.isDone ? '完了' : '未完了'}>
          <input
            className="form-check-input"
            type="checkbox"
            checked={task.isDone}
            onChange={handleChangeIsDone}
          />
        </FormItem>
        <Button onClick={onSubmit} type="button" clickkey="保存ボタン">
          保存
        </Button>
      </Vertical>
    </form>
  );
};

/**
 * TODO: form, input, textarea コンポーネントとかもちゃんと作る
 */

/**
 * シンプルに
 *  <input
      onChange
      value={task.title}
    />
    にしたいが、 react のレンダリングの仕組み上、パフォーマンス的にも実際の挙動的にもよろしくない
 */

/**
 * 本来 button type="submit" で form の submit を発火させるべき
 * 型の定義も onSubmit: (event: React.FormEvent<HTMLFormElement>) => void; にしたい
 * form の submit 経由にする場合、 input で Enter を押した際に ref 経由で入力値を更新してから props.onSubmit を呼ぶ必要あり
 *
 * 今回はなるべくシンプルなコードで、かつ基本的な制御型のコンポーネントを書きたかったためこのようになっている
 */
