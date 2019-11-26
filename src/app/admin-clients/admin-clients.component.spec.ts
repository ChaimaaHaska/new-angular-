import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientsComponent } from './admin-clients.component';

describe('AdminCategoriesComponent', () => {
  let component: AdminClientsComponent;
  let fixture: ComponentFixture<AdminClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
