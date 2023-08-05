import { Vertical } from '@/components/atoms/Layouts/Vertical';
import {
  NavigationItem,
  NavigationItemRoute,
} from '@/components/organisms/Navigation/NavigationItem';

export interface Props {
  navigationItems?: {
    navigationIcon: string;
    navigationTitle: string;
    to: string;
  }[];
  onClickItem?: (to: string) => void;
}

export const SideNavigation: React.FC<Props> = ({
  navigationItems = DEFAULT_SIDE_NAVIGATION_ITEMS,
  onClickItem,
}) => {
  return (
    <div className="w-100 h-100 py-3 shadow">
      <Vertical>
        {navigationItems.map((navigationItem) =>
          onClickItem ? (
            <NavigationItem
              {...navigationItem}
              key={navigationItem.to}
              onClick={() => onClickItem(navigationItem.to)}
            />
          ) : (
            <NavigationItemRoute {...navigationItem} key={navigationItem.to} />
          ),
        )}
      </Vertical>
    </div>
  );
};

export const DEFAULT_SIDE_NAVIGATION_ITEMS = [
  { navigationIcon: 'bi bi-list-task', navigationTitle: 'タスク', to: '/' },
  {
    navigationIcon: 'bi bi-bootstrap',
    navigationTitle: 'ダミーページ 1',
    to: '/dummy1',
  },
  {
    navigationIcon: 'bi bi-bootstrap',
    navigationTitle: 'ダミーページ 2',
    to: '/dummy2',
  },
] as const;
