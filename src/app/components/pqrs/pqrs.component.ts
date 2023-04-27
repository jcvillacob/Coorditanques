import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.css']
})
export class PqrsComponent implements OnInit {

  routeSubscription: Subscription;
  pqrsForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.routeSubscription = new Subscription();
    this.pqrsForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      companyName: ['', Validators.required],
      nit: ['', Validators.required],
      pqrsType: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.url.subscribe(url => {
      if (url[0].path === 'pqrs') {
        this.addBodyClass();
      } else {
        this.removeBodyClass();
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  onSubmit(): void {
    if (this.pqrsForm.valid) {
      console.log(this.pqrsForm.value);
      alert('PQRS Enviado');
      this.pqrsForm.reset();
    } else {
      alert('Por favor, completa el formulario correctamente.');
    }
  }

  addBodyClass() {
    const container = document.querySelector('.pqrs-container');
    if (container) {
      container.classList.add('pqrs-background');
    }
  }
  
  removeBodyClass() {
    const container = document.querySelector('.pqrs-container');
    if (container) {
      container.classList.remove('pqrs-background');
    }
  }
  
}