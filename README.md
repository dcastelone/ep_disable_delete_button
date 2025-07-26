# ep_disable_delete_button

Disable and hide the **Delete Pad** button (`#delete-pad`) in Etherpad so that regular users cannot remove pads via the UI.  Pad deletion via the HTTP API (e.g. `deletePad` with an API key) continues to work.

## Features

* Hides the delete button with CSS and disables it with JavaScript.
* Rejects any `PAD_DELETE` messages sent from the browser, protecting against attempts to bypass the UI via the browser console.

## Installation

From the Etherpad root directory run:

```bash
cd etherpad-lite
pnpm run plugins i ep_disable_delete_button
```

Or install via the **/admin/plugins** page.

After installing, restart Etherpad.

## Configuration

No configuration is necessary – once installed the delete button is disabled for all pads.

## Development

* Client-side code lives in `static/js/disable.js`.
* Server-side hook is implemented in `server/hooks.js` using the `handleMessage` hook.

## License

Apache 2.0 – see `LICENSE.md`. 