import { mapModifiers } from 'libs/component';
import React from 'react';

export type AnnouncementLinkProps = {
  children?: React.ReactNode;
  href?: string;
};

export const AnnouncementLink: React.FC<AnnouncementLinkProps> = ({ children, href, ...props }) => {
  const componentClassName = mapModifiers('a-announcement-link');
  const className = `${componentClassName}`.trim();

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
      {children}
    </a>
  );
};
