import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl} from '@angular/forms';
import { RepoEmailSenderService } from './services/repo-email-sender.service';
import { HttpClient } from '@angular/common/http';
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    angForm: FormGroup;
    public id: Guid;

    constructor(private fb: FormBuilder, private repoEmailService: RepoEmailSenderService, private http: HttpClient) {
      this.createForm();
    }

    createForm() {
      this.angForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        repository: ['', Validators.required ],
        addonName: ['', Validators.required ],
        buildId: new FormControl(Guid.create().toString()),
        addonId: new FormControl(Guid.create().toString()),
        partnerId: new FormControl(Guid.create().toString())
      });
    }

    onSubmit(buttonType) {
      let body = {
        fromRepo:this.angForm.controls.repository.value,
        fromEmail:this.angForm.controls.email.value,
        fromAddonName:this.angForm.controls.addonName.value,
        fromAddonId:this.angForm.controls.addonId.value,
        fromPartnerId:this.angForm.controls.partnerId.value,
        fromBuildId:this.angForm.controls.buildId.value
      };

      if (buttonType === "Register")
        this.repoEmailService.clientRequest(body);
      
      if (buttonType === "Update")
        this.repoEmailService.clientRequest(body);

      if (buttonType === "Download")
      this.repoEmailService.downloadArtifact(body);

      alert(JSON.stringify(this.angForm.value))
      this.angForm.reset();
    }
}
