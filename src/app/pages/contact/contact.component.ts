import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  /*CONTACT ME FORM*/
  showFormFields: boolean = false;
  sent: boolean = false;
  yourName: string = '';
  yourEmail: string = '';
  yourMessage: string = '';
  yourNumber: string = '';

  onSubmit() {
    console.log('Name:', this.yourName);
    console.log('Email:', this.yourEmail);
    console.log('Phone:', this.yourNumber);
    console.log('Message:', this.yourMessage);

    this.yourName = '';
    this.yourEmail = '';
    this.yourNumber = '';
    this.yourMessage = '';
    this.showFormFields = false;
    this.sent = true;
    console.log('sent');
  }
}
