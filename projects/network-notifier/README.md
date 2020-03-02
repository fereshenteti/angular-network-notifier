# Angular 8 Network Connection Notifier by Feres Henteti

Network Notifier is a simple light-weight library that notifies you whether when the network connection has been lost or re-established.

## Installation

Run `npm install network-notifier` to install this library.

## Usage

To use this library, just import its module into your app.module.ts

```typescript
import { NetworkNotifierModule } from "network-notifier";
```

and add it to your imports in the @NgModule annotation

```typescript
@NgModule({
    ...
    imports: [..., NetworkNotifierModule],
    ...
})
```

and then place

```html
<fh-network-notifier></fh-network-notifier>
```

wherever you want into your template, preferably in the root template of your project.

## Test it!

To test if the library works fine, open the Chrome Debugger Console so you can simulate connection states (on, off, slow 3G, ...).
Open Chrome Debugger Console (click on F12, or right click -> inspect element), go to 'Network' section, and you can find a network status switcher on the top.

## Customize the notification popup!

For the moment, you can customize the following attributes:

```html
<fh-network-notifier
  [_timeout]="timeout"
  [onlineMessage]="onlineMessage"
  [onlineBgColor]="onlineBgColor"
  [onlineTextColor]="onlineTextColor"
  [offlineMessage]="offlineMessage"
  [offlineBgColor]="offlineBgColor"
  [offlineTextColor]="offlineTextColor"
>
</fh-network-notifier>
```

### Attributes

| Attribute        | Default value       | Type   | Meaning                                                                                                                                                      |
| ---------------- | ------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| timeout          | 3000                | number | The popup will last 3 seconds by default. You can pass the duration you want, or pass 0 if you want to dismiss it only by after clicking the dismiss button. |
| onlineMessage    | You're back online! | string | The message that will appear when the app regains access to the network.                                                                                     |
| onlineBgColor    | #61c688             | string | The background color of the online popup.                                                                                                                    |
| onlineTextColor  | white               | string | The text color of the online popup.                                                                                                                          |
| offlineMessage   | You are offline!    | string | The message that will appear when the app loses network connection.                                                                                          |
| offlineBgColor   | #ea3d0d             | string | The background color of the offline popup.                                                                                                                   |
| offlineTextColor | white               | string | The text color of the offline popup.                                                                                                                         |

> Note: Further customizations and popup types will be available soon. Your suggestions are welcome :D

### Need help?

If you need further help, support, or have any other suggestions, please contact me at `fereshenteti@gmail.com`.

### Enjoy :D
