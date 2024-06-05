import { Injectable } from '@angular/core';
import { ProviderInjectableModule } from '../provider-injectable/provider-injectable.module';

@Injectable({
  providedIn: ProviderInjectableModule,
})
export class ProvidersInjectableService {
  list: string[] = ['one', 'two'];
  constructor() { }
}
