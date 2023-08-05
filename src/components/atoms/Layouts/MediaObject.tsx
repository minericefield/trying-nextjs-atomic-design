import classNames from 'classnames';

export interface Props extends React.ComponentPropsWithoutRef<'div'> {
  fixedSideWidth: string;
  children: React.ReactNode[];
}

export const MediaObject: React.FC<Props> = ({
  fixedSideWidth,
  children,
  ...attr
}) => (
  <div {...attr} className={classNames(attr.className, 'd-flex')}>
    <div
      style={{
        minWidth: fixedSideWidth,
        maxWidth: fixedSideWidth,
      }}
    >
      {children[0]}
    </div>
    <div className="flex-grow-1">{children[1]}</div>
  </div>
);
