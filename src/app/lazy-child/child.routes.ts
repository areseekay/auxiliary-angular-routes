import {Routes} from "@angular/router";
import {ChildLeftComponent} from "./child-left/child-left.component";
import {ChildComponent} from "./child.component";
import {ChildRightComponent} from "./child-right/child-right.component";

export const CHILD_ROUTES: Routes = [
  {
    path: '', component: ChildComponent, children: [
      {path: 'left', component: ChildLeftComponent, outlet: 'left'},
      {path: 'right', component: ChildRightComponent, outlet: 'right'}
    ]
  },
]
