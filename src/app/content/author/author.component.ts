import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service'
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'] 
})
export class AuthorComponent implements OnInit {
 

  ngOnInit() {
  }

}
