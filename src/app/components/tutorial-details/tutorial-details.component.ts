import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorialService } from 'src/app/services/tutorial.service';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {
  currentTutorial = null;
  message: string = '';

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getTutorial(parseInt(this.route.snapshot.paramMap.get('id')));
  }

  /**
   * 
   * @param id 
   */
  getTutorial(id : number){
    this.tutorialService.get(id)
      .subscribe( 
        data => {
          this.currentTutorial = data;
        },
        error => {
          console.log(error);
        });
  }

  /**
   * 
   * @param status 
   */
  updatePublished(status: boolean){
    const data = {
      name: this.currentTutorial.name,
      email: this.currentTutorial.email,
      active: status
    };
    this.tutorialService.update(this.currentTutorial.id, data)
      .subscribe(
        response => {
          this.currentTutorial.active = status;
        },
        error => {
          console.log(error);
        });
  }

  updateTutorial(){
    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial)
      .subscribe( response => {
        this.message = 'The tutorial was updated successfully!';
        this.router.navigate(['/tutorials']);
      },
      error => {
        console.log(error);
      });
  }

  deleteTutorial(){
    this.tutorialService.delete(this.currentTutorial.id)
      .subscribe(
        response => {
          this.router.navigate(['/tutorials']);
        },
        error => {
          console.log(error);
        }
      )
  }
}
