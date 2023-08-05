import classNames from 'classnames';

export interface Props extends React.ComponentPropsWithoutRef<'p'> {
  textColor?: TEXT_COLOR;
  fontSize?: FONT_SIZE;
  children: string;
}

export const Text: React.FC<Props> = ({
  textColor,
  fontSize,
  children,
  ...attr
}) => {
  const fontSizeClassName = (() => {
    switch (fontSize) {
      case FONT_SIZE.SMALL:
        return 'fs-small';
      case FONT_SIZE.LARGE:
        return 'fs-large';
      default:
        return 'fs-default';
    }
  })();
  const textColorClassName = (() => {
    switch (textColor) {
      case TEXT_COLOR.WHITE:
        return 'text-white';
      case TEXT_COLOR.INFO:
        return 'text-muted';
      default:
        return 'text-dark';
    }
  })();

  return (
    <p
      {...attr}
      className={classNames(
        attr.className,
        fontSizeClassName,
        textColorClassName,
      )}
    >
      {children}
    </p>
  );
};

export enum FONT_SIZE {
  DEFAULT,
  SMALL,
  LARGE,
}

export enum TEXT_COLOR {
  DEFAULT,
  WHITE,
  INFO,
}

/**
 * TODO: p タグ固定やめる
 * タグを自由に指定できるように
 * 
 * ジェネリクスを渡す都合上エイリアス交差型で以下のようなイメージ
 * export type Props<T extends keyof JSX.IntrinsicElements> = {
    text: string;
    textColor?: TEXT_COLOR;
    fontSize?: FONT_SIZE;
    tag?: T;
  } & React.ComponentPropsWithoutRef<T>
  (interface の extends 元へのジェネリクスは static じゃないといけない)
 */
