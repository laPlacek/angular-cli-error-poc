import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderedComponent, ComponentsOutletModule, COMPONENTS_OUTLET_CONFIG } from '../components-outlet';

import { isArray } from 'lodash';
export function provideNavigationItems(navigationItems?: OrderedComponent | OrderedComponent[]): Provider[] {
  if (!navigationItems) return [];
  if (!isArray(navigationItems)) navigationItems = [navigationItems];

  return {
    provide: COMPONENTS_OUTLET_CONFIG,
    multi: true,
    useValue: {name: 'navigation', orderedComponents: navigationItems}
  } as any;
}


export function provideNavigationItems(navigationItems?: OrderedComponent[]): Provider {
  return {
    provide: COMPONENTS_OUTLET_CONFIG,
    multi: true,
    useValue: {name: 'navigation', orderedComponents: navigationItems || []}
  };
}

@NgModule({
  imports: [CommonModule, ComponentsOutletModule.forChild()],
  exports: [ComponentsOutletModule]
})
export class NavigationModule {
  static forRoot(navigationItems?: OrderedComponent | OrderedComponent[]): ModuleWithProviders {
    return {
      ngModule: NavigationModule,
      providers: [provideNavigationItems(navigationItems)]
    };
  }

  static forChild(navigationItems?: OrderedComponent | OrderedComponent[]): ModuleWithProviders {
    return {
      ngModule: NavigationModule,
      providers: [provideNavigationItems(navigationItems)]
    };
  }
}
