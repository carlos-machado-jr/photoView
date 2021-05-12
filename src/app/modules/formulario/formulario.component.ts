import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


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


  constructor(
              private formBuilder: FormBuilder) {

   }

  ngOnInit(): void {
    this.createForm()
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formGroup);
  }

  createForm(){
    this.formGroup = this.formBuilder.group({
      nomeFoto: ['', [Validators.required,Validators.minLength(3)]],
      urlFoto: ['', [Validators.required, Validators.minLength(3)]],
      descricao: []
    })
  }

  getErrorMessage(){

  }

}
