import { Component} from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  title = 'Toma-Couch';

  rez:boolean=false;
  burgerhide:boolean=true;
  burger(){
    this.rez=!this.rez;
  }


  constructor(private breakpointObserver: BreakpointObserver){
    // detect screen size changes
    this.breakpointObserver.observe(["(max-width: 768px)"]).subscribe((result: BreakpointState) => {
      console.log(result)
      if (result.matches) {
        this.burgerhide=false;       
      } else {
        this.burgerhide=true;       
      }
    });
  }
}
