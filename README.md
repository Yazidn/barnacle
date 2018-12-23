# Barnacle
A simple application that tracks your shows.

## Screenshot
![alt text](https://i.imgur.com/zQESxaU.png)
## User Interface
The four buttons at the top of the page are everything you'll be using, Creating or adding a show, Deleting shows, Backing up your shows list, Restoring a previously backed up shows list.

### Adding a new show
You're presented with a textbox in the bottom of the screen, a "selected" statement that says None until you start searching, and a few other buttons, One is to actually add the selected show, one is for previewing and getting more information about the selected show, and one closes the add panel. Once you start searching, it automatically autocompletes your searches and you're ready to click add.

## Technical details
It uses localStorage to store its data, It doesn't have a backend server or a database, The data is saved in the browser session, Although you can always backup your data as a json file and restore it whenever you want. It uses the OMDB API to get the data, and the posters, and that too is how it autocompletes the searches.

## Developers
It is written in **React.js**
