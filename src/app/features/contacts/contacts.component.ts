import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user';
import { delay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from './components/dialog-delete.component';
import { DialogUpsertComponent } from './components/dialog-upsert.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'fb-contacts',
  template: `

    <ng-template #loader>
      <mat-spinner></mat-spinner>
    </ng-template>

    <button mat-fab color="primary" (click)="upsertHandler()" matTooltip="Add new user">
      <mat-icon>add</mat-icon>
    </button>

    <mat-list cdkDropList class="example-list" *ngIf="users; else loader"  (cdkDropListDropped)="drop($event)">
      <div *ngFor="let user of users" cdkDrag  class="example-box">
        <mat-list-item >
          <h3 mat-line>{{user.name}}</h3>

          <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Example icon-button with a menu">
            <mat-icon>more_vert</mat-icon>
          </button>
          <mat-menu #menu="matMenu">
            <button mat-menu-item (click)="deleteHandler(user)">
              <mat-icon>delete</mat-icon>
              <span>Delete</span>
            </button>
            <button mat-menu-item (click)="upsertHandler(user)">
              <mat-icon>mode_edit</mat-icon>
              <span>Edit</span>
            </button>
          </mat-menu>
          
        </mat-list-item>
        <mat-divider></mat-divider>
      </div>
    </mat-list>

    <table mat-table *ngIf="users" [dataSource]="users" class="mat-elevation-z8">

      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef> No. </th>
        <td mat-cell *matCellDef="let element"> {{element.id}} </td>
      </ng-container>

      <!-- Name Column -->
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Name </th>
        <td mat-cell *matCellDef="let element"> {{element.name}} </td>
      </ng-container>


      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr 
        mat-row *matRowDef="let row; columns: displayedColumns;"
        (click)="upsertHandler(row)"
      ></tr>
    </table>


  `,
  styles: [`
    table {
      width: 100%;
    }
    .example-list {
      width: 500px;
      max-width: 100%;
      border: solid 1px #ccc;
      min-height: 60px;
      display: block;
      border-radius: 4px;
      overflow: hidden;
    }

    .example-box {
      padding: 20px 10px;
      border-bottom: solid 1px #ccc;
      color: rgba(0, 0, 0, 0.87);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      cursor: move;
      font-size: 14px;
    }

    .cdk-drag-preview {
      box-sizing: border-box;
      border-radius: 4px;
      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }

    .cdk-drag-placeholder {
      opacity: 0;
    }

    .cdk-drag-animating {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    .example-box:last-child {
      border: none;
    }

    .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }
  `]
})
export class ContactsComponent {
  displayedColumns: string[] = ['id', 'name'];


  users: User[] | null = null;

  constructor(private http: HttpClient, public dialog: MatDialog) {
    http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        delay(1000)
      )
      .subscribe(res => this.users = res)
  }

  deleteHandler(user: User) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      // width: '600px',
      data: {
        user: user,
        title: 'Delete',
      }
    });

    dialogRef.componentInstance.doSomething.subscribe(res => {

    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === 'confirm') {
        this.http.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
          .subscribe(() => {
            if (this.users) {
              /*const index = this.users.findIndex(u => u.id === user.id)
              this.users.splice(index, 1);*/
              this.users = this.users.filter(u => u.id !== user.id)
            }
          })
      }

    });



  }

  upsertHandler(user?: User) {

    const dialogRef = this.dialog.open(DialogUpsertComponent, {
      // width: '600px',
      data: user,
    });
    dialogRef.afterClosed().subscribe(formData => {
      if (formData) {
        if (user) {
          this.editUser({...user, ...formData})
        } else {
          this.addUser(formData)
        }
      }
    })
  }

  private editUser(user: User) {
    this.http.patch<User>(`https://jsonplaceholder.typicode.com/users/${user.id}`, user)
      .subscribe((res) => {
        if (this.users) {
          // todo Map
          const index = this.users.findIndex(u => u.id === user.id)
          this.users[index] = res;
        }
      })
  }

  private addUser(user: Pick<User, 'name'>) {
    this.http.post<Pick<User, 'id' | 'name'>>(`https://jsonplaceholder.typicode.com/users/`, user)
      .subscribe((res) => {
        if (this.users) {
         // this.users.push(res as User)
         this.users = [...this.users, res as User]
        }
      })
  }

  drop(event: CdkDragDrop<string[]>) {
    if (this.users) {
      moveItemInArray(this.users, event.previousIndex, event.currentIndex);
      this.users = [...this.users]
    }
  }
}
