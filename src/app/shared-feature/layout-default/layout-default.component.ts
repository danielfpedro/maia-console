import { Component, OnInit, Input } from '@angular/core';

import { ObservableMedia } from "@angular/flex-layout";

@Component({
  selector: 'app-layout-default',
  templateUrl: './layout-default.component.html',
  styleUrls: ['./layout-default.component.scss']
})
export class LayoutDefaultComponent implements OnInit {

  @Input() snav;

  constructor(private media: ObservableMedia) {

  }

  ngOnInit() {
    console.log('snab', this.snav);
  }


  sideNavControlOpened() {
    return (this.media.isActive('gt-sm'));
  }
  sideNavControlMode() {
    return (this.media.isActive('gt-sm')) ? 'side' : 'over';
  }

}
