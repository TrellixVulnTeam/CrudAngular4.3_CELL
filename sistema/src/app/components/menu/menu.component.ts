import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios/services/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuarioLogueado:boolean=false;
  constructor( public usuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.usuarioLogueado=this.usuariosService.isLoggedIn('');
    this.usuariosService.changeLoginStatus$.subscribe((loggedStatus:boolean)=>{
      this.usuarioLogueado=loggedStatus;
    })
  }//ngOnInit
  
  logout():void{
    this.usuariosService.logout();
  }//logout

}
