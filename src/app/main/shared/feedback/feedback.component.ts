import { Component, OnInit } from '@angular/core';

import { Feedback } from '../../models';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback: Feedback = {
    email: '',
    comment: {
      title: 'site feedback',
      description: 'Its awesome!!!!'
    }
  };

  log(message) {
    console.log('message:  ', message);
  }

  constructor() { }

  ngOnInit() {
    console.log('Template driven forms using FormsModule');
  }

  onSubmit({ value, valid }: { value: Feedback, valid: boolean }) {
    console.log(value, valid);
  }

}
