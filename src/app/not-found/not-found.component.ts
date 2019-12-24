import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})

/** 
* @author damasceno.lopes
*/
export class NotFoundComponent implements OnInit {
  constructor(
    public translate: TranslateService) { }
  ngOnInit() {
  }
}
