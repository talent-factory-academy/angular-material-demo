import { Component } from '@angular/core';

@Component({
  selector: 'fb-root',
  template: `
     <mat-toolbar class="example-header">Header</mat-toolbar>

     <mat-sidenav-container class="example-container">
       <mat-sidenav #sidenav mode="side" opened class="example-sidenav"
                    [fixedInViewport]="false" [fixedTopGap]="0"
                    [fixedBottomGap]="0">

         <mat-list>
           <mat-list-item routerLink="catalog">catalog</mat-list-item>
           <mat-divider></mat-divider>
           <mat-list-item routerLink="contacts">contacts</mat-list-item>
           <mat-divider></mat-divider>
           <mat-list-item routerLink="demo">demo</mat-list-item>
         </mat-list>
         
       </mat-sidenav>

       <mat-sidenav-content>
         <div style="margin: 20px; max-width: 600px">
           <router-outlet></router-outlet>
  
           <br>
           <mat-divider></mat-divider>
           <br>
           <p><button mat-button (click)="sidenav.toggle()">Toggle</button></p>
         </div>
       </mat-sidenav-content>
     </mat-sidenav-container>

     <mat-toolbar class="example-footer">Footer</mat-toolbar>
  `,
  styles: [`
    .example-container {
      position: absolute;
      top: 60px;
      bottom: 60px;
      left: 0;
      right: 0;
    }

    .example-sidenav {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
    }

    .example-header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }

    .example-footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .active {
      background-color: orange;
    }
  `]
})
export class AppComponent {
  title = 'angular-material-demo';
}
