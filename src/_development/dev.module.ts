import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { devComponents } from './dev-resources';

@NgModule({
  imports: [CommonModule],
  declarations: [...devComponents]
})
export class DevModule {}
