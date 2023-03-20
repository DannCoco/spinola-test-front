import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Calculate } from 'src/app/shared/models/calculate/calculate.model';
import { MainPool } from 'src/app/shared/models/main-pool/main-pool.model';
import { OddService } from 'src/app/shared/services/odd/odd.service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})

export class CalculateComponent {
  listOdds: Calculate[] = [];

  calculateForm = new FormGroup({
    numberOfBalls: new FormControl(0, Validators.required),
    ballsDrawn: new FormControl(0, Validators.required),
  });

  constructor(private oddService: OddService) {

  }

  onSubmit() {
    const numberOfBallsForm = this.calculateForm.get('numberOfBalls')?.value as number
    const ballsDrawnForm = this.calculateForm.get('ballsDrawn')?.value as number
    const request = new MainPool(numberOfBallsForm, ballsDrawnForm)

    this.oddService.calculate(request).subscribe(
      (odds: Calculate[]) => {
        this.listOdds = odds
      }
    )
  }
}
