import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { SharedModule } from 'src/app/core/shared/shared.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [SharedModule],
  exports: [FooterComponent]
})
export class FooterModule {}
