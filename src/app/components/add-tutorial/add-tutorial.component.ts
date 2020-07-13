import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { Router } from '@angular/router';

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

  constructor(
    private tutorialService: TutorialService,
    private router: Router) { }

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
        this.router.navigate(['/tutorials']);
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
