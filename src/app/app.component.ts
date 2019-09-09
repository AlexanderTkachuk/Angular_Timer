import { Component, OnInit, OnDestroy } from "@angular/core";
// import * as moment from "moment";
import { interval } from "rxjs";
import { delay } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  title = "AngularTimer";
  digital = '0:0:00';
  time = 0;
  started = false;
  splitArray = [];

  source = interval(10)
  .subscribe(x => {
    if(!this.started) return;

    this.time++;
    this.digital = `${Math.floor(this.time/3600)} : ${Math.floor((this.time/60)%60)} : ${this.time%60}`
  })
  
  ngOnInit() {  }

  runTimer() {
    this.started = true;
    
  }
  stopTimer() {
    this.started = false;
  }
  pauseTimer() {
    delay(300)
    this.started = !this.started;
  }

  resetTimer() {
    this.started = false;
    this.time = 0;
    this.digital = '0:00:00';
    this.splitArray = [];
  }

  splitTimer() {
    this.splitArray.push(this.digital);
  }

  ngOnDestroy() {
    this.source.unsubscribe();
  }
  
}
