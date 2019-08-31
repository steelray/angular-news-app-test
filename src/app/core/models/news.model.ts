import { transformToSlug } from '../utilities/helpers';

export class News {
  title: string;
  slug: string;
  description: string;
  text: string;
  image: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
  id?: number;

  load(data: any) {
    Object.assign(this, data);
    this.createdAt = Date.now();
    this.updatedAt = Date.now();
    this.revision = 0;
    if (!this.slug) {
      this.slug = transformToSlug(this.title);
    }
    return this;
  }
}
