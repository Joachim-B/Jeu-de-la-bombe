function doClick(id) {

    if(gameFinished == 0) {
        
        let cardClicked = 0;

        for (let verify = 0; verify < alreadyClicked.length; verify++) {
            if (id == alreadyClicked[verify]) {
                cardClicked = 1;
            }
        }
        if (cardClicked == 0) {
            console.log(id);
            triesLeft = triesLeft - 1;
            alreadyClicked.push(id);
            console.log(alreadyClicked);
            let tries = document.querySelector('#tries');
            tries.innerHTML = 'Cartes restantes : '+triesLeft;
    
            if (bomb == id) {
                tries.innerHTML = '<b>BOUM !!! </b> (Cliquez sur une carte pour recommencer.)'
                document.getElementById(id).style.background = "black";
                gameFinished = 1;
            }
            else {
                document.getElementById(id).style.background = "orange";
                
                if (triesLeft == 0) {
                    tries.innerHTML = 'Bravo vous avez gagné ! (Cliquez sur une carte pour recommencer.)'
                    for (let i = 0; i < alreadyClicked.length;i++) {
                        document.getElementById(alreadyClicked[i]).style.background = "lime";
                    }
                    gameFinished = 1;
                }
            }
        } else {
            cardClicked = 0;
        }

    } else {
        //reset les cartes en rouge
        for(let resetColor = 1;resetColor<document.getElementsByClassName("cards").length+1;resetColor++) {
            document.getElementById('card'+resetColor).style.background = "red";
        }

        bombRow = Math.floor(4*Math.random()+1);
        console.log('BombRow =',bombRow)
        
        bombColumn = Math.floor(4*Math.random());
        console.log('BombColumn =', bombColumn);
        
        bomb = 'card'+(bombRow+bombColumn*4);
        console.log('bomb =',bomb);
        
        triesLeft = 15;
        document.querySelector('#tries').innerHTML = 'Cartes restantes : '+triesLeft;

        alreadyClicked = [];
        gameFinished = 0;
    }
    
}

let bombRow = Math.floor(4*Math.random()+1);
console.log('BombRow =',bombRow)

let bombColumn = Math.floor(4*Math.random());
console.log('BombColumn =', bombColumn);

let bomb = 'card'+(bombRow+bombColumn*4);
console.log('bomb =',bomb);

let triesLeft = 15;

let alreadyClicked = [];

let gameFinished = 0;