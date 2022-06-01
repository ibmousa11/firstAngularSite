import { Input } from "@angular/core";
import { Output } from "@angular/core";
import { OnInit } from "@angular/core";
import { OnChanges } from "@angular/core";
import { Component } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']

})

export class StarComponent implements OnChanges {

  cropWidth: number = 100;
  @Input() rating: number = 0;
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5;
    // console.log(this.rating);
    // console.log(this.cropWidth);
  }

  onClick(): void {
    //console.log(`The rating ${this.rating} was clicked!`);
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
