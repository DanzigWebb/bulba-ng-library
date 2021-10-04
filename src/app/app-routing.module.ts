import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsExampleComponent } from "./tabs-example/tabs-example.component";

const routes: Routes = [
  {
    path: '',
    component: TabsExampleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
