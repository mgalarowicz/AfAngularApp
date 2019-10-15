import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class RepoEmailSenderService {

  constructor() { }

  clientRequest(data: any): void {
    $.ajax({
      type: "POST",
      url: environment.tracking.clientRequest,
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

  downloadArtifact(data: any): void {
    $.ajax({
      type: "POST",
      url: environment.tracking.downloadArt,
      data: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'},
      success: function (respData) {
          // Construct the <a> element
          var link = document.createElement("a");
          link.download = "AddonTest.zip";
          // Construct the uri
          var uri = 'data:application/zip;charset=utf-8;base64,' + respData
          link.href = uri;
          document.body.appendChild(link);
          link.click();
          // Cleanup the DOM
          document.body.removeChild(link);
      },
      error: function (jqXHR) {
        $("#contactFormStatus").html("An error occurred: " + jqXHR.responseText).css({ 'color': 'red', 'font-size': '110%' });;
        $("#target :input").prop("disabled", false);
      }
    });
  }

  // downloadArtifactGet(data: any): void {
  //   $.ajax({
  //     type: "GET",
  //     url: environment.tracking.downloadArt + "?fromBuild=" + data.fromBuild + "&fromAddon=" + data.fromAddon,
  //     //data: JSON.stringify(data),
  //     //headers: {'Content-Type': 'application/json'},
  //     success: function (respData) {
  //       debugger;
  //         $("#contactFormStatus").html(respData).css({ 'color': 'green', 'font-size': '100%' });;
  //         $("#target :input").prop("disabled", true);
  //     },
  //     error: function (jqXHR) {
  //       $("#contactFormStatus").html("An error occurred: " + jqXHR.responseText).css({ 'color': 'red', 'font-size': '110%' });;
  //       $("#target :input").prop("disabled", false);
  //     }
  //   });
  // }

  // updateRepoEmail(data: any): void {
  //   $.ajax({
  //     type: "PUT",
  //     url: environment.tracking.UpdateRepository,
  //     data: JSON.stringify(data),
  //     headers: {'Content-Type': 'application/json'},
  //     success: function (respData) {
  //         $("#contactFormStatus").html(respData).css({ 'color': 'green', 'font-size': '100%' });;
  //         $("#target :input").prop("disabled", true);
  //     },
  //     error: function (jqXHR) {
  //       $("#contactFormStatus").html("An error occurred: " + jqXHR.responseText).css({ 'color': 'red', 'font-size': '110%' });;
  //       $("#target :input").prop("disabled", false);
  //     }
  //   });
  // }
}
