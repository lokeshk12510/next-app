import React from 'react';
import { ICONS } from '@/config/icons';

interface IconProps {
  iconName: keyof typeof ICONS;
}

const Icon = ({ iconName }: IconProps) => {
  const IconComponent = ICONS[iconName];

  if (!IconComponent) {
    return null;
  }

  return (
    <div className="size-6 text-primary">
      <IconComponent />
    </div>
  );
};

export default Icon;
