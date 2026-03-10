import React from 'react';
import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';

export interface ButtonProps extends Omit<MantineButtonProps, 'color' | 'radius'> {
  text: string;
  color?: string;
  shape?: 'rectangle' | 'rounded' | 'pill' | 'circle';
  icon?: React.ReactNode;
}

export function Button({ 
  text, 
  color = 'blue', 
  shape = 'rounded', 
  icon, 
  className, 
  ...props 
}: ButtonProps) {
  const radiusMap = {
    rectangle: 'xs',
    rounded: 'md',
    pill: 'xl',
    circle: '100%',
  };

  return (
    <MantineButton
      color={color}
      radius={radiusMap[shape]}
      leftSection={icon}
      className={className}
      {...props}
    >
      {text}
    </MantineButton>
  );
}
