import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-demo',
  template: `
    

    <fb-separator></fb-separator>
    
    <fb-fish-chip-list></fb-fish-chip-list>
    
    <fb-separator></fb-separator>
    <fb-dog-card 
      title="Cane 1" subtitle="American" image="https://material.angular.io/assets/img/examples/shiba2.jpg"
      labelButtonLeft="LIKE" labelButtonRight="INFO"
      (buttonLeftClick)="doSomething()"
      (buttonRightClick)="doSomethingElse()"
    >
        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.
    </fb-dog-card>
    
    <fb-separator></fb-separator>
    <fb-dog-card 
      title="Cane 2" subtitle="Pitbull" image="https://material.angular.io/assets/img/examples/shiba2.jpg"
      labelButtonLeft="LIKE" labelButtonRight="VISIT"
    >
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias commodi consectetur delectus, eius eligendi eos explicabo fugit id impedit iusto laboriosam natus nisi non nulla porro ratione reiciendis voluptatum.
    </fb-dog-card>
    
    <fb-separator></fb-separator>
    <fb-faq></fb-faq>

  `,
  styles: [
  ]
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  doSomething() {
    console.log('do something')
  }

  doSomethingElse() {
    console.log(' doSomethingElse')
  }
}
