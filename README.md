ASCIIFY
=======
                                        __________________________  ______________
                                        \__    ___/\_   _____/\   \/  /\__    ___/
    Takes text, awesomizes it, returns    |    |    |    __)_  \     /   |    |   
                                          |    |    |        \ /     \   |    |   
                                          |____|   /_______  //___/\  \  |____|   
                                                           \/       \_/           

A hybrid npm module and CLI for turning plain text into ascii art. 
A pure JS figlet tool to make all your banners better.

## Getting started

Install [Node.js](http://nodejs.org/)

Install asciify and gasp:
    
    npm install -g asciify

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


Or use it as a node module:

    asciify('Awesome', function(text){ console.log(text) });
       _____                                                     
      /  _  \  __  _  __  ____    ______  ____    _____    ____  
     /  /_\  \ \ \/ \/ /_/ __ \  /  ___/ /  _ \  /     \ _/ __ \ 
    /    |    \ \     / \  ___/  \___ \ (  <_> )|  Y Y  \\  ___/ 
    \____|__  /  \/\_/   \___  >/____  > \____/ |__|_|  / \___  >
            \/               \/      \/               \/      \/ 


And again with the font option:

    asciify('Fonts?', {font:'3-d'}, function(text){ console.log(text));

     ********                     **            **** 
    /**/////                     /**           **//**
    /**        ******  *******  ******  ******/** /**
    /*******  **////**//**///**///**/  **//// //  ** 
    /**////  /**   /** /**  /**  /**  //*****    **  
    /**      /**   /** /**  /**  /**   /////**  //   
    /**      //******  ***  /**  //**  ******    **  
    //        //////  ///   //    //  //////    //   


## Thanks to

- [figlet-js][] which does the magic
- [optimist][], smoothing the choppy waters of CLI argument parsing.
- [node-tap][], robot friendly test codez, and all the wonders of npm.

[figlet-js]: https://github.com/scottgonzalez/figlet-js
[optimist]: https://github.com/substack/node-optimist
[node-tap]: https://github.com/isaacs/node-tap
