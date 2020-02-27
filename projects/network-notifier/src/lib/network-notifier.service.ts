import { Injectable, OnDestroy } from "@angular/core";
import {
  Observable,
  Subscription,
  fromEvent,
  Subject,
  BehaviorSubject
} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NetworkNotifierService implements OnDestroy {
  onlineEvent: Observable<Event>;
  offlineEvent: Observable<Event>;

  subscriptions: Subscription[] = [];
  isConnected = navigator.onLine;

  connectionStatus: Subject<string> = new BehaviorSubject(
    this.isConnected ? "online" : "offline"
  );

  constructor() {
    /**
     * Get the online/offline status from browser window
     */
    this.onlineEvent = fromEvent(window, "online");
    this.offlineEvent = fromEvent(window, "offline");

    this.subscriptions.push(
      this.onlineEvent.subscribe(e => {
        this.connectionStatus.next("online");
        console.log("online");
      })
    );

    this.subscriptions.push(
      this.offlineEvent.subscribe(e => {
        this.connectionStatus.next("offline");
        console.log("offline");
      })
    );
  }

  ngOnDestroy(): void {
    /**
     * Unsubscribe all subscriptions to avoid memory leak
     */
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
