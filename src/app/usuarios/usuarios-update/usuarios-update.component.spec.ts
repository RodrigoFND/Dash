import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosUpdateComponent } from './usuarios-update.component';

describe('UsuariosUpdateComponent', () => {
  let component: UsuariosUpdateComponent;
  let fixture: ComponentFixture<UsuariosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
