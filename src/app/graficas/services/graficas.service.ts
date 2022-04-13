import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http:HttpClient ) { }

  getUsuarioRedessociales(){
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesDonaData(){
    return this.getUsuarioRedessociales()
    .pipe(
      delay(1500),
      map(data => {
         const values = Object.values(data);
         const labels = Object.keys(data);
         return { labels, values };
      })

    )
  }
}
