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
  navhide1:boolean=true;
  navhide2:boolean=false;

  burger(){
    this.rez=!this.rez;
    this.navhide2=!this.navhide2;
  }


  constructor(private breakpointObserver: BreakpointObserver){
    // detect screen size changes
    this.breakpointObserver.observe(["(max-width: 768px)"]).subscribe((result: BreakpointState) => {
      console.log(result)   
      if (result.matches) {
        this.burgerhide=false;  
        this.navhide1=false;
        this.navhide2=false;          
      } else {
        this.burgerhide=true;
        this.navhide1=true;
        }
    })
  }
}
