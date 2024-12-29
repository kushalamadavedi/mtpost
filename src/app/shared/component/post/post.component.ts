import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/models/post';
import { postArr } from '../../const/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
postArr : Array<Ipost> = postArr

  constructor() { }

  ngOnInit(): void {
  }

}
