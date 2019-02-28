import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DelegatorService {

  googleAPIURL = "https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyCMdl2byZOgAEJwJXO3LeTHwHT4JQWQ7Zo&input=ahme"
  constructor(
    private http: HttpClient
  ) { }


  getLocationApiResults(){
    return this.http.get(this.googleAPIURL).subscribe(data=>{
      return data;
    });
  }

}
