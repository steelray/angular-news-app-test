export interface INews {
  title: string;
  slug: string;
  description: string;
  text: string;
  image: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
  id?: number;
}

export interface INewsError {
  errors: [{ field: string; message: string }];
}

export interface INewsList {
  totalCount: number;
  items: INews[];
}
