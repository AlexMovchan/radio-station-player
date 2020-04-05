export interface IStation {
  id: number;
  prefix: string;
  name: string;
  url: string;
  textUrl: string;
}

export interface IFavoriteList {
  [key: string]: IStation
}