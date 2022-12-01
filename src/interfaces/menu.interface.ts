export interface IMenuItem {
  id: string;
  url: string;
  text: string;
}

export interface IListItemLinkProps {
  icon?: React.ReactElement;
  text: string;
  to: string;
}
