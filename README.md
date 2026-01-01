## Threads in-app browser scroll close fix

When opening a website inside the Threads in-app browser,
scrolling at the very top can trigger the app's close gesture.

This hook prevents `scrollY` from staying at `0`
by keeping the page slightly offset (1px),
which blocks the unintended close behavior.

Designed for React apps.
