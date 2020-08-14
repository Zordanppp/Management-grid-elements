import { SvgIconProps } from '@material-ui/core';
import paths from './svgIconPaths';

export type AvailableIcons = keyof typeof paths;

export interface IconProps extends SvgIconProps {
  name: AvailableIcons;
}
