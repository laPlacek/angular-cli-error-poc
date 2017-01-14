import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOutletComponent } from './components-outlet.component';
import { COMPONENTS_OUTLET_CONFIG, ComponentOutletConfig } from './components-outlet-config';
import { isArray } from 'lodash';

export function provideComponentOutletConfig(componentOutletConfig?: ComponentOutletConfig | ComponentOutletConfig[]): Provider[] {
  componentOutletConfig = componentOutletConfig || [];
  if (!isArray(componentOutletConfig)) componentOutletConfig = [componentOutletConfig];

  return componentOutletConfig.map(config => ({
    provide: COMPONENTS_OUTLET_CONFIG,
    multi: true,
    useValue: componentOutletConfig
  }));
}

@NgModule({
  imports: [CommonModule],
  declarations: [ComponentsOutletComponent],
  exports: [ComponentsOutletComponent]
})
export class ComponentsOutletModule {
  static forRoot(componentOutletConfig?: ComponentOutletConfig | ComponentOutletConfig[]): ModuleWithProviders {
    return {
      ngModule: ComponentsOutletModule,
      providers: [provideComponentOutletConfig(componentOutletConfig)]
    };
  }

  static forChild(componentOutletConfig?: ComponentOutletConfig | ComponentOutletConfig[]): ModuleWithProviders {
    return {
      ngModule: ComponentsOutletModule,
      providers: [provideComponentOutletConfig(componentOutletConfig)]
    };
  }
}
