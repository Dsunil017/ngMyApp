import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FirstComponent } from "./app.component";
import { SampleDirectiveDirective } from './sample-directive.directive';
@NgModule({
  declarations: [FirstComponent, SampleDirectiveDirective],
  imports: [BrowserModule],
  bootstrap: [FirstComponent]
})
export class FirstModule {}
