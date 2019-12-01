import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FirstComponent } from "./app.component";
import { SampleDirectiveDirective } from './sample-directive.directive';
import { MobPartsComponent } from './mob-parts/mob-parts.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
@NgModule({
  declarations: [FirstComponent, SampleDirectiveDirective, MobPartsComponent, BooksListComponent, BikeListComponent, LaptopListComponent],
  imports: [BrowserModule],
  bootstrap: [FirstComponent]
})
export class FirstModule {}
