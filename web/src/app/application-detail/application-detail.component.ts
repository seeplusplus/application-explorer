import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { selectApplicationById } from '../selector/application.selectors';
import { Application } from '../application';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.sass']
})
export class ApplicationDetailComponent implements OnInit {

  application: Application;

  constructor(private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {

    this.route.params.subscribe((p) => 
      this.store.pipe(select(selectApplicationById, { id: p.id}))
        .subscribe(a => this.application = a));
  }
}
