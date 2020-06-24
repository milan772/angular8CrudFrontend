import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  tutorial = {
    name: '',
    email: '',
    active: false
  }
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit() {
  }

  saveTutorial(){
    const data = {
      name: this.tutorial.name,
      email: this.tutorial.email
    };
    this.tutorialService.create(data)
      .subscribe( response => {
        console.log(response);
        this.submitted = true;
      },  
      error => {
        console.log(error);
      });
  }

  newTutorial() {
    this.submitted = false;
    this.tutorial = {
      name: '',
      email: '',
      active: false
    };
  }
}
