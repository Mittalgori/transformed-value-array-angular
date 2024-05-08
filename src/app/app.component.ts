import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
 
  title = 'operators-rxjs-demo';
  transformedValuesArray: number[] = [];

  ngOnInit(): void {
    const sourceOfValues$= of(1, 2, 3, 4, 5, 6);

    sourceOfValues$.pipe(
      map(value => value * 2),
      filter(value => value % 3 === 0)
    ).subscribe(
      transformedDataValue => {
        this.transformedValuesArray.push(transformedDataValue);
      }
    );
  }
}
