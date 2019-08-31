import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INews, INewsList, INewsError } from '../interfaces/news.interface';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsList: INews[] = [
    {
      id: 1,
      title: 'title-1',
      slug: 'news-1',
      description: 'news description 1',
      text:
        // tslint:disable-next-line:max-line-length
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae tortor ultrices, feugiat eros nec, suscipit lacus. Curabitur dictum massa a blandit maximus. Donec rhoncus purus sed sapien consequat, vitae auctor arcu semper. Ut imperdiet est convallis mattis mattis. Proin nibh nunc, sollicitudin ut dignissim et, feugiat sit amet massa. Maecenas sodales commodo lorem, ut lobortis nisi aliquet eget. Proin feugiat, metus vitae consequat suscipit, ex dolor sagittis mauris, eu congue enim ligula non mi. Ut quis tincidunt nisi. Mauris lacinia, massa ac finibus dictum, erat felis laoreet justo, quis sodales nibh massa accumsan erat. Morbi fringilla et leo vel ullamcorper. Nam id quam ligula. Etiam eget enim eu augue tristique elementum. Etiam metus turpis, cursus id consequat et, iaculis imperdiet urna.</p><p>Morbi odio ligula, tincidunt ut metus non, fringilla cursus tortor. Nullam scelerisque tempus eleifend. Aenean dapibus urna et ante mollis tincidunt. Pellentesque neque nisi, molestie quis facilisis pellentesque, aliquam eu enim. Integer ornare bibendum felis, et tristique justo congue nec. Duis efficitur diam nunc, fermentum posuere dolor pellentesque nec. Vestibulum luctus pellentesque enim at laoreet. Vivamus at tellus rutrum nisi vestibulum facilisis sit amet quis libero. Nulla blandit sapien ut luctus auctor. Sed ligula orci, faucibus ut luctus fringilla, fermentum vel metus. In vestibulum pretium posuere.</p><p>Suspendisse potenti. Proin augue nulla, fermentum non sem et, interdum eleifend massa. Nulla massa magna, dictum accumsan augue a, lobortis vestibulum massa. Vestibulum suscipit eu erat sit amet cursus. Sed blandit ipsum auctor tempus blandit. Donec ultricies facilisis neque, ac gravida erat sodales quis. Morbi rutrum, dolor at vestibulum accumsan, nisl massa cursus sapien, a cursus nunc nibh ut nulla. Suspendisse semper dolor a ex dictum, non mollis mauris maximus. Aliquam dapibus id nibh eget semper. Proin sit amet ultricies elit, et tempor justo. Etiam euismod dapibus feugiat. Cras tellus arcu, malesuada nec nisi et, malesuada dapibus urna. Cras a ante dolor.</p>',
      image: 'https://www.w3schools.com/howto/img_forest.jpg',
      createdAt: 1567056243574,
      updatedAt: 1567056243574,
      revision: 15
    },
    {
      id: 2,
      title: 'title-2',
      slug: 'news-2',
      description: 'news description 2',
      text:
        // tslint:disable-next-line:max-line-length
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae tortor ultrices, feugiat eros nec, suscipit lacus. Curabitur dictum massa a blandit maximus. Donec rhoncus purus sed sapien consequat, vitae auctor arcu semper. Ut imperdiet est convallis mattis mattis. Proin nibh nunc, sollicitudin ut dignissim et, feugiat sit amet massa. Maecenas sodales commodo lorem, ut lobortis nisi aliquet eget. Proin feugiat, metus vitae consequat suscipit, ex dolor sagittis mauris, eu congue enim ligula non mi. Ut quis tincidunt nisi. Mauris lacinia, massa ac finibus dictum, erat felis laoreet justo, quis sodales nibh massa accumsan erat. Morbi fringilla et leo vel ullamcorper. Nam id quam ligula. Etiam eget enim eu augue tristique elementum. Etiam metus turpis, cursus id consequat et, iaculis imperdiet urna.</p><p>Morbi odio ligula, tincidunt ut metus non, fringilla cursus tortor. Nullam scelerisque tempus eleifend. Aenean dapibus urna et ante mollis tincidunt. Pellentesque neque nisi, molestie quis facilisis pellentesque, aliquam eu enim. Integer ornare bibendum felis, et tristique justo congue nec. Duis efficitur diam nunc, fermentum posuere dolor pellentesque nec. Vestibulum luctus pellentesque enim at laoreet. Vivamus at tellus rutrum nisi vestibulum facilisis sit amet quis libero. Nulla blandit sapien ut luctus auctor. Sed ligula orci, faucibus ut luctus fringilla, fermentum vel metus. In vestibulum pretium posuere.</p><p>Suspendisse potenti. Proin augue nulla, fermentum non sem et, interdum eleifend massa. Nulla massa magna, dictum accumsan augue a, lobortis vestibulum massa. Vestibulum suscipit eu erat sit amet cursus. Sed blandit ipsum auctor tempus blandit. Donec ultricies facilisis neque, ac gravida erat sodales quis. Morbi rutrum, dolor at vestibulum accumsan, nisl massa cursus sapien, a cursus nunc nibh ut nulla. Suspendisse semper dolor a ex dictum, non mollis mauris maximus. Aliquam dapibus id nibh eget semper. Proin sit amet ultricies elit, et tempor justo. Etiam euismod dapibus feugiat. Cras tellus arcu, malesuada nec nisi et, malesuada dapibus urna. Cras a ante dolor.</p>',
      image: 'https://www.w3schools.com/howto/img_forest.jpg',
      createdAt: 1567056243574,
      updatedAt: 1567056243574,
      revision: 5
    },
    {
      id: 3,
      title: 'title-3',
      slug: 'news-3',
      description: 'news description 3',
      text:
        // tslint:disable-next-line:max-line-length
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae tortor ultrices, feugiat eros nec, suscipit lacus. Curabitur dictum massa a blandit maximus. Donec rhoncus purus sed sapien consequat, vitae auctor arcu semper. Ut imperdiet est convallis mattis mattis. Proin nibh nunc, sollicitudin ut dignissim et, feugiat sit amet massa. Maecenas sodales commodo lorem, ut lobortis nisi aliquet eget. Proin feugiat, metus vitae consequat suscipit, ex dolor sagittis mauris, eu congue enim ligula non mi. Ut quis tincidunt nisi. Mauris lacinia, massa ac finibus dictum, erat felis laoreet justo, quis sodales nibh massa accumsan erat. Morbi fringilla et leo vel ullamcorper. Nam id quam ligula. Etiam eget enim eu augue tristique elementum. Etiam metus turpis, cursus id consequat et, iaculis imperdiet urna.</p><p>Morbi odio ligula, tincidunt ut metus non, fringilla cursus tortor. Nullam scelerisque tempus eleifend. Aenean dapibus urna et ante mollis tincidunt. Pellentesque neque nisi, molestie quis facilisis pellentesque, aliquam eu enim. Integer ornare bibendum felis, et tristique justo congue nec. Duis efficitur diam nunc, fermentum posuere dolor pellentesque nec. Vestibulum luctus pellentesque enim at laoreet. Vivamus at tellus rutrum nisi vestibulum facilisis sit amet quis libero. Nulla blandit sapien ut luctus auctor. Sed ligula orci, faucibus ut luctus fringilla, fermentum vel metus. In vestibulum pretium posuere.</p><p>Suspendisse potenti. Proin augue nulla, fermentum non sem et, interdum eleifend massa. Nulla massa magna, dictum accumsan augue a, lobortis vestibulum massa. Vestibulum suscipit eu erat sit amet cursus. Sed blandit ipsum auctor tempus blandit. Donec ultricies facilisis neque, ac gravida erat sodales quis. Morbi rutrum, dolor at vestibulum accumsan, nisl massa cursus sapien, a cursus nunc nibh ut nulla. Suspendisse semper dolor a ex dictum, non mollis mauris maximus. Aliquam dapibus id nibh eget semper. Proin sit amet ultricies elit, et tempor justo. Etiam euismod dapibus feugiat. Cras tellus arcu, malesuada nec nisi et, malesuada dapibus urna. Cras a ante dolor.</p>',
      image: 'https://www.w3schools.com/howto/img_forest.jpg',
      createdAt: 1567056243574,
      updatedAt: 1567056243574,
      revision: 30
    },
    {
      id: 4,
      title: 'title-4',
      slug: 'news-4',
      description: 'news description 4',
      text:
        // tslint:disable-next-line:max-line-length
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae tortor ultrices, feugiat eros nec, suscipit lacus. Curabitur dictum massa a blandit maximus. Donec rhoncus purus sed sapien consequat, vitae auctor arcu semper. Ut imperdiet est convallis mattis mattis. Proin nibh nunc, sollicitudin ut dignissim et, feugiat sit amet massa. Maecenas sodales commodo lorem, ut lobortis nisi aliquet eget. Proin feugiat, metus vitae consequat suscipit, ex dolor sagittis mauris, eu congue enim ligula non mi. Ut quis tincidunt nisi. Mauris lacinia, massa ac finibus dictum, erat felis laoreet justo, quis sodales nibh massa accumsan erat. Morbi fringilla et leo vel ullamcorper. Nam id quam ligula. Etiam eget enim eu augue tristique elementum. Etiam metus turpis, cursus id consequat et, iaculis imperdiet urna.</p><p>Morbi odio ligula, tincidunt ut metus non, fringilla cursus tortor. Nullam scelerisque tempus eleifend. Aenean dapibus urna et ante mollis tincidunt. Pellentesque neque nisi, molestie quis facilisis pellentesque, aliquam eu enim. Integer ornare bibendum felis, et tristique justo congue nec. Duis efficitur diam nunc, fermentum posuere dolor pellentesque nec. Vestibulum luctus pellentesque enim at laoreet. Vivamus at tellus rutrum nisi vestibulum facilisis sit amet quis libero. Nulla blandit sapien ut luctus auctor. Sed ligula orci, faucibus ut luctus fringilla, fermentum vel metus. In vestibulum pretium posuere.</p><p>Suspendisse potenti. Proin augue nulla, fermentum non sem et, interdum eleifend massa. Nulla massa magna, dictum accumsan augue a, lobortis vestibulum massa. Vestibulum suscipit eu erat sit amet cursus. Sed blandit ipsum auctor tempus blandit. Donec ultricies facilisis neque, ac gravida erat sodales quis. Morbi rutrum, dolor at vestibulum accumsan, nisl massa cursus sapien, a cursus nunc nibh ut nulla. Suspendisse semper dolor a ex dictum, non mollis mauris maximus. Aliquam dapibus id nibh eget semper. Proin sit amet ultricies elit, et tempor justo. Etiam euismod dapibus feugiat. Cras tellus arcu, malesuada nec nisi et, malesuada dapibus urna. Cras a ante dolor.</p>',
      image: 'https://www.w3schools.com/howto/img_forest.jpg',
      createdAt: 1567056243574,
      updatedAt: 1567056243574,
      revision: 15
    },
    {
      id: 5,
      title: 'title-5',
      slug: 'news-5',
      description: 'news description 5',
      text:
        // tslint:disable-next-line:max-line-length
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae tortor ultrices, feugiat eros nec, suscipit lacus. Curabitur dictum massa a blandit maximus. Donec rhoncus purus sed sapien consequat, vitae auctor arcu semper. Ut imperdiet est convallis mattis mattis. Proin nibh nunc, sollicitudin ut dignissim et, feugiat sit amet massa. Maecenas sodales commodo lorem, ut lobortis nisi aliquet eget. Proin feugiat, metus vitae consequat suscipit, ex dolor sagittis mauris, eu congue enim ligula non mi. Ut quis tincidunt nisi. Mauris lacinia, massa ac finibus dictum, erat felis laoreet justo, quis sodales nibh massa accumsan erat. Morbi fringilla et leo vel ullamcorper. Nam id quam ligula. Etiam eget enim eu augue tristique elementum. Etiam metus turpis, cursus id consequat et, iaculis imperdiet urna.</p><p>Morbi odio ligula, tincidunt ut metus non, fringilla cursus tortor. Nullam scelerisque tempus eleifend. Aenean dapibus urna et ante mollis tincidunt. Pellentesque neque nisi, molestie quis facilisis pellentesque, aliquam eu enim. Integer ornare bibendum felis, et tristique justo congue nec. Duis efficitur diam nunc, fermentum posuere dolor pellentesque nec. Vestibulum luctus pellentesque enim at laoreet. Vivamus at tellus rutrum nisi vestibulum facilisis sit amet quis libero. Nulla blandit sapien ut luctus auctor. Sed ligula orci, faucibus ut luctus fringilla, fermentum vel metus. In vestibulum pretium posuere.</p><p>Suspendisse potenti. Proin augue nulla, fermentum non sem et, interdum eleifend massa. Nulla massa magna, dictum accumsan augue a, lobortis vestibulum massa. Vestibulum suscipit eu erat sit amet cursus. Sed blandit ipsum auctor tempus blandit. Donec ultricies facilisis neque, ac gravida erat sodales quis. Morbi rutrum, dolor at vestibulum accumsan, nisl massa cursus sapien, a cursus nunc nibh ut nulla. Suspendisse semper dolor a ex dictum, non mollis mauris maximus. Aliquam dapibus id nibh eget semper. Proin sit amet ultricies elit, et tempor justo. Etiam euismod dapibus feugiat. Cras tellus arcu, malesuada nec nisi et, malesuada dapibus urna. Cras a ante dolor.</p>',
      image: 'https://www.w3schools.com/howto/img_forest.jpg',
      createdAt: 1567056243574,
      updatedAt: 1567056243574,
      revision: 7
    },
    {
      id: 6,
      title: 'title-6',
      slug: 'news-6',
      description: 'news description 6',
      text:
        // tslint:disable-next-line:max-line-length
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae tortor ultrices, feugiat eros nec, suscipit lacus. Curabitur dictum massa a blandit maximus. Donec rhoncus purus sed sapien consequat, vitae auctor arcu semper. Ut imperdiet est convallis mattis mattis. Proin nibh nunc, sollicitudin ut dignissim et, feugiat sit amet massa. Maecenas sodales commodo lorem, ut lobortis nisi aliquet eget. Proin feugiat, metus vitae consequat suscipit, ex dolor sagittis mauris, eu congue enim ligula non mi. Ut quis tincidunt nisi. Mauris lacinia, massa ac finibus dictum, erat felis laoreet justo, quis sodales nibh massa accumsan erat. Morbi fringilla et leo vel ullamcorper. Nam id quam ligula. Etiam eget enim eu augue tristique elementum. Etiam metus turpis, cursus id consequat et, iaculis imperdiet urna.</p><p>Morbi odio ligula, tincidunt ut metus non, fringilla cursus tortor. Nullam scelerisque tempus eleifend. Aenean dapibus urna et ante mollis tincidunt. Pellentesque neque nisi, molestie quis facilisis pellentesque, aliquam eu enim. Integer ornare bibendum felis, et tristique justo congue nec. Duis efficitur diam nunc, fermentum posuere dolor pellentesque nec. Vestibulum luctus pellentesque enim at laoreet. Vivamus at tellus rutrum nisi vestibulum facilisis sit amet quis libero. Nulla blandit sapien ut luctus auctor. Sed ligula orci, faucibus ut luctus fringilla, fermentum vel metus. In vestibulum pretium posuere.</p><p>Suspendisse potenti. Proin augue nulla, fermentum non sem et, interdum eleifend massa. Nulla massa magna, dictum accumsan augue a, lobortis vestibulum massa. Vestibulum suscipit eu erat sit amet cursus. Sed blandit ipsum auctor tempus blandit. Donec ultricies facilisis neque, ac gravida erat sodales quis. Morbi rutrum, dolor at vestibulum accumsan, nisl massa cursus sapien, a cursus nunc nibh ut nulla. Suspendisse semper dolor a ex dictum, non mollis mauris maximus. Aliquam dapibus id nibh eget semper. Proin sit amet ultricies elit, et tempor justo. Etiam euismod dapibus feugiat. Cras tellus arcu, malesuada nec nisi et, malesuada dapibus urna. Cras a ante dolor.</p>',
      image: 'https://www.w3schools.com/howto/img_forest.jpg',
      createdAt: 1567056243574,
      updatedAt: 1567056243574,
      revision: 80
    }
  ];

  addNews(news: INews): Observable<INews | INewsError> {
    if (news.slug && this.newsList.find(n => n.slug === news.slug)) {
      return of({
        errors: [{ field: 'slug', message: 'slug has taken' }]
      });
    }
    news.id = this.newsList.length
      ? this.newsList[this.newsList.length - 1].id + 1
      : 1;
    this.newsList.push(news);
    return of(news);
  }

  fetchAll(
    params: {
      sort?: any | 'createdAt' | 'revision';
      sortDirection?: string;
      page?: number;
      limit?: number;
    } = {}
  ): Observable<INewsList> {
    const data = {
      items: [...this.newsList],
      totalCount: this.newsList.length
    };
    data.items.sort((a, b) => {
      if (params.sortDirection && params.sortDirection === 'asc') {
        return a[params.sort] > b[params.sort] ? 1 : -1;
      }
      const sort = params.sort || 'createdAt';
      return a[sort] < b[sort] ? 1 : -1;
    });
    if (params.limit) {
      const page = params.page || 0;
      const offset = page * params.limit;
      data.items = data.items.slice(offset, offset + params.limit);
    }
    return of(data);
  }

  fetchOne(slug: string): Observable<INews> {
    return of(this.newsList.find(n => n.slug === slug));
  }

  updateNews(slug: string, updates: any): Observable<INews | INewsError> {
    if (
      updates.slug &&
      updates.id &&
      this.newsList.find(n => n.slug === updates.slug && n.id !== updates.id)
    ) {
      return of({
        errors: [{ field: 'slug', message: 'slug has taken' }]
      });
    }
    this.newsList = this.newsList.map(news => {
      if (news.slug === slug) {
        // tslint:disable-next-line:forin
        for (const key in updates) {
          news[key] = updates[key];
        }
      }
      return news;
    });
    return of(this.newsList.find(n => n.slug === slug));
  }

  deleteNews(slug: string): Observable<boolean> {
    return of(
      this.newsList.splice(this.newsList.findIndex(n => n.slug === slug), 1)
        .length
        ? true
        : false
    );
  }
}
