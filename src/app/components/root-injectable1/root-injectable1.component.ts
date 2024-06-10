import { Component } from '@angular/core';
import { ProvidersInjectableService } from '../../services/providers-injectable.service';
import { InjectableRootService } from '../../services/injectable-root.service';

@Component({
  selector: 'app-root-injectable1',
  templateUrl: './root-injectable1.component.html',
  styleUrl: './root-injectable1.component.scss',

})
export class RootInjectable1Component {
  constructor(public root: InjectableRootService) {}
}
