import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay, switchMap, tap } from 'rxjs';
import { Pais } from '../../interfaces/PaisInterface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss'],
})
export class SelectorPageComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    region: ['', [Validators.required]],
    pais: ['', [Validators.required]],
    frontera: [''],
  });

  regiones: string[] = [];
  paises: Pais[] = [];
  fronteras: Pais[] = []
  noFrontera:boolean=false;
  cargando:boolean = false;

  constructor(private fb: FormBuilder, private paisesService: PaisesService) {}

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;


    /*  this.miFormulari.get('region')?.valueChanges.subscribe(region =>{
      this.paisesService.getPaises(region).subscribe({
        next : (response) =>{
          this.paises = response;
          this.miFormulario.get('pais')?.reset('')
        },
        error: (err) =>{
          console.log(err)
          this.paises = []
        }
      })
    }) */

    //usando switchMAp RXJS

    this.miFormulario
      .get('region')
      ?.valueChanges.pipe(
        switchMap((region) => this.paisesService.getPaises(region)),
        tap( (_) =>{
          this.miFormulario.get('pais')?.reset('');
          this.miFormulario.get('frontera')?.reset('');
          this.cargando = true;
        }),
        delay(300)
      )
      .subscribe({
        next: (paises) => {
          this.paises = paises;
          this.cargando = false;
        },
        error: (err) => {
          console.error(err);
        },
      });


        this.miFormulario
          .get('pais')
          ?.valueChanges.pipe(
            switchMap((pais) => this.paisesService.getFronteras(pais)),
            tap((_) => {
              this.miFormulario.get('frontera')?.reset('');
              this.fronteras = [];
              this.cargando = true;
            }),
            delay(300)
          )
          .subscribe({
            next: (response) => {
              if (response !== null && response[0].borders) {
                response[0].borders.forEach((value) => {
                  this.paisesService
                    .getPaisCodigoSmall(value)
                    .subscribe((responsePais) => {
                      this.fronteras.push(responsePais);
                      console.log(this.fronteras);
                    });
                });

                this.cargando = false;
                this.noFrontera = false;
              } else {
                this.fronteras = [];
              }

              if (response !== null && !response[0].borders) {
                this.noFrontera = true;
                this.cargando = false;
              }
            },

            error: (err) => console.log(err),
          });

  }

  guardar() {
    if (this.miFormulario.valid) {
      console.log(this.miFormulario.value);
    }
  }
}
