#!/usr/bin/gjs
var Gtk = imports.gi.Gtk;
var Gst = imports.gi.Gst;
var GLib = imports.gi.GLib;

const XbacklightPath = '/usr/bin/xbacklight'

//const Mainloop = imports.mainloop;

Gtk.init(null, 0);
Gst.init(null, 0);

var backlightwindow = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL, border_width: 75});
backlightwindow.title = "Backlight";
backlightwindow.connect("destroy", function(){Gtk.main_quit()});

var backlight_box = new Gtk.ButtonBox ({orientation: Gtk.Orientation.VERTICAL, spacing: 8});

var oneHundred = new Gtk.Button({label: "100%"});
var seventyFive = new Gtk.Button({label: "75%"});
var fifty = new Gtk.Button({label: "50%"});
var twentyFive = new Gtk.Button({label: "25%"});
var ten = new Gtk.Button({label: "10%"});
var one = new Gtk.Button({label: "1%"});

function adjustLevel(level) {
    GLib.spawn_command_line_async(XbacklightPath + ' -set ' + level)
}

oneHundred.connect("clicked", function() {
  adjustLevel('100');
});
seventyFive.connect("clicked", function() {
  adjustLevel('75');
});
fifty.connect("clicked", function() {
  adjustLevel('50');
});
twentyFive.connect("clicked", function() {
  adjustLevel('25');
});
ten.connect("clicked", function(){
  adjustLevel('10');
});
one.connect("clicked", function(){
  adjustLevel('1');
});

backlight_box.add(oneHundred);
backlight_box.add(seventyFive);
backlight_box.add(fifty);
backlight_box.add(twentyFive);
backlight_box.add(ten);
backlight_box.add(one);

backlightwindow.add(backlight_box);

backlight_box.show_all();
backlightwindow.show();
Gtk.main();