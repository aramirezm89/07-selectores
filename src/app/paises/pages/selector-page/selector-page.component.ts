import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pais } from '../../interfaces/RegionInterface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss'],
})
export class SelectorPageComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    region: ['', [Validators.required]],
  });

  regiones : string[] = [];
  paises:Pais[] = []
  constructor(private fb: FormBuilder, private paisesService : PaisesService) {}

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones
  }

 guardar(){
 if(this.miFormulario.valid){
  console.log(this.miFormulario.value)
 }
 }

 seleccion(){
  const region : string = this.miFormulario.get('region')?.value;
  this.paisesService.getRegiones(region).subscribe({
    next: (response) =>{
      console.log(response)
      this.paises = response;
    }
  })
 }

}
