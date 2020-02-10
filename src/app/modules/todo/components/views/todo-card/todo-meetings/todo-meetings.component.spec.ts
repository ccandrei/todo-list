import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMeetingsComponent } from './todo-meetings.component';

describe('TodoMeetingsComponent', () => {
  let component: TodoMeetingsComponent;
  let fixture: ComponentFixture<TodoMeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoMeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
