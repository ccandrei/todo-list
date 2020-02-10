import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCardProjectsComponent } from './todo-card-projects.component';

describe('TodoCardProjectsComponent', () => {
  let component: TodoCardProjectsComponent;
  let fixture: ComponentFixture<TodoCardProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCardProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCardProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
