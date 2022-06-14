import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  // creates a new tutorial according to model
  color = false;
  tutorial: Tutorial = new Tutorial();
  isSubmitted = true;
  constructor(private tutorialService : TutorialService, private router:Router) { }

  ngOnInit(): void {
    // this.saveTutorial();
  }

  newTutorial():void{
    this.isSubmitted = true ;
    // this.tutorial = new Tutorial();
    console.log('created new tutorial successfully');
    
  }

  saveTutorial():void{
    this.tutorialService.createBlog(this.tutorial).then(
      ()=>{
        console.log('created new tutorial successfully');
        this.isSubmitted = false;
        // this.router.navigate(['/tutorials-list']);
      }

    )
  }

}
