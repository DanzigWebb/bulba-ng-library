import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from "./start-page/start-page.component";

import { TabsExampleComponent } from "./tabs-example/tabs-example.component";

const routes: Routes = [
  {
    path: '',
    component: StartPageComponent,
  },
  {
    path: 'tabs',
    component: TabsExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
