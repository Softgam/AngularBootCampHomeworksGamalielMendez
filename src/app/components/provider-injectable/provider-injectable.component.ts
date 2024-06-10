import { Component } from '@angular/core';
import { ProvidersInjectableService } from '../../services/providers-injectable.service';

@Component({
  selector: 'app-provider-injectable',
  templateUrl: './provider-injectable.component.html',
  styleUrl: './provider-injectable.component.scss',
  providers: [ProvidersInjectableService]
})
export class ProviderInjectableComponent {
  constructor(public provider: ProvidersInjectableService) { }

}
