import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  data: Observable<string>
  fruitArray = []
  constructor(private alertService :AlertService) { }

  ngOnInit() {
    this.data = new Observable(observ => {
      setTimeout(() => {
        observ.next("apple");
      }, 1000);

      setTimeout(() => {
        observ.next("Orange");
        observ.unsubscribe();
      }, 2000);
    })

    this.data.subscribe(fruit=>{
      this.fruitArray.push(fruit);
    });
  }

  setData(){
    this.alertService.setAlert("Inserted Successfully");
  }

}
