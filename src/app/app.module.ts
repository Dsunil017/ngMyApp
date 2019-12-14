import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FirstComponent } from "./app.component";
import { SampleDirectiveDirective } from "./sample-directive.directive";
import { MobPartsComponent } from "./mob-parts/mob-parts.component";
import { BooksListComponent } from "./books-list/books-list.component";
import { BikeListComponent } from "./bike-list/bike-list.component";
import { LaptopListComponent } from "./laptop-list/laptop-list.component";
import { BannerparadoxComponent } from "./bannerparadox/bannerparadox.component";

import { NavComponent } from "./Layout/nav/nav.component";
import { ProductComponent } from "./product/product.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AppHomePageComponent } from "./app-home-page/app-home-page.component";
import { ParallaxComponent } from "./Shared/parallax/parallax.component";
import { ProductItemListComponent } from "./Shared/product-item-list/product-item-list.component";
import { ParallaxMiddleComponent } from "./Shared/parallax-middle/parallax-middle.component";
import { ParallaxFooterComponent } from "./Shared/parallax-footer/parallax-footer.component";
import { ParallaxNavBarComponent } from "./Shared/parallax-nav-bar/parallax-nav-bar.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    FirstComponent,
    SampleDirectiveDirective,
    MobPartsComponent,
    BooksListComponent,
    BikeListComponent,
    LaptopListComponent,
    BannerparadoxComponent,
    NavComponent,
    ProductComponent,
    InventoryComponent,
    PageNotFoundComponent,
    AppHomePageComponent,
    ParallaxComponent,
    ProductItemListComponent,
    ParallaxMiddleComponent,
    ParallaxFooterComponent,
    ParallaxNavBarComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [FirstComponent]
})
export class FirstModule {}
