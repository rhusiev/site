# Change the numerosign(№) to hash(#)

**Works both for X11 and Wayland**

## TL;DR

In /usr/share/X11/xkb/symbols/<your_language> change the `numerosign` to `numbersign`

It will work even for Wayland, even though it's in the X11 folder.

## Explanation

The numerosign(№) is a symbol that is used in some languages, for example some slavic languages, and it is not used in others, for example English.

You may want to change your Shift+3 to type "#", if you don't usually use the "№".

It is especially useful if you use markdown a lot.

To change it, you need to edit the file `/usr/share/X11/xkb/symbols/<your_language>`.

For example, for Ukrainian, you would edit `/usr/share/X11/xkb/symbols/ua`.

Now change all the `numerosign` to `numbersign`.

Restart the session and now Shift+3 will type "#".
