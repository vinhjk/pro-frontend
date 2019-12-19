import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {
  private id: any;

  constructor(private activatedRoute: ActivatedRoute,
              private domSanitizer: DomSanitizer) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit() {
    console.log(this.id);
  }

}
