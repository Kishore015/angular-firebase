import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Tutorial } from '../models/tutorial.model';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private dbPath = '/tutorials';
  tutorialsRef:AngularFireList<Tutorial>;

  constructor(private database : AngularFireDatabase) { 
    this.tutorialsRef = database.list(this.dbPath)
  }

  getAll():AngularFireList<Tutorial>{
    return this.tutorialsRef;
  }

  createBlog(tutorial : Tutorial):any{
    return this.tutorialsRef.push(tutorial)
  }

  update(id:string, value:any) : Promise<void>{
    return this.tutorialsRef.update(id, value)
  }

  delete(id:string): Promise<void>{
    return this.tutorialsRef.remove(id)
  }

  deleteAll(): Promise<void>{
    return this.tutorialsRef.remove()
  }
  
}
