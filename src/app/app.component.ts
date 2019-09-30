import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { RepoEmailSenderService } from './services/repo-email-sender.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    angForm: FormGroup;

    constructor(private fb: FormBuilder, private repoEmailService: RepoEmailSenderService, private http: HttpClient) {
      this.createForm();
    }

    createForm() {
      this.angForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        repository: ['', Validators.required ]
      });
    }

    onSubmit() {
      let body = {
        fromRepo:this.angForm.controls.repository.value,
        fromEmail:this.angForm.controls.email.value
      };
      this.repoEmailService.sendRepoEmail(body);
      alert(JSON.stringify(this.angForm.value))
      this.angForm.reset();
    }
}
