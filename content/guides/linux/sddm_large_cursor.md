# Change SDDM cursor size to the same as the one in KDE Plasma

## TL;DR

Change some settings regarding the SDDM in order for it to create all the necessary files

Open `/etc/sddm.conf.d/kde_settings.conf`

In the `[Theme]` section, add the following line:

```
CursorSize=24
```

Or whatever size you want.

## Explanation

The SDDM login screen uses a different cursor size than the one in KDE Plasma. Sometimes they don't match and it can be annoying.

The SDDM cursor size is set in the `/etc/sddm.conf.d/kde_settings.conf` file. However, this file is not created by default. You have to create it yourself.

I'd recommend just to change some settings in the SDDM settings module in KDE System Settings. This will create all the necessary files.

Now, open the `/etc/sddm.conf.d/kde_settings.conf` file and add the following line in the `[Theme]` section:

```
CursorSize=24
```

You can change the size to whatever you want.
