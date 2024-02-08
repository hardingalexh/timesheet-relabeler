# Timesheet ReLabeler

Ever get tired of your timesheet having nonsensical labels?

10 different projects using the same rate cell as a name?

Typos that make you mad?

If these problems feel familiar to you, then give Timesheet Relabeler a whirl.

## Installation
While this has been submitted for review as an actual chrome/firefox extension, it is installable NOW! Download this repository and install it:

### Chrome
See the documentation for [installing an unpacked extension](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked) here.

### Arc
The instructions are similar to the Chrome instructions. Open the `Manage Extensions` page, turn on the `Developer Mode` toggle in the upper right, and a `Load unpacked` button should appear near the top to load the extension. 

### Firefox
Using unsigned extensions requires [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/).


* Type `about:config` into your menu bar. 
* Search for `xpinstall.signatures.required` and set it to `false`.
    * This allows you to install unsigned extensions. Please don't otherwise do that.
* In the Firefox extensions screen, click the settings cog and navigate to "Install Add-On From File"
* Choose the `timesheet-relabeler-firefox.xpi` included in this repository

Once installed, select the "manage extension" menu option, and under "permissions" allow data access.

## Usage
Right-click the ReLabeler Icon which looks like this:

![ReLabeler Icon](https://github.com/hardingalexh/timesheet-relabeler/blob/main/images/label-128.png?raw=true)

Depending on your browser, this will bring up an options screen or have you "manage extension" to see its preferences. In the left-hand column, put charge codes. In the right-hand column, put labels.

And next time you go to your timesheet... VOILA! You'll see some labels, if it works.
