import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasReadComponent } from './entradas-read.component';

describe('EntradasReadComponent', () => {
  let component: EntradasReadComponent;
  let fixture: ComponentFixture<EntradasReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradasReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradasReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
