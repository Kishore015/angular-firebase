import { Component, Input, OnInit, Output } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {
  @Input() tutorial?:Tutorial;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentTutorial: Tutorial ={
    id:'',
    blog_title:'',
    blog_desc:'',
    author:'',
    published:false
  };
  message:string = '';
  constructor(private tutorialService:TutorialService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnchanges():void{
    this.message = '',
    this.currentTutorial = {...this.currentTutorial}
  }

  updatePublished(status:boolean):void{
    if (this.currentTutorial.id) {
      this.tutorialService.update(this.currentTutorial.id, { published: status })
      .then(() => {
        this.currentTutorial.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  // uupdate tutorial
  updateTutorial(): void {
    const data = {
      title: this.currentTutorial.blog_title,
      description: this.currentTutorial.blog_desc
    };
    if (this.currentTutorial.id) {
      this.tutorialService.update(this.currentTutorial.id, data)
        .then(() => this.message = 'The tutorial was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  // Delete Tutorial
  deleteTutorial(): void {
    if (this.currentTutorial.id) {
      this.tutorialService.delete(this.currentTutorial.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }

}
