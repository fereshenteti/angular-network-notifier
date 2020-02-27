import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NetworkNotifierModule } from "projects/network-notifier/src/public-api";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NetworkNotifierModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
