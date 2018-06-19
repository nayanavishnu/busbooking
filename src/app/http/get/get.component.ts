import { Component, OnInit } from '@angular/core';
import { AjaxService } from 'src/app/shared/services/ajax.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private ajaxService: AjaxService) { }
  getResponse : {};
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.ajaxService.getBusList_get().subscribe(response => {      
      this.getResponse = response;
      console.log(this.getResponse);
    })
  }
}
