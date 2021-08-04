import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  isLeftActive = true;

  constructor(private router: Router) {
  }


  ngOnInit(): void {
  }

  switchContent() {
    const outletLeft = ["./lazyChild", {outlets: {left: 'left', right: 'right'}}]
    const outletRight = ["./lazyChild", {outlets: {left: 'right', right: 'left'}}]
    if (this.isLeftActive) {
      this.router.navigate(outletRight, {skipLocationChange: true});
    } else {
      this.router.navigate(outletLeft, {skipLocationChange: true});
    }
    this.isLeftActive = !this.isLeftActive;
  }
}
