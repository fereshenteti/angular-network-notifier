import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { NetworkNotifierService } from "../lib/network-notifier.service";
import { Subscription } from "rxjs";

@Component({
  selector: "fh-network-notifier",
  templateUrl: "./network-notifier.component.html",
  styleUrls: ["./network-notifier.scss"]
})
export class NetworkNotifierComponent implements OnInit, OnDestroy {
  connectionStatus: string;
  connectionMessage: string;
  connectionSubscribtion: Subscription;
  toggleBadge;
  previous_state;

  @Input("_timeout") _timeout: number;
  @Input("_onlineMessage") _onlineMessage: string;
  @Input("_offlineMessage") _offlineMessage: string;

  constructor(private nn: NetworkNotifierService) {}

  ngOnInit() {
    this.checkDefaultValues();

    this.previous_state = this.nn.isConnected ? "online" : "offline";
    this.connectionSubscribtion = this.nn.connectionStatus.subscribe(status => {
      if (this.previous_state !== status) {
        if (this.toggleBadge === "show_top_badge") {
          this.toggleBadge = "hide_top_badge";
          setTimeout(() => {
            this.handleNetworkSwitch(status);
          }, 200);
        } else {
          this.handleNetworkSwitch(status);
        }
        if (this._timeout && this._timeout > 0) {
          setTimeout(() => {
            this.toggleBadge = "hide_top_badge";
          }, this._timeout);
        }
      }
    });
  }

  checkDefaultValues() {
    if (!this._onlineMessage) this._onlineMessage = "You're back online!";
    if (!this._offlineMessage) this._offlineMessage = "You are offline!";
    if (!this._timeout) this._timeout = 3000;
  }

  handleNetworkSwitch(status) {
    this.toggleBadge = "show_top_badge";
    this.previous_state = status;
    this.connectionStatus = status;
    this.connectionMessage =
      status === "online" ? this._onlineMessage : this._offlineMessage;
    console.log("connectionMessage:", this.connectionMessage);
  }

  dismissTopBadge() {
    this.toggleBadge = "hide_top_badge";
  }

  ngOnDestroy() {
    this.connectionSubscribtion.unsubscribe();
  }
}
