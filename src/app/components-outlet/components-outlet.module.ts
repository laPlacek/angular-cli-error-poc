import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOutletComponent } from './components-outlet.component';
import { COMPONENTS_OUTLET_CONFIG, ComponentOutletConfig } from './components-outlet-config';

@NgModule({
  imports: [CommonModule],
  declarations: [ComponentsOutletComponent],
  exports: [ComponentsOutletComponent]
})
export class ComponentsOutletModule { }
