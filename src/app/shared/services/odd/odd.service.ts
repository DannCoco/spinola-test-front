import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Calculate } from '../../models/calculate/calculate.model';
import { HttpClient } from '@angular/common/http';
import { MainPool } from '../../models/main-pool/main-pool.model';

@Injectable({
  providedIn: 'root'
})
export class OddService {

  constructor(private httpClient: HttpClient) { }

  calculate(request: MainPool): Observable<Calculate[]> {
    return this.httpClient.get<{number_of_match: number, odds: number}[]>(`http://localhost:80/api/odd?n=${request.n}&r=${request.r}`)
      .pipe(
        map(
          (e) => e.map((f) => new Calculate(f.number_of_match, f.odds))
        )
      )
  }
}
