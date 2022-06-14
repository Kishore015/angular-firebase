import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {
  tutorials?:Tutorial[];
  currentTutorial?:Tutorial;
  currentIndex = -1;
  title = '';
  constructor(private tutorialService:TutorialService) { }

  ngOnInit(): void {
    this.retrieveTutorial();
  }

  retrieveTutorial():void{
    this.tutorialService.getAll().snapshotChanges().pipe(
      map((changes: any[]) => changes.map(c => ({
        id: c.payload.id, ...c.payload.val()
      })))
    ).subscribe(data => {
      this.tutorials = data;
    })
  }

  refreshList(){
    this.currentTutorial = undefined;
    this.currentIndex = -1;
    this.retrieveTutorial();
  }

  setActiveTutorial(tutorial: Tutorial, index:number){
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(){
    this.tutorialService.deleteAll().then(() => this.refreshList()).catch(err => console.log(err));
  }

}
