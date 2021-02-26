import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasUpdateComponent } from './entradas-update.component';

describe('EntradasUpdateComponent', () => {
  let component: EntradasUpdateComponent;
  let fixture: ComponentFixture<EntradasUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradasUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradasUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
