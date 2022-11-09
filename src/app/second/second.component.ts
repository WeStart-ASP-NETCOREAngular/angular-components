import { Component } from '@angular/core';

@Component({
  selector: '.app-second',
  templateUrl: './second.component.html',
  //   template: `<h2>Hello from second Template html</h2>`,\
  //   styleUrls  : ['./second.component.css']
  styles: [
    `
      h2 {
        color: blue;
      }
    `,
  ],
})
export class SecondComponent {
  test = 'test';
}
