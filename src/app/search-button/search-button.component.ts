import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search-button",
  templateUrl: "./search-button.component.html",
  styleUrls: ["./search-button.component.css"]
})
export class SearchButtonComponent implements OnInit {
  active = false;

  constructor() {}

  ngOnInit() {}

  clicked(){
    this.active = !this.active;
  }
}
