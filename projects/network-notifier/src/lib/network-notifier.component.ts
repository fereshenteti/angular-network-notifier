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
  textColor = "white";
  bgColor = "#61c688";

  @Input("timeout") _timeout: number;
  @Input("onlineMessage") _onlineMessage: string;
  @Input("onlineBgColor") _onlineBgColor: string;
  @Input("onlineTextColor") _onlineTextColor: string;
  @Input("offlineMessage") _offlineMessage: string;
  @Input("offlineBgColor") _offlineBgColor: string;
  @Input("offlineTextColor") _offlineTextColor: string;

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
    if (!this._onlineBgColor) this._onlineBgColor = "#61c688";
    if (!this._onlineTextColor) this._onlineTextColor = "white";
    if (!this._offlineMessage) this._offlineMessage = "You are offline!";
    if (!this._offlineBgColor) this._offlineBgColor = "#ea3d0d";
    if (!this._offlineTextColor) this._offlineTextColor = "white";
    if (!this._timeout) this._timeout = 3000;
  }

  handleNetworkSwitch(status) {
    this.toggleBadge = "show_top_badge";
    this.previous_state = status;
    this.connectionStatus = status;
    if (status === "online") {
      this.connectionMessage = this._onlineMessage;
      this.bgColor = this._onlineBgColor;
      this.textColor = this._onlineTextColor;
    } else if (status === "offline") {
      this.connectionMessage = this._offlineMessage;
      this.bgColor = this._offlineBgColor;
      this.textColor = this._offlineTextColor;
    }
  }

  dismissTopBadge() {
    this.toggleBadge = "hide_top_badge";
  }

  ngOnDestroy() {
    this.connectionSubscribtion.unsubscribe();
  }
}
