import classNames from 'classnames';

import { Clickable } from '@/hocs/Clickable';

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  visual?: BUTTON_VISUAL;
}

const _Button: React.FC<Props> = ({ children, visual, ...attr }) => {
  const className = (() => {
    switch (visual) {
      case BUTTON_VISUAL.SECONDARY:
        return 'btn-secondary';
      default:
        return 'btn-primary';
    }
  })();

  return (
    <button {...attr} className={classNames(attr.className, 'btn', className)}>
      {children}
    </button>
  );
};

export const Button = Clickable(_Button);

export enum BUTTON_VISUAL {
  PRIMARY,
  SECONDARY,
}
