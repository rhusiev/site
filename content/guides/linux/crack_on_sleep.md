# Remove a crackling sound on sleep

## TL;DR

```bash
echo "blacklist pcspkr" | sudo tee /etc/modprobe.d/nobeep.conf
```

## Explanation

With some laptops, when you put it to sleep, it makes a crackling, popping, distorted sound.

It can also happen in other situations

Something that can help is to blacklist the `pcspkr` module. Run the following command to do so:

```bash
echo "blacklist pcspkr" | sudo tee /etc/modprobe.d/nobeep.conf
```
