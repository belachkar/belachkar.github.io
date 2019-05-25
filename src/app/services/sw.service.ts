import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwService {

  constructor(private updates: SwUpdate) {
    console.log('SwUpdates is launched.');
    interval(6 * 60 * 60).subscribe(() => updates.checkForUpdate());

    updates.available.subscribe(e => {
      console.log(e);
      console.log(`Current version is: ${e.current}`);
      console.log(`Available version is: ${e.available}`);
    });
    updates.activated.subscribe(e => {
      console.log(e);
      console.log(`Old version was: ${e.previous}`);
      console.log(`New version is: ${e.current}`);
    })
  }


}
