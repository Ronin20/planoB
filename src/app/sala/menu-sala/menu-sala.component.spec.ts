import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSalaComponent } from './menu-sala.component';

describe('MenuSalaComponent', () => {
  let component: MenuSalaComponent;
  let fixture: ComponentFixture<MenuSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
