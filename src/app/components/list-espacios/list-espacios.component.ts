import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { EspacioService } from 'src/app/service/espacio.service';
import { Espacio } from '../../models/espacio';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-espacios.component.html',
  styleUrls: ['./list-espacios.component.css'],
})
export class ListEspaciosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'estacionamiento', 'piso', 'numero', 'estado','actions'];
  dataSource = new MatTableDataSource<Espacio>();

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  constructor(private espacioService:EspacioService,
    private snackBar:MatSnackBar) {}

  ngOnInit(): void {
    this.getEspacio();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEspacio() {
    this.espacioService.getEspacios().subscribe((data: Espacio[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
  }


  deleteEspacio(id:number){
    this.espacioService.deleteEspacio(id).subscribe(()=>{
      this.dataSource.data=this.dataSource.data.filter((e:Espacio)=>{
        this.snackBar.open("Empleado eliminado",'',{
          duration:3000,
        })
        return e.id!=id?e:false
      })
    })
  }
}
