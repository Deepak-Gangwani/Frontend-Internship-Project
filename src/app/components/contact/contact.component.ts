import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  name = new FormControl("", [
    Validators.required
  ]);

  email = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  phone = new FormControl("", [
    Validators.required,
    Validators.pattern('^[0-9]+$'),
    Validators.minLength(10),
    Validators.maxLength(10)
  ]);

  message = new FormControl("", [
    Validators.required
  ]);

  contactForm = new FormGroup({
    name: this.name,
    email: this.email,
    phone: this.phone,
    message: this.message
  });

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Form is valid, submit data
      console.log(this.contactForm.value);
      this.contactForm.reset();
      // You can now send the form data to your backend server or perform any other action
    } else {
      // Form is invalid, mark all fields as touched to display validation errors
      this.contactForm.markAllAsTouched();
    }
  }

}
