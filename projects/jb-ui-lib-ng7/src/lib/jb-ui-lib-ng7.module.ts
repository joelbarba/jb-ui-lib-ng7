import { NgModule } from '@angular/core';
import { JbUiLibNg7Component } from './jb-ui-lib-ng7.component';
import { DumbMsgComponent } from './dumb-msg/dumb-msg.component';

@NgModule({
  declarations: [JbUiLibNg7Component, DumbMsgComponent],
  imports: [
  ],
  exports: [JbUiLibNg7Component, DumbMsgComponent]
})
export class JbUiLibNg7Module { }
