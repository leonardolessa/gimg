# GIMG

A image placeholder service to provide images to templates, similar to Placeimg that is shutting down, placehold.it and other services. 

## Dependencies

GIMG is a Node.js app running on top of [Hapi.js](http://hapijs.com), using [Graphics Magick](http://aheckmann.github.io/gm/) to manipulate the images.

##Installing

Well, after cloning the repository, you should run `npm install` and you are ready to go, running `node app.js` or nodemon if you prefer.

###Graphics Magick installation

You have to install Graphics Magick on your computer so he can do his magic, not only the Node.js module. 

Personally, for a Debian based distro, I've added a repository, running the following lines should be enough:

    sudo add-apt-repository ppa:dhor/myway
    sudo apt-get update
    sudo apt-get install graphicsmagick
  
  
  
But, for another distro or another OS you can access [Graphics Magick official website](http://www.graphicsmagick.org/) to get install instructions.

That's it.
