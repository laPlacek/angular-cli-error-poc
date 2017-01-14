import { ViewContainerRef, OnInit, ComponentFactoryResolver, Component, ViewChild, Inject, ElementRef } from '@angular/core';
import { reduce, sortBy, map, each} from 'lodash';
import { COMPONENTS_OUTLET_CONFIG, ComponentOutletConfig } from './components-outlet-config';
import { OrderedComponent } from './ordered-component';

@Component({
  selector: 'dd-components-outlet',
  template: '<template #placeholder></template><ng-content></ng-content>',
})
export class ComponentsOutletComponent implements OnInit {
  @ViewChild('placeholder', {read: ViewContainerRef})
  private _placeholder: ViewContainerRef;

  constructor(@Inject(COMPONENTS_OUTLET_CONFIG)
              private _allConfigs: ComponentOutletConfig[],
              private _element: ElementRef,
              private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this._createComponents();
  }

  private _createComponents(): void {
    let name = this._element.nativeElement.attributes['name'].value;

    let orderedComponents = this._allConfigs.reduce((mem, config) => {
      if (config.name === name)
        return mem.concat(config.orderedComponents);
      return mem;
    }, []);

    let sortedOrderedComponents = sortBy(orderedComponents, ['order']);
    let componentTypes = map(sortedOrderedComponents, mi => mi.component);

    each(componentTypes, this._createComponent.bind(this));
  }

  private _createComponent(type: any): void {
    let factory = this._componentFactoryResolver.resolveComponentFactory(type);
    this._placeholder.createComponent(factory);
  }
}
