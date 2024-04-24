import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectivaComponent } from './custom-directiva.component';

describe('CustomDirectivaComponent', () => {
  let component: CustomDirectivaComponent;
  let fixture: ComponentFixture<CustomDirectivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomDirectivaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomDirectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
