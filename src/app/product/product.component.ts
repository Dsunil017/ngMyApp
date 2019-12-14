import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-Product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent {
  heading = "Product list...!";
  laptoplist = [
    {
      id: 1001,
      name: "Dell",
      desc: "its a Dell 8 GB RAM",
      inStock: 12,
      price: 2300,
      isOnline: true,
      addToCart: true,
      stl: "hotpink",
      country: "Australia"
    },
    {
      id: 1002,
      name: "Sony",
      desc: "its a Sony 8 GB RAM",
      inStock: 125,
      price: 1200,
      isOnline: false,
      addToCart: true,
      stl: "orange",
      country: "Germany"
    },
    {
      id: 1003,
      name: "HP",
      desc: "its a HP 8 GB RAM",
      inStock: 0,
      price: 1200,
      isOnline: true,
      addToCart: false,
      stl: "green",
      country: "India"
    }
  ];
}
