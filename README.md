ASCIIFY
=======

                                      __________________________  ______________
                                      \__    ___/\_   _____/\   \/  /\__    ___/
  Takes text, awesomizes it, returns    |    |    |    __)_  \     /   |    |   
                                        |    |    |        \ /     \   |    |   
                                        |____|   /_______  //___/\  \  |____|   
                                                         \/       \_/           


An hybrid npm module and CLI for turning plain-text into ascii-art.

A thin wrapper around the most excellent [figlet-js][], as it's not yet available in npm.

## Getting started

Install [Node.js](http://nodejs.org/)

Install asciify:

    cd /your/project/directory
    npm install -g asciify


## Examples

    asciify('Awesome', function(text){ console.log(text) });
       _____                                                     
      /  _  \  __  _  __  ____    ______  ____    _____    ____  
     /  /_\  \ \ \/ \/ /_/ __ \  /  ___/ /  _ \  /     \ _/ __ \ 
    /    |    \ \     / \  ___/  \___ \ (  <_> )|  Y Y  \\  ___/ 
    \____|__  /  \/\_/   \___  >/____  > \____/ |__|_|  / \___  >
            \/               \/      \/               \/      \/ 


    asciify('Fonts?', {font:'3-d'}, function(text){ console.log(text));

     ********                     **            **** 
    /**/////                     /**           **//**
    /**        ******  *******  ******  ******/** /**
    /*******  **////**//**///**///**/  **//// //  ** 
    /**////  /**   /** /**  /**  /**  //*****    **  
    /**      /**   /** /**  /**  /**   /////**  //   
    /**      //******  ***  /**  //**  ******    **  
    //        //////  ///   //    //  //////    //   


Or from the CLI:

    asciify "Boom" -f larry3d
     ____                                   
    /\  _`\                                 
    \ \ \L\ \    ___     ___     ___ ___    
     \ \  _ <'  / __`\  / __`\ /' __` __`\  
      \ \ \L\ \/\ \L\ \/\ \L\ \/\ \/\ \/\ \ 
       \ \____/\ \____/\ \____/\ \_\ \_\ \_\
        \/___/  \/___/  \/___/  \/_/\/_/\/_/
                                        

For a really good time call:

    asciify -a "All The Fonts!"
                                        

## TODO                                        

    asciify('Multi\nLine\nText')

    asciify(['All', 'The', 'Strings'])


[figlet-js]:https://github.com/scottgonzalez/figlet-js
