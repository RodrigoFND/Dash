import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    
  }


  removerAutenticacao()
  {
    this.authService.tirarAutenticacao()
  }





}