import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-checkout',
  templateUrl: './payment-checkout.component.html',
  styleUrls: ['./payment-checkout.component.scss']
})
export class PaymentCheckoutComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  container: any="A selector or DOM element for the form where users will be entering their information";
  messages: any = {validDate: 'valid\ndate', monthYear: 'mm/yyyy'};
  placeholders: any = {number: '•••• •••• •••• ••••', name: 'Full Name', expiry: '••/••', cvc: '•••'};
  masks: any;
  formatting: boolean = true;
  debug: boolean = false;
  
}
