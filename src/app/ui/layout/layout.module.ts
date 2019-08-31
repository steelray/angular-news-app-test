import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [HeaderModule, FooterModule],
  exports: [LayoutComponent]
})
export class LayoutModule {}
