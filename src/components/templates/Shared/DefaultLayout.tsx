import { MediaObject } from '@/components/atoms/Layouts/MediaObject';
import { SideNavigation } from '@/components/organisms/Navigation/SideNavigation';

export interface Props {
  navigationItems?: {
    navigationIcon: string;
    navigationTitle: string;
    to: string;
  }[];
  onClickNavigationItem?: (to: string) => void;
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<Props> = ({
  navigationItems,
  onClickNavigationItem,
  children,
}) => (
  <MediaObject fixedSideWidth="240px" className="vh-100">
    <SideNavigation
      navigationItems={navigationItems}
      onClickItem={onClickNavigationItem}
    />
    <main className="p-3">{children}</main>
  </MediaObject>
);

/**
 * templates/Shared 配下は他の templates から参照しても良いというルール
 */
