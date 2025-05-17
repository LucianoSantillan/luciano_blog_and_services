import NextLink from 'next/link';
import React from 'react';

type LinkProps = React.ComponentProps<typeof NextLink> & {size?: string};

const Link: React.FC<LinkProps> = ({ href, className="", children, size="sm", ...props }) => (
  <NextLink className={`${className} heading-${size}`} href={href} passHref {...props} >
    {children}
  </NextLink>
);

export default Link;