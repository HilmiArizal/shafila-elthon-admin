import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private API_URL: any;

  constructor(
    private http: HttpClient
  ) {
    this.API_URL = environment.url.server;
  }

  getListReservation(dataReservation: any) {
    let params = new HttpParams()
      .set("search", dataReservation.search)
      .set("currentPage", dataReservation.currentPage)
      .set("perPage", dataReservation.perPage)
    return this.http.get(this.API_URL + `reservation/getListReservation?${params}`).pipe(
      tap((res) => console.log(res))
    )
  }

  deleteReservation(dataReservation: any){
    return this.http.delete(this.API_URL + `reservation/deleteReservation?id=${dataReservation._id}`).pipe(
      tap((res) => console.log(res))
    )
  }
}
