function drawhome() {

    //load the screen
    image(screen, 1, 128);

    //load the creature
    
    
    //load top buttons
    image(button1, 1, 0);
    image(button2, 121, 0);
    image(button3, 241, 0);
    image(button4, 361, 0);
    image(dot, (currentselect*120)+51, 120);
    if (currentselect == 0 && validselect == true) {
        image(button1pressed, 1, 0);
        validselect = false;
    }
    else if (currentselect == 1 && validselect == true) {
        image(button2pressed, 121, 0);
        validselect = false;
    }
    else if (currentselect == 2 && validselect == true) {
        image(button3pressed, 241, 0);
        validselect = false;
    }
    else if (currentselect == 3 && validselect == true) {
        image(button4pressed, 361, 0);
        validselect = false;
    }
    else {
        image(eggidle,  1, 128);
    }

    if (mySpawn.getill() == true) {
        image(ill,354,146);
    }


    //load the controls
    image(leftarrow, 31, 448);
    image(go, 190, 448);
    image(rightarrow, 349, 448);
    for (var i = 0; i < mySpawn.getpoo(); i++) {
        image(poo, 90 * i + 20, 330);
    }
}

function drawhelp() {
    image(help, 1, 128);
}

function drawhelpv() {
    image(helpverbose, 0, 0, 480,640);
}

function drawglobal() {
    //load the bottom control brackets
    image(squarebrace, 31 , 448);
    image(squarebrace, 190 , 448);
    image(squarebrace, 349 , 448);

    //load the bottom keys
    //u
    if (ukey == true) {
        image(upressed, 2, 520);
    }
    else {
        image(u, 2, 520);
    }
    //i
    if (ikey == true) {
        image(ipressed, 160, 520);
    }
    else {
        image(i, 160, 520);
    }
    //o
    if (okey == true) {
        image(opressed, 318, 520);
    }
    else {
        image(o, 318, 520);
    }
    //space
    image(spacemenu, 1, 600);
    if (skey == true) {
        image(screen, 2, 440, 432, 190);
        image(hungrymtr, 28, 460, 380);
        fill(0,0,0);
        rect(283, 467, 117*(mySpawn.gethungry()/100), 49);
        
        image(happymtr, 28, 528, 380);
        fill(0,0,0);
        rect(283, 535, 117*(mySpawn.gethappy()/100), 49);
        
        image(smpressed, 0, 600);
    }
    if (mySpawn.gettype() == "dead") {
        mode = "help";
        image(dead, 1, 128);
        deadsound.play();
        image(thiswillcrashthegamehaha);
        
    }
}
  
function keyPressed() {
    if (key === 'u') {
        typedown.play();
        ukey = true;
    }
    if (key === 'i') {
        typedown.play();
        ikey = true;
    }
    if (key === 'o') {
        typedown.play();
        okey = true;
    }
    if (key === ' ') {
        typedown.play();
        menuup.play();
        skey = true;
    }
}

function keyReleased() {
        if (key === 'u') {
            typeup.play();
            ukey = false;
            if (mode == "home") {
                currentselect -= 1;
                if (currentselect < 0) {
                    currentselect = 3;
                }
            }
        }
        if (key === 'i') {
            typeup.play();
            ikey = false;
            if (okey == false && ukey == false) {
                if (mode == "home") {
                    if (currentselect == 0) {
                        validselect = true;
                        mySpawn.eat();
                        eat.play();
                    }
                    if (currentselect == 1) {
                        validselect = true;
                        mySpawn.cure();
                    }
                    if (currentselect == 2) {
                        validselect = true;
                        mySpawn.fun();
                        game.play();
                    }
                    if (currentselect == 3) {
                        validselect = true;
                        mySpawn.clean();
                    }
                }
            }
        }
        if (key === 'o') {
            typeup.play();
            okey = false;
            if (mode == "home") {
                currentselect += 1;
                if (currentselect > 3) {
                    currentselect = 0;
                }
            }
        }
        if (key === ' ') {
            typeup.play();
            menudown.play();
            skey = false;
        }
}