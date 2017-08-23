# Backlight

A small gjs script that allows you to change the brightness of your screen. Known to work on Fedora 24 with the standard Gnome desktop on a Lenovo Y510P.

## Dependencies

xbacklight

`sudo dnf install xbacklight`

## Installation

Download the project to a location of your choosing. Copy the .desktop file to your `~/.local/share/applications` directory. Create a symlink to the backlight.js file in a directory that is in your path.

Ex.
`ln -s /path/to/backlight.js ~/bin/backlight`

Enjoy!
