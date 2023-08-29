# How to enable safe reboot with `reisub`
## TL;DR

```bash
echo "kernel.sysrq = 1" >> /etc/sysctl.d/99-sysctl.conf
```

When the system hangs:
- `alt-sysrq-r` - take control of keyboard back from X
- `alt-sysrq-e` - terminate all processes except init
- `alt-sysrq-i` - kill all processes except init
- `alt-sysrq-s` - sync all mounted filesystems
- `alt-sysrq-u` - remount all mounted filesystems in read-only mode
- `alt-sysrq-b` - reboot

If there is no `sysrq` key, use `alt-printscreen` instead:
- `alt-prtscr-r`
- `alt-prtscr-e`
- `alt-prtscr-i`
- `alt-prtscr-s`
- `alt-prtscr-u`
- `alt-prtscr-b`

## Explanation

When the system freezes completely and no other methods(such as `ctrl-alt-f3` to open tty) work, it can be tempting to force reboot. However it can be not safe, and it's better to try and use the `reisub` method.

`reisub` is a mnemonic for remembering the sequence of keys to press to reboot safely, using OS's methods.

Hold down the `alt` and `sysrq` keys, and while holding them down, type the following keys in order, waiting a few seconds between each key:
- `alt-sysrq-r` - take control of keyboard back from X
- `alt-sysrq-e` - terminate all processes except init
- `alt-sysrq-i` - kill all processes except init
- `alt-sysrq-s` - sync all mounted filesystems
- `alt-sysrq-u` - remount all mounted filesystems in read-only mode
- `alt-sysrq-b` - reboot

If there is no sysrq key, use `alt-printscreen` instead:
- `alt-prtscr-r`
- `alt-prtscr-e`
- `alt-prtscr-i`
- `alt-prtscr-s`
- `alt-prtscr-u`
- `alt-prtscr-b`

On some systems this may not work, so use the command below to enable it for the future:
```bash
echo "kernel.sysrq = 1" >> /etc/sysctl.d/99-sysctl.conf
```

Sometimes just the `rei` part is enough to just kill all processes without rebooting
