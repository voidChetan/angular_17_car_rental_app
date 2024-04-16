import { Component, OnInit } from '@angular/core';
import { Car } from '../../model/car';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit {

  carObj: Car = new Car();
  carList: Car[] = [];
  localKeyName: string = 'rentalCar';
  isSidePanelVisible: boolean = false;


  ngOnInit(): void {
    debugger;
    const localData = localStorage.getItem(this.localKeyName);
    if(localData != null) {
      this.carList = JSON.parse(localData);
    }
  }
  onSaveCar() {
    debugger;
    if(this.carObj.carId == 0) {
      this.carObj.carId =   this.carList.length  + 1;
      this.carList.unshift(this.carObj);
      localStorage.setItem(this.localKeyName,JSON.stringify(this.carList));
      this.onReset();
    }
  }

  onReset() {
    this.carObj = new Car();
  }
}
