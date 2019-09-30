import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class RepoEmailSenderService {

  constructor() { }

  sendRepoEmail(data: any): void {
    $.ajax({
      type: "POST",
      url: environment.tracking.sendRepoAndEmail,
      data: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'},
      success: function (respData) {
          $("#contactFormStatus").html(respData).css({ 'color': 'green', 'font-size': '100%' });;
          $("#target :input").prop("disabled", true);
      },
      error: function (jqXHR) {
        $("#contactFormStatus").html("An error occurred: " + jqXHR.responseText).css({ 'color': 'red', 'font-size': '110%' });;
        $("#target :input").prop("disabled", false);
      }
    });
  }
}
