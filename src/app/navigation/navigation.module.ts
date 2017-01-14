import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderedComponent, ComponentsOutletModule, COMPONENTS_OUTLET_CONFIG } from '../components-outlet';

import { isArray } from 'lodash';
export function provideNavigationItems(navigationItems?: OrderedComponent[]): Provider {
  if (!navigationItems) return [];
  //if (!isArray(navigationItems)) navigationItems = [navigationItems];

  return {
    provide: COMPONENTS_OUTLET_CONFIG,
    multi: true,
    useValue: {name: 'navigation', orderedComponents: navigationItems}
  };
}

@NgModule({
  imports: [CommonModule, ComponentsOutletModule],
  exports: [ComponentsOutletModule]
})
export class NavigationModule {
  static forRoot(navigationItems?: OrderedComponent[]): ModuleWithProviders {
    return {
      ngModule: NavigationModule,
      providers: [provideNavigationItems(navigationItems)]
    };
  }

  static forChild(navigationItems?: OrderedComponent[]): ModuleWithProviders {
    return {
      ngModule: NavigationModule,
      providers: [provideNavigationItems(navigationItems)]
    };
  }
}
