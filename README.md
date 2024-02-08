# Timesheet ReLabeler

Ever get tired of your timesheet having nonsensical labels?

10 different projects using the same rate cell as a name?

Typos that make you mad?

If these problems feel familiar to you, then give Timesheet Relabeler a whirl.

Take a look at this radical example!

### Before
![Timesheet Before](https://github.com/hardingalexh/timesheet-relabeler/blob/main/marketing/timesheet_before.png?raw=true)
DATA TOOL? I've got a hundred of those!
TASK9DATATOOL2? Where are the spaces? Show some decorum!

### Preferences
![Configuration](https://github.com/hardingalexh/timesheet-relabeler/blob/main/marketing/relabeler_prefs.png?raw=true)
Simply add your mapping for what you'd like the text to say. Not all projects are cool, but if you label them that way, they may be one day.

### After
![Configuration](https://github.com/hardingalexh/timesheet-relabeler/blob/main/marketing/timesheet_after.png?raw=true)
Like magic! Your labels are now provided.

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
