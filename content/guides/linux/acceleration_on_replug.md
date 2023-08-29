# Fix mouse acceleration appearing on replug of a mouse

## TL;DR

Create `/etc/X11/xorg.conf.d/50-mouse-acceleration.conf`

Put the following in it:

```
Section "InputClass"
    Identifier "My Mouse"
    Driver "libinput"
    MatchIsPointer "yes"
    Option "AccelProfile" "flat"
EndSection
```

## Explanation

On some systems, when you unplug and replug a mouse, mouse acceleration is
re-enabled

What can fix this is to create a file in `/etc/X11/xorg.conf.d/`(the name
doesn't matter, but it must end in `.conf`. I chose `50-mouse-acceleration.conf` for clarity)

In this file, put the following:

```
Section "InputClass"
    Identifier "My Mouse"
    Driver "libinput"
    MatchIsPointer "yes"
    Option "AccelProfile" "flat"
EndSection
```
