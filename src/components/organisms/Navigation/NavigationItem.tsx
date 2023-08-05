import { useRouter } from 'next/router';

import { MediaObject } from '@/components/atoms/Layouts/MediaObject';
import { FONT_SIZE, Text } from '@/components/atoms/Texts/Text';
import { Clickable } from '@/hocs/Clickable';

export interface Props {
  navigationIcon: string;
  navigationTitle: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const NavigationItem: React.FC<Props> = ({
  navigationIcon,
  navigationTitle,
  onClick,
}) => {
  const ClickableMediaObject = Clickable(MediaObject);
  return (
    <ClickableMediaObject fixedSideWidth="32px" onClick={onClick}>
      <div className="center-block h-100 mr-1">
        <i className={navigationIcon}></i>
      </div>
      <Text fontSize={FONT_SIZE.LARGE}>{navigationTitle}</Text>
    </ClickableMediaObject>
  );
};

export const NavigationItemRoute: React.FC<
  Omit<Props, 'onClick'> & { to: string }
> = (props) => {
  const router = useRouter();

  return <NavigationItem {...props} onClick={() => router.push(props.to)} />;
};

/**
 * TODO: icon コンポーネントとかもちゃんと作る
 */

/**
 * TODO: コンポーネントが実行されるたびに const ClickableMediaObject = Clickable(MediaObject); されるの効率悪い
 * だいたい HOC を実行した結果はどっか別で定義しておくことが多い
 */
