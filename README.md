Hangout
=======

Google Hangout Launcher - Applescript wrapper for Node.js script to initialize and launch a new Google Hangout session

Assumptions/Prerequisites:

* You must have nodejs installed. This is available directly or via homebrew. Node must exist at, or be linked from, /usr/local/bin/node. If your node executable is in a different location, either make a symlink, or modify openhangout.sh to match. Simply having node on the path does not work when calling the shell script from Applescript, sorry.

* You must have phantomjs installed. This is available directly or via homebrew.

* You must be running a Mac (Applescript should be a dead giveaway). If you are not running a mac, the openhangout.sh script may still work, though the commands for opening the url and copying to the clipboard may be different.

There are three methods to run:

1. Run the executable application (compiled applescript app) "openhangout.app".

2. Open the applescript ("openhangout.scpt") and run it, either directly through script editor, or through any other tool that can launch applescripts.

3. Open terminal and run the "openhangout.sh" shell script directly.

Upon running, the app will launch a new hangout into your default browser. It will also copy the url of that hangout into the clipboard for easy pasting into your favorite IM client.

Tip: I use the third party tool "BetterTouchTool" (free) to bind the applescript to a keyboard action so I can more easily launch it from the keyboard.