import { Component, OnInit } from "@angular/core";
import data from "../../../assets/hof.json";

@Component({
  selector: "app-hof",
  templateUrl: "./hof.component.html",
  styleUrls: ["./hof.component.scss"],
})
export class HofComponent implements OnInit {
  hofs = data.hof;

  constructor() {}

  ngOnInit() {
    this.hofs = this.shuffle(this.hofs);
  }

  // Fisher-Yates shuffle (Knuth Shuffle O(n) runtime complexity) Credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}
