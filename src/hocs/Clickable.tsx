export const Clickable = <
  Props extends React.ComponentPropsWithoutRef<React.ElementType>,
>(
  Component: React.FC<Props>,
) => {
  return function Clickable(
    props: Props & { onClick: React.MouseEventHandler; clickkey?: string },
  ) {
    const onClick = (event: React.MouseEvent) => {
      props.onClick(event);

      /**
       * もしクリックキーがあれば、クリック数を計測する
       */
      if (props.clickkey) {
        pushClickCount(props.clickkey);
      }
    };

    return <Component {...props} onClick={onClick} role="button" />;
  };
};

const pushClickCount = (key: string) =>
  fetch('/api/clicks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ key }),
  });

/**
 * Component definition is missing display name によりアロー関数使ってない
 */

/**
 * 交差(両方を満たす)で実質、元のコンポーネントの onClick のオプショナルを外している
 * 実際 MouseEventHandler<HTMLButtonElement> & MouseEventHandler<Element> みたいな型でも機能的には問題なさそう
 * しかし、厳密にはこれはスマートではなく、 onClick をもつコンポーネントを受け取りそのオプショナルを外した型にするのがより正しい
 * 
 * type KeyRequired<T, K extends keyof T> = Omit<T, K> & {
     [P in K]-?: Exclude<T[P], undefined>;
   };

   props: KeyRequired<Props, 'onClick'> & { clickkey?: string }
 */
