import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SsoService } from '../sso.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SsoService]
})
export class HeaderComponent implements OnInit {
  private user;
  public name;
  constructor(private ssoService: SsoService) { }
  
  ngOnInit() {
    this.getSso();

  }
 
  private menuItemsArray: any[] = [ 
    {"title":"Authoring","link":"/author"},
    {"title":"Mobile Bill","link":"#"},
    {"title":"Home and Kitchen","link":"#",
    "subItems":[
                {"title":"Furniture","link":"#"},
                {"title":"Cookware","link":"#"},
               ]
    },
    {"title":"Car Accessories","link":"#",
     "subItems":[
                  {"title":"Tyres and Alloys","link":"#"},
                  {"title":"Comfort and Safety","link":"#"},
                 ]
    },
];
 private menuConfig: any = {
    "animation": "emphatic",
    "offset": {
      "top": 100
    },
    closeOnCLick: false
  };
public onMenuClose(){
 console.log("menu closed");
}
public onMenuOpen(){
 console.log("menu Opened");
}
private onItemSelect(item:any){
 console.log(item);
}

  getSso() {
    this.ssoService.getSso().subscribe(
      data => {this.user = data},
      err => console.error(err),
      () => console.log(this.user),
      
    );
   
  }

}
