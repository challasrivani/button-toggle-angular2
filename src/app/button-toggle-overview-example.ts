import {Component} from '@angular/core';

/**
 * @title Basic button-toggles
 */
@Component({
  selector: 'button-toggle-overview-example',
  templateUrl: 'button-toggle-overview-example.html',
  styles: [`
          .bebold{
            font-weight: bold;
          }
          .beitalic{
            font-style: italic;
          }
          .beunderline{
            text-decoration:underline;
          }
    `]
})
export class ButtonToggleOverviewExample {
   myFlagForIsBold : boolean = false;
   myFlagForIsItalic : boolean = false;
   myFlagForIsUnderline : boolean = false;

}


/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */