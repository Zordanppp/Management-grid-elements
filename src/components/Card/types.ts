import { AvailableIcons } from 'components/Icon/types';

export interface CardProps {
  iconName: AvailableIcons;
  deleteds: AvailableIcons[];
  favorites: AvailableIcons[];
  setFavorites(favorites: AvailableIcons[]): void;
  setDeleteds(deleteds: AvailableIcons[]): void;
}

export type CardHeaderProps = Pick<
  CardProps,
  'iconName' | 'deleteds' | 'setDeleteds'
>;

export type CardFooterProps = Pick<
  CardProps,
  'iconName' | 'favorites' | 'setFavorites'
>;
