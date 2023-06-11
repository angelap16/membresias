import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetListarComponent } from './get-listar.component';

describe('GetListarComponent', () => {
  let component: GetListarComponent;
  let fixture: ComponentFixture<GetListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
