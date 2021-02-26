import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasCreateComponent } from './entradas-create.component';

describe('EntradasCreateComponent', () => {
  let component: EntradasCreateComponent;
  let fixture: ComponentFixture<EntradasCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradasCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
