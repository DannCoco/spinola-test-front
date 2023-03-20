import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { OddService } from './odd.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MainPool } from '../../models/main-pool/main-pool.model';
import { Calculate } from '../../models/calculate/calculate.model';

describe('OddService', () => {
  let service: OddService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(OddService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve posts from the API bia GET', () => {
    const dummyOdds: {number_of_match: number, odds: number}[] = [
      {
        number_of_match: 1,
        odds: 65
      }
    ]

    const dummyResquest: MainPool = new MainPool(90, 8)
    service.calculate(dummyResquest).subscribe((odds: Calculate[]) => {
      expect(odds.length).toBe(1)
      expect(odds).toEqual([new Calculate(1, 65)])
    })

    const request = httpMock.expectOne(`http://127.0.0.1:8000/api/odd?n=${dummyResquest.n}&r=${dummyResquest.r}`)
    expect(request.request.method).toBe('GET')

    request.flush(dummyOdds)
  });

  afterEach(() => {
    httpMock.verify()
  })
});
