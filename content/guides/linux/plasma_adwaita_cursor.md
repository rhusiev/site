# Remove the adwaita cursor from appearing in some applications
## TL;DR

Change `/usr/share/icons/default/index.theme`:

put `Inherits=breeze_cursors` in the `[Icon Theme]` section.

## Explanation

Some applications for some reason sometimes use the adwaita cursor instead of the system cursor. This can be fixed by changing the default cursor theme to breeze.

Change `/usr/share/icons/default/index.theme`:

put `Inherits=breeze_cursors` in the `[Icon Theme]` section.

Now in those applications the cursor will be the breeze cursor.

However, this still does not work for all cases(from my experience) and does not take into consideration other cursor themes.

I believe you can still do this for other cursor themes, but I haven't tried it.
