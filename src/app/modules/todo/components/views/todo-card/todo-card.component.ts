import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModelTodoCard} from '../../../utils/models/ModelTodoCard';
import {DialogData, ModalNewCardComponent} from '../../modals/modal-new-card/modal-new-card.component';
import {MatDialog} from '@angular/material/dialog';
import {ModelTodoItem} from '../../../utils/models/ModelTodoItem';
import {ModalNewCardItemComponent} from "../../modals/modal-new-card-item/modal-new-card-item.component";
import {ModalConfirmDeleteComponent} from "../../modals/modal-confirm-delete/modal-confirm-delete.component";
import {TodoService} from "../../../../../shared/services/todo.service";

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  @Input() card: ModelTodoCard;
  @Output() eventRemove = new EventEmitter();
  public  loading = false;
  constructor(private dialog: MatDialog, private todoService: TodoService) {
  }

  ngOnInit() {
  }

  public async  reloadContent() {
    this.loading = true;
    this.card = await this.todoService.getCard(this.card.id).toPromise();
    this.loading = false;
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(ModalNewCardItemComponent, {
      width: '250px',
      data: {name: ''}
    });

    dialogRef.afterClosed().subscribe(async (result: DialogData) => {
      if (result) {
        const nItem = new ModelTodoItem(null, result.title, new Date(), new Date());
        let nITemResult = null;
        try {
          
          this.card.content.push(nITemResult);
        } catch (e) {
          alert('Error   ' + e.getMessages());
        }
      }
      console.log('The dialog was closed', result);
    });
  }

  public removeItem(item: ModelTodoItem) {
    const dialogRef = this.dialog.open(ModalConfirmDeleteComponent, {
      width: '250px',
      data: {context: 'item'}
    });

    dialogRef.afterClosed().subscribe((result: DialogData) => {
      if (result) {
        const i = this.card.content.findIndex(it => it === item);
        if (i !== -1) {
          this.card.content.splice(i, 1);
        }
      }
    });
  }

  public removeCard() {
    const dialogRef = this.dialog.open(ModalConfirmDeleteComponent, {
      width: '250px',
      data: {context: 'card'}
    });

    dialogRef.afterClosed().subscribe((result: DialogData) => {
      if (result) {
        this.eventRemove.emit(this.card);
      }
    });
  }


}
