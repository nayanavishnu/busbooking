import { Component, OnInit } from '@angular/core';
import { AjaxService } from 'src/app/shared/services/ajax.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private ajaxService: AjaxService) { }
  postResponse : {};
  ngOnInit() {
    this.postData();
  }

  postData() {
    this.ajaxService.getBusList_post().subscribe(response => {      
      this.postResponse = response;
      console.log(this.postResponse);
    })
  }
}
