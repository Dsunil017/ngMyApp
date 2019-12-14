import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AppHomePageComponent } from "./app-home-page/app-home-page.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { ProductComponent } from "./product/product.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
const appRoutes: Routes = [
  { path: "Product", component: ProductComponent },
  { path: "Inventory", component: InventoryComponent },
  { path: "Home", component: AppHomePageComponent },
  { path: "", component: AppHomePageComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
