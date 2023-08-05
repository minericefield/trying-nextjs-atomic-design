import classNames from 'classnames';

import { Text, TEXT_COLOR, FONT_SIZE } from '@/components/atoms/Texts/Text';

export interface Props extends React.ComponentPropsWithoutRef<'span'> {
  text: string;
  type?: BADGE_TYPE;
}

export const Badge: React.FC<Props> = ({ text, type, ...attr }) => {
  const className = (() => {
    switch (type) {
      case BADGE_TYPE.DANGER:
        return 'bg-danger';
      default:
        return 'bg-success';
    }
  })();

  return (
    <span {...attr} className={classNames(attr.className, 'badge', className)}>
      <Text textColor={TEXT_COLOR.WHITE} fontSize={FONT_SIZE.SMALL}>
        {text}
      </Text>
    </span>
  );
};

export enum BADGE_TYPE {
  SUCCESS,
  DANGER,
}
