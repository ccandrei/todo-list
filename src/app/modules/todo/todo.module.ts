import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoPanelComponent} from './todo-panel.component';
import {MaterialImportModule} from '../../shared/material-import/material-import.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalNewCardComponent} from './components/modals/modal-new-card/modal-new-card.component';
import {TodoCardComponent} from './components/views/todo-card/todo-card.component';
import {ModalNewCardItemComponent} from './components/modals/modal-new-card-item/modal-new-card-item.component';
import {ModalConfirmDeleteComponent} from './components/modals/modal-confirm-delete/modal-confirm-delete.component';
import {TodoService} from '../../shared/services/todo.service';
import {HttpClientModule} from '@angular/common/http';
import { TodoCardPhoneCallsComponent } from './components/views/todo-card/todo-card-phone-calls/todo-card-phone-calls.component';
import { TodoMeetingsComponent } from './components/views/todo-card/todo-meetings/todo-meetings.component';
import { TodoCorrespondenceComponent } from './components/views/todo-card/todo-correspondence/todo-correspondence.component';
import { TodoCardProjectsComponent } from './components/views/todo-card/todo-card-projects/todo-card-projects.component';


@NgModule({
  declarations: [TodoPanelComponent, ModalNewCardComponent, TodoCardComponent, ModalNewCardItemComponent, ModalConfirmDeleteComponent, TodoCardPhoneCallsComponent, TodoMeetingsComponent, TodoCorrespondenceComponent, TodoCardProjectsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialImportModule,
    HttpClientModule
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule {
}
