import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetails } from '../models/carDetails';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44320/api/';

  constructor(private httpClient: HttpClient) {}
  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getall'; 

    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl);
  }
  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getbybrand?brandId='+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl + "cars/getcardetailsbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarDetailsByCarId(Id:number):Observable<ListResponseModel<CarDetails>>{
    let newPath = this.apiUrl + "cars/getcardetailsbycarid?Id=" + Id;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
}
