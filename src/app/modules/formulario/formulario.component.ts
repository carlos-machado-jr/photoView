import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseService } from '../../core/services/firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { Router } from '@angular/router';


export class Fotos{
  nomeFoto: string;
  urlFoto: string;
  descricao: string;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formGroup: FormGroup;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private db: FirebaseService,
    private dialog: MatDialog,
    private router: Router
  ) {

   }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar

    if(this.formGroup.valid){
      this.db.createFoto(this.formGroup.value);
      this.success = true
      setTimeout(x => {
            this.closed();

            this.router.navigate(['/fotos']);
      }, 1000)
    }

  }

  closed(){
    this.success = false
  }

  createForm(){
    this.formGroup = this.formBuilder.group({
      nomeFoto: [null, [Validators.required,Validators.minLength(3)]],
      urlFoto: [null, [Validators.required, Validators.minLength(3)]],
      descricao: [null],
      autor: [null, [Validators.required, Validators.minLength(3)]],
    })
  }

  getErrorMessage(){

  }

}
