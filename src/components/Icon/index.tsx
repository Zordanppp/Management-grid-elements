import React from 'react';

import SvgIcon from '@material-ui/core/SvgIcon';
import svgIconPaths from './svgIconPaths';
import { IconProps } from './types';

const Icon: React.FC<IconProps> = ({ name, svg, ...rest }) => (
  <SvgIcon {...rest}>
    <path d={svg || svgIconPaths[name]} />
  </SvgIcon>
);

export default Icon;
