import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCardPhoneCallsComponent } from './todo-card-phone-calls.component';

describe('TodoCardPhoneCallsComponent', () => {
  let component: TodoCardPhoneCallsComponent;
  let fixture: ComponentFixture<TodoCardPhoneCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCardPhoneCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCardPhoneCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
