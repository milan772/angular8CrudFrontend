import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {
  tutorials : any;
  currentTutorial = null;
  currentIndex  = -1;
  name = '';

  constructor(private tutorialService: TutorialService) { }

  ngOnInit() {
    this.retrieveTutorials();
  }

  retrieveTutorials(){
    this.tutorialService.getAll()
      .subscribe(
        data => {
          this.tutorials  = data;
          console.log(this.tutorials);
        },
        error => {
          console.log(error);
        });
  }

  /**
   * 
   * @param tutorial 
   * @param i 
   */
  setActiveTutorial(tutorial, i){
    this.currentTutorial = tutorial;
    this.currentIndex = i;
  }

  removeAllTutorials() {
    this.tutorialService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTutorials();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle() {
    this.tutorialService.findByTitle(this.name)
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
