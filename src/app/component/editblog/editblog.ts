import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ns-editblog',
  imports: [],
  templateUrl: './editblog.html',
  styleUrl: './editblog.css',
})
export class Editblog {
  private readonly fb = inject(FormBuilder);

  protected readonly tagsArray = this.fb.array(['']);
  protected readonly blogPostForm = this.fb.group({
    title: '',
    content: '',
    tags: this.tagsArray
  });
  protected addTag(){
    this.tagsArray.push(this.fb.control(''));
  }
  protected removeTag(index: number){
    this.tagsArray.removeAt(index);
  }
}
