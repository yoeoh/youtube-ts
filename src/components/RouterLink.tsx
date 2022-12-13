import { forwardRef } from 'react';
import { Link as MaterialLink, LinkProps as MuiLinkProps } from '@mui/material';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

type MuiRouterLinkProps = MuiLinkProps & RouterLinkProps;

export const Link = forwardRef<HTMLAnchorElement, MuiRouterLinkProps>(function Link(
  itemProps,
  ref,
) {
  return <MaterialLink component={RouterLink} ref={ref} {...itemProps} />;
});
