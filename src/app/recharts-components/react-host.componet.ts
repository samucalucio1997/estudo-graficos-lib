import {
    Component,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
  } from '@angular/core';
  import * as ReactDOM from 'react-dom';
  import React from 'react';
  
  @Component({
    selector: 'app-react-host',
    template: '<div></div>',
  })
  export class ReactHostComponent implements OnInit, OnChanges, OnDestroy {
    @Input() reactComponent: React.FunctionComponent<any> | React.ComponentClass<any> | undefined;
    @Input() props: any;
  
    constructor(private hostElement: ElementRef) {}
  
    ngOnInit(): void {
      this.renderReact();
    }
  
    ngOnChanges(): void {
      this.renderReact();
    }
  
    ngOnDestroy(): void {
      ReactDOM.unmountComponentAtNode(this.hostElement.nativeElement);
    }
  
    private renderReact(): void {
      if (this.reactComponent) {
        ReactDOM.render(
          React.createElement(this.reactComponent, this.props),
          this.hostElement.nativeElement
        );
      }
    }
  }