import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from "./start-page/start-page.component";

import { TabsExampleComponent } from "./tabs-example/tabs-example.component";
import { ToggleButtonsExampleComponent } from "./toggle-buttons-example/toggle-buttons-example.component";
import { ModalExampleComponent } from "./modal-example/modal-example.component";
import { SelectExampleComponent } from "./select-example/select-example.component";

const routes: Routes = [
  {
    path: '',
    component: StartPageComponent,
  },
  {
    path: 'tabs',
    component: TabsExampleComponent,
  },
  {
    path: 'toggle-buttons',
    component: ToggleButtonsExampleComponent,
  },
  {
    path: 'modal',
    component: ModalExampleComponent,
  },
  {
    path: 'select',
    component: SelectExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
