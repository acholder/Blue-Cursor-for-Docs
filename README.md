# Blue Cursor for Docs

A Chrome extension that changes Google Docs' cursor color from black to Google blue.

Orginally created to combat the issue with the cursor not being visible when `chrome://flags/?#enable-force-dark` was enabled. 
However, it appears that Google has resolved this by no longer dark-theming the actual document.

Either way, if you want a Google blue cursor for Docs, here it is!

This extension uses the JavaScript MutationObserver interface to monitor the cursor's element, updating it's color the moment a change is detected.

Compatibility:

* Chrome OS
* Windows
* macOS

NOTE:
* Requires "Developer Mode" to be enabled.

Installation:

1. Unzip "Blue-Cursor-for-Docs-main.zip" to it's own folder.
2. Navigate to `chrome://extensions`
3. On the upper right, toggle on the "Developer Mode" switch (if not already enabled).
4. A new menu will appear. Click the "Load unpacked" option found on the upper left.
5. Browse to the location of the extension's folder and select it.

