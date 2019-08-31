import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { LayoutModule } from 'src/app/ui/layout/layout.module';

@NgModule({
  declarations: [MainComponent],
  imports: [SharedModule, MainRoutingModule, LayoutModule]
})
export class MainModule {}
