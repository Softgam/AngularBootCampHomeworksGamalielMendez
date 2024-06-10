import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderInjectableComponent } from './provider-injectable.component';

describe('ProviderInjectableComponent', () => {
  let component: ProviderInjectableComponent;
  let fixture: ComponentFixture<ProviderInjectableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProviderInjectableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProviderInjectableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
