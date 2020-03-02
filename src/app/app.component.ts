import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  _timeout = 3000;
  _onlineMessage = "You're back online!";
  _onlineBgColor = "green";
  _onlineTextColor = "white";
  _offlineMessage = "You are offline!";
  _offlineBgColor = "red";
  _offlineTextColor = "white";
}
