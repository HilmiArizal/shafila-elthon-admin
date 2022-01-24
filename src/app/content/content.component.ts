import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Reservation } from '../interface/reservation';
import { ReservationService } from '../service/reservation.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

}
