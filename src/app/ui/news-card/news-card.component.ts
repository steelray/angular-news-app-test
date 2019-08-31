import { Component, Input, Output, EventEmitter } from '@angular/core';
import { INews } from 'src/app/core/interfaces/news.interface';
import { Profile } from 'src/app/core/models/profile.model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
  @Input() item: INews;
  @Input() isAuthed: Profile | false;
  @Output() editChange = new EventEmitter<string>();
  @Output() deleteChange = new EventEmitter<string>();

  onEdit(slug: string) {
    this.editChange.emit(slug);
  }
  onDelete(slug: string) {
    this.deleteChange.emit(slug);
  }
}
