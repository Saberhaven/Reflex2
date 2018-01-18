import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SsoService } from '../sso.service'
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';  
import { Router } from '@angular/router';  

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SsoService]
})
export class HeaderComponent implements OnInit {
  private user;
  public name;
  constructor(private ssoService: SsoService,
              private route: ActivatedRoute, 
              private router: Router) { }
  
  ngOnInit() {
    this.getSso();

  }
 
  private menuItemsArray: any[] = [ 
    {"title":"Article","link":"/article/425"},
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
 console.log(item.link);
 this.router.navigate([item.link]);
}

  getSso() {
    this.ssoService.getSso().subscribe(
      data => {this.user = data},
      err => console.error(err),
      () => console.log(this.user),
      
    );
   
  }

}
