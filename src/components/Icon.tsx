import React from 'react';

import ICONS from '@/config/icons';
import { cn } from '@/lib/utils';

interface IconProps {
  iconName: keyof typeof ICONS;
  className?: string;
}

/**
 * Icon is used to render local svg icons
 *
 * @param iconName ICONS object key to select local icon
 * @returns React.JSX.Element | null
 */

const Icon = ({ iconName, className }: IconProps) => {
  const IconComponent = ICONS[iconName];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={cn('size-6 text-inherit', className)} />;
};

export default Icon;
