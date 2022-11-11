import { Component, OnInit } from '@angular/core';
//importar espacio.service.ts
import { EspacioService } from 'src/app/service/espacio.service';
import { Espacio } from 'src/app/models/espacio';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './edit-espacio.component.html',
  styleUrls: ['./edit-espacio.component.css']
})
export class EditEspacioComponent implements OnInit {

  id?: number;
  espacio: Espacio = new Espacio();
  constructor(private espacioService: EspacioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.espacioService.getEspacioByID(this.id).subscribe(data => {
      this.espacio = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.espacioService.updateEspacio(this.id, this.espacio).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/business/espacio']);
  }
}