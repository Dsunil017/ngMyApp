import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mob-parts",
  templateUrl: "./mob-parts.component.html",
  styleUrls: ["./mob-parts.component.css"]
})
export class MobPartsComponent {
  heading = "Angular welcomes you...!";
  mobParts = [
    {
      id: 1001,
      name: "MOBILE screen",
      desc: "its a moto g4 plus screen",
      inStock: 12,
      price: 1200,
      isOnline: true,
      addToCart: true,
      stl: "hotpink",
      country: "Australia"
    },
    {
      id: 1002,
      name: "mobile screen",
      desc: "its a moto g4 plus screen",
      inStock: 125,
      price: 1200,
      isOnline: false,
      addToCart: true,
      stl: "orange",
      country: "Germany"
    },
    {
      id: 1003,
      name: "Mobile screen",
      desc: "its a moto g4 plus screen",
      inStock: 0,
      price: 1200,
      isOnline: true,
      addToCart: false,
      stl: "green",
      country: "India"
    }
  ];
}
