import NextLink from 'next/link';
import React from 'react';

type LinkProps = React.ComponentProps<typeof NextLink> & {};

const Link: React.FC<LinkProps> = ({ href, className, children, ...props }) => (
  <NextLink href={href} passHref {...props} >
    {children}
  </NextLink>
);

export default Link;