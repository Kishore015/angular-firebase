import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  tutorial: Tutorial = new Tutorial();
  isSubmitted = false;
  constructor(private tutorialService : TutorialService) { }

  ngOnInit(): void {
  }

  newTutorial():void{
    this.isSubmitted = false;
    this.tutorial = new Tutorial();
  }

  saveTutorial():void{
    this.tutorialService.createBlog(this.tutorial).then(
      ()=>{
        console.log('created new tutorial successfully');
        this.isSubmitted = true;
      }

    )
  }

}
