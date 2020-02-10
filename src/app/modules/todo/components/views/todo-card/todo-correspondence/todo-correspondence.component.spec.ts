import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCorrespondenceComponent } from './todo-correspondence.component';

describe('TodoCorrespondenceComponent', () => {
  let component: TodoCorrespondenceComponent;
  let fixture: ComponentFixture<TodoCorrespondenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCorrespondenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCorrespondenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
