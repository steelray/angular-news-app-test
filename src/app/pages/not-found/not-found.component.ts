import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  code = 404;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const code = +this.activatedRoute.snapshot.queryParamMap.get('code');
    if (code) {
      this.code = code;
    }
  }
}
