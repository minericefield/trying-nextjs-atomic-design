import classNames from 'classnames';

/**
 * @see: https://element-plus.org/en-US/component/space.html#vertical-layout
 */
export interface Props extends React.ComponentPropsWithoutRef<'div'> {
  space?: VERTICAL_SPACE;
  children: React.ReactNode[];
}

export const Vertical: React.FC<Props> = ({ space, children, ...attr }) => {
  const eachClassName = (index: number) => {
    let pt: number;
    let pb: number;

    switch (space) {
      case VERTICAL_SPACE.SMALL:
        pt = 1;
        pb = 1;
        break;
      case VERTICAL_SPACE.LARGE:
        pt = 3;
        pb = 3;
        break;
      default:
        pt = 2;
        pb = 2;
    }

    if (index === 0) {
      pt = 0;
    }

    if (index === children.length - 1) {
      pb = 0;
    }

    return `pt-${pt} pb-${pb}`;
  };

  return (
    <>
      {children.map((child, index) => {
        return (
          <div
            {...attr}
            className={classNames(attr.className, eachClassName(index))}
            key={new Date().getTime() + index}
          >
            {child}
          </div>
        );
      })}
    </>
  );
};

export enum VERTICAL_SPACE {
  SMALL,
  LARGE,
  DEFAULT,
}

/**
 * TODO: children を map した時の key
 */
