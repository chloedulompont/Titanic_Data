import { Component, OnInit } from '@angular/core';
import {PassengersService} from "../../services/passengers.service";
import {Passenger} from "../../model/passenger";

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {
  public passengers: Array<Passenger> = []

  constructor(
    private passengersService: PassengersService
  ) { }

  ngOnInit(): void {
    this.passengersService.getAllPassengers().subscribe(
      data => {
        this.passengers = Object.values(data);
      }
    )
  }

}
