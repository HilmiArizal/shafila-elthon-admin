import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Reservation } from 'src/app/interface/reservation';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'wish', 'person', 'reservation', 'session', 'action'];
  public dataSource = new MatTableDataSource<Reservation>();
  public pagePerPage: any;
  public pageCurrentPage: any;
  public pageTotalData: any;

  public totalPresent: any;
  public totalNotPresent: any;
  public session1: any;
  public session2: any;
  public session3: any;

  selectedFriend: string = '';

  constructor(
    private reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    this.getListReservation();
  }

  async getListReservation() {
    let dataReservation: any = new Object();
    dataReservation.search = "";
    dataReservation.currentPage = 0;
    dataReservation.perPage = 5;
    await this.reservationService.getListReservation(dataReservation).subscribe((res: any) => {
      console.log(res.data);
      this.dataSource = res.data;
      this.pagePerPage = res.per_page;
      this.pageCurrentPage = res.current_page;
      this.pageTotalData = res.total_data;
    });
  }

  async getSearchListReservation(e: any) {
    let dataReservation: any = new Object();
    dataReservation.search = e.target.value.trim();
    dataReservation.currentPage = 0;
    dataReservation.perPage = 5;
    await this.reservationService.getListReservation(dataReservation).subscribe((res: any) => {
      this.dataSource = res.data;
      this.pagePerPage = res.per_page;
      this.pageCurrentPage = res.current_page;
      this.pageTotalData = res.total_data;
    });
  }

  async getPageListReservation(e: any) {
    let dataReservation: any = new Object();
    dataReservation.search = "";
    dataReservation.currentPage = e.pageIndex;
    dataReservation.perPage = e.pageSize;
    await this.reservationService.getListReservation(dataReservation).subscribe((res: any) => {
      this.dataSource = res.data;
      this.pagePerPage = res.per_page;
      this.pageCurrentPage = res.current_page;
      this.pageTotalData = res.total_data;
    });
  }

  onDeleteReservation(dataReservation: any){
    if(window.confirm(`Anda sudah yakin menghapus data ${dataReservation.name}`)){
      this.reservationService.deleteReservation(dataReservation).subscribe((res) => {
        this.getListReservation();
        alert('Berhasil')
      })
    }
  }

}
