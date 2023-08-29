# Delete non-existent boot option in BIOS list
## TL;DR

```bash
efibootmgr # to see all boot options and their numbers
sudo efibootmgr -b <number> -B # to delete <number> boot
```

## Explanation

When you install a new OS, it may add a new boot option to the BIOS list. However, if you delete the OS without deleting the boot option, it will still be there. This is not a problem, but it can be annoying to see it in the list.

To delete a boot option, you need to know its number. You can see all boot options and their numbers with `efibootmgr`:

```bash
efibootmgr
```

Then you can delete the boot option with `efibootmgr`:

```bash
sudo efibootmgr -b <number> -B
```

Replace `<number>` with the number of the boot option you want to delete.
