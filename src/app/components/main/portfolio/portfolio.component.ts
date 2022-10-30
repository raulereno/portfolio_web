import { Component, OnInit } from '@angular/core';
import { Proyects } from 'src/app/services/mock_proyects';
import { ProyectsService } from 'src/app/services/proyects.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private proyectsService: ProyectsService) { }

  ngOnInit(): void {
    this.getProyects()
 
  }

  proyects: Proyects[]=[]

  getProyects():void{
    this.proyectsService.getProyects().subscribe(proyects=> this.proyects= proyects)
  }
}
