import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-teste-forms',
  templateUrl: './teste-forms.page.html',
  styleUrls: ['./teste-forms.page.scss'],
})
export class TesteFormsPage implements OnInit {
  public cadastro: FormGroup;
  constructor(private fConstrutor: FormBuilder) { 
    this.cadastro = this.fConstrutor.group({
      'nome': ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ])],
      'diretor': ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      'senha': ['',  Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],
      'data': ['', Validators.compose([
        Validators.min(1980-12-31)
      ])]
 
    });
 
  }

  ngOnInit() {
  }
  public formulario = [
    { artista: 'Leonardo DiCaprio', isChecked: true },
    { artista: 'Lady Gaga', isChecked: false },
    { artista: 'Keanu Reeves', isChecked: true },
    { artista: 'Bruce Willis', isChecked: false },
    { artista: 'Emma Watson', isChecked: false },
    { artista: 'Galinha pintadinha', isChecked: true }
  ];
  enviarCadastro(){
    console.log(this.cadastro.value);
  }
 
}
