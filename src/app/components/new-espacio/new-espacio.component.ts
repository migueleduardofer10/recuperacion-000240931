import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Venta } from 'src/app/models/espacio';
import { EspacioService } from 'src/app/service/espacio.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './new-espacio.component.html',
  styleUrls: ['./new-espacio.component.css']
})
export class NewEspacioComponent implements OnInit {

  myForm!:FormGroup;
  color = "accent";
  

  constructor(
    private fb:FormBuilder,
    private espacioService: EspacioService,
    private router:Router,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      numero:[''],
      producto:[''],
      cantidad:[''],
      precio:[''],
    
    })
  }

  saveEspacio(){
    
    const venta: Venta={
      numero: this.myForm.get('numero')?.value,
      producto:this.myForm.get('producto')?.value,
      cantidad: this.myForm.get('cantidad')?.value,
      precio: this.myForm.get('precio')?.value, 
      //Lllamar a la funcion total y pasarle el precio y la cantidad
      total: this.total(this.myForm.get('cantidad')?.value,this.myForm.get('precio')?.value)
    };

    this.espacioService.addVenta(venta)
        .subscribe({
          next: (data)=>{
            this.snackBar.open("Registro OK",'',{
              duration:3000,
            })
            this.router.navigate(['/business/espacio']);
          },
          error:(err)=>{
            console.log(err);
          }
        })
  }

  //Implementar la funcion total para devolver la cantidad * producto 
  total(cantidad:number,precio:number){
    return cantidad*precio;
  
  }
  }

