export interface ILinkProps {
  isLoggedin?: boolean;
}

export interface ICatalogProps {
  id: number;
  name: string;
}

export interface ICatalogsProps {
  catalogs: Array<ICatalogProps>;
}
