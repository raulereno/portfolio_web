import { Component, Input, OnInit } from '@angular/core';
import { Proyects } from 'src/app/services/mock_proyects';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProyectsService } from 'src/app/services/proyects.service';

@Component({
  selector: 'app-detail-proyects',
  templateUrl: './detail-proyects.component.html',
  styleUrls: ['./detail-proyects.component.scss']
})
export class DetailProyectsComponent implements OnInit {

  proyect : Proyects | undefined;
  constructor(
    private route:ActivatedRoute,
    private proyectsService:ProyectsService,
    private location:Location
  ) { }

 
  
  ngOnInit(): void {
    this.getProyect()
    console.log(this.proyect);
  }
  goBack():void {
    this.location.back()
  }

  getProyect(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.proyectsService.getProyect(id).subscribe(proyect => this.proyect=proyect)
  }
  
}
