
    var oppo = new Array();
    var myPokemons = new Array();
    var hero = new Array();
    var oppohero = new Array();

    function saveToLS(myPokemons) {

        localStorage.setItem("pokemon0", JSON.stringify(myPokemons[0]));
        localStorage.setItem("pokemon1", JSON.stringify(myPokemons[1]));
        localStorage.setItem("pokemon2", JSON.stringify(myPokemons[2]));
        
    }


    function checkLS() {
        if (window.localStorage.length != 0) {
            document.getElementById('lsgame').innerHTML = "<img class='starticon zoom' onclick=fightwithyourpokemon() src=img/fightwithyour.png />"
        }

    }

    function fightwithyourpokemon() {

        var Data = localStorage.getItem("pokemon0");
        myPokemons[0] = JSON.parse(Data);
        var Data = localStorage.getItem("pokemon1");
        myPokemons[1] = JSON.parse(Data);
        var Data = localStorage.getItem("pokemon2");
        myPokemons[2] = JSON.parse(Data);

        document.getElementById('start').style.display = "none";


        for (var i = 0; i < 3; i++) {

            d = randomNumber(0, 7);
            e = randomNumber(0, 9);
            f = randomNumber(0, 9);
            srcoppo = "<img src=img/images/" + d + e + f + ".png  />";
            opppid = (d * 100 + e * 10 + f * 1) - 1;
            srcop = "<img class='blackimg' src=img/images/" + d + e + f + ".png   />"
            oppo[i] = ["" + srcoppo, "" + arr[opppid].name.english, "" + arr[opppid].base.HP,
            "" + arr[opppid].base.Attack, "" + arr[opppid].base.Defense, "" + arr[opppid].base.HP, "" + srcop, "" + arr[opppid].type];
        }

        fightScreen();
    }



    function removeImages() { // מעלים את התמונות של המסך פתיחה
        document.getElementById('start').style.display = "none";
        randomScreen();
    }

    function randomScreen() {
        document.getElementById('randomScreen').style.display = "block";

    }

    function fightScreen() { // מעלים את המסך של הרנדום
        initHero(0);
        document.getElementById('randomScreen').style.display = "none";
        fightScreenDisplay();
        saveToLS(myPokemons);
        document.getElementById("me0").style.pointerEvents = "none";
        document.getElementById("me1").style.pointerEvents = "none";
        document.getElementById("me2").style.pointerEvents = "none";

    }

    function fightScreenDisplay() {
        document.getElementById('fight').style.display = "block";
        battle.play();
        document.getElementById("heroImage").innerHTML = hero[0];
        document.getElementById("oppoImage").innerHTML = oppohero[0];
        document.getElementById("heroHp").max = hero[5];
        document.getElementById("oppoHp").max = oppohero[5];
        document.getElementById("heroHp").value = hero[2];
        document.getElementById("oppoHp").value = oppohero[2];
        document.getElementById("oppoHpDisplay").innerHTML = "" + oppohero[2] + "/" + oppohero[2];
        document.getElementById("oppoNameDisplay").innerHTML = oppohero[1];
        document.getElementById("heroHpDisplay").innerHTML = "" + hero[2] + "/" + hero[2];
        document.getElementById("heroNameDisplay").innerHTML = "" + hero[1];


        for (var i = 0; i < 3; i++) {
            document.getElementById("myOppoImage" + i).innerHTML = oppo[i][0];
            document.getElementById("myPokemonImage" + i).innerHTML = myPokemons[i][0];
        }

    }

    function newGame() {
        swal({
            title: "Are you sure ?",
            icon: "img/question.ico",
            buttons: true,
            dangerMode: true,

        })
            .then((willDelete) => {
                if (willDelete) {
                    location.reload();
                } else {
                    //swal("Your imaginary file is safe!");
                }
            });
    }

    var stop = 1;
    function randompick() {

        document.getElementById("counter").innerHTML = "<img class=tdChooseom src=img/counter" + stop + ".png />"
        stop++;
        if (stop == 4) {
            document.getElementById("randompokaball").innerHTML = "";

        }

        chooseFade1();
        document.getElementById("choose1").innerHTML = "<img class=tdChooseomm src=img/thisis.png onclick=initHero(0)     />";
        fightFade();
        document.getElementById("fightBtn").innerHTML = "<img class='randomImg zoom' src=img/FIGHT.png onclick=fightScreen()  draggable=true ondragstart=drag(event) onmouseover='' style='cursor: pointer;'/>";

        for (var i = 0; i < 3; i++) {
            a = randomNumber(0, 7);
            b = randomNumber(0, 9);
            c = randomNumber(0, 9);

            d = randomNumber(0, 7);
            e = randomNumber(0, 9);
            f = randomNumber(0, 9);


            pokemonid = (a * 100 + b * 10 + c * 1) - 1;
            src = "<img src=img/images/" + a + b + c + ".png  />";
            srcpok = "<img class='blackimg' src=img/images/" + a + b + c + ".png  />"

            myPokemons[i] = ["" + src, "" + arr[pokemonid].name.english, "" + arr[pokemonid].base.HP,
            "" + arr[pokemonid].base.Attack, "" + arr[pokemonid].base.Defense, "" + arr[pokemonid].base.HP, "" + srcpok, "" + arr[pokemonid].type];

            cardcolor(myPokemons[i], i);

            srcoppo = "<img src=img/images/" + d + e + f + ".png  />";
            opppid = (d * 100 + e * 10 + f * 1) - 1;

            srcop = "<img class='blackimg' src=img/images/" + d + e + f + ".png   />"

            oppo[i] = ["" + srcoppo, "" + arr[opppid].name.english, "" + arr[opppid].base.HP,
            "" + arr[opppid].base.Attack, "" + arr[opppid].base.Defense, "" + arr[opppid].base.HP, "" + srcop, "" + arr[opppid].type];

            document.getElementById("image" + i).innerHTML = pokemonImage(myPokemons[i]);
            document.getElementById("name" + i).innerHTML = "Name: " + pokemonName(myPokemons[i]);
            document.getElementById("hp" + i).innerHTML = "HP: " + pokemonHp(myPokemons[i]);
            document.getElementById("attack" + i).innerHTML = "Attack: " + pokemonAttack(myPokemons[i]);
            document.getElementById("defense" + i).innerHTML = "Defense: " + pokemonDefense(myPokemons[i]);

        }

        temp = myPokemons;
    }

    function cardcolor(currentPokemon, i) {
        card = currentPokemon[7];
        switch (card) {
            case "Fire":
                document.getElementById("card" + i).style.backgroundImage = "url('img/cardfire.png')";
                break;

            case "Water":
                document.getElementById("card" + i).style.backgroundImage = "url('img/cardwater.png')";
                break;

            case "Grass":
                document.getElementById("card" + i).style.backgroundImage = "url('img/cardgrass.png')";
                break;

            case "Poison":
                document.getElementById("card" + i).style.backgroundImage = "url('img/cardgrass.png')";
                break;

            case "Psychic":
                document.getElementById("card" + i).style.backgroundImage = "url('img/cardpsychic.png')";
                break;

            case "Rock":
                document.getElementById("card" + i).style.backgroundImage = "url('img/cardpsychic.png')";
                break;

            case "Steel":
                document.getElementById("card" + i).style.backgroundImage = "url('img/cardpsychic.png')";
                break;

            case "Electric":
                document.getElementById("card" + i).style.backgroundImage = "url('img/cardelectric.png')";
                break;

            default:
                document.getElementById("card" + i).style.backgroundImage = "url('img/carddefult.png')";

        }

    }


    //************************************************************************** My pokemon

    function pokemonImage(myPokemons) { // תמונה פוקימון  מחזיר
        image = myPokemons[0];
        return image;
    }

    function pokemonName(myPokemons) { // שם פוקימון  מחזיר
        name = myPokemons[1];
        return name;
    }

    function pokemonHp(myPokemons) { // מחזיר HP
        hp = myPokemons[2];
        return hp;
    }

    function pokemonAttack(myPokemons) { // מתקפה מחזיר
        pokemonattack = myPokemons[3];
        return pokemonattack;
    }

    function pokemonDefense(myPokemons) { // הגנה מחזיר
        defense = myPokemons[4];
        return defense;
    }

    //************************************************************************ oppo pokemon

    function oppoPokemonImage(oppo) { // תמונה פוקימון  מחזיר
        oppoimage = oppo[0];
        return oppoimage;
    }

    function oppoPokemonName(oppo) { // שם פוקימון  מחזיר
        opponame = oppo[1];
        return opponame;
    }

    function oppoPokemonHp(oppo) { // מחזיר HP
        oppohp = oppo[2];
        return oppohp;
    }

    function oppoPokemonAttack(oppo) { // מתקפה מחזיר
        oppopokemonattack = oppo[3];
        return oppopokemonattack;
    }

    function oppoPokemonDefense(oppo) { // הגנה מחזיר
        oppodefense = oppo[4];
        return oppodefense;
    }


    function randomNumber(min, max) { // מספר רדומלי
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function initHero(num) { // ויריב מאתחל גיבור
        hero = myPokemons[num];
        oppohero = oppo[num];

    }


    async function youAttack() { // תקיפה

        document.getElementById("attackcancel").innerHTML = "<img  class='blackattack attackbtn' src=img/attack.JPG /> ";
        document.getElementById("changecancel").innerHTML = "<img  class='blackattack attackbtn' src=img/change.JPG /> ";
        document.getElementById("catchbtn").innerHTML = "<img  class='blackattack attackbtn' src=img/catch.JPG /> ";

        myMove();
        hitgif(hero[7]);


        for (var i = 0; i < 3; i++) {
            if (oppohero[1] == oppo[i][1]) {

                oppohero[2] -= Math.floor(hero[3] * 0.5 * (1 - (oppohero[4]) / 300));
                oppo[i][2] = oppohero[2]
                document.getElementById("oppoHp").value = oppohero[2];
                document.getElementById("oppoHpDisplay").innerHTML = "HP: " + Math.floor(document.getElementById("oppoHp").value) + "/" +
                    document.getElementById("oppoHp").max;

                if (oppohero[2] < 1) {
                    kill.play();
                    document.getElementById("myOppoImage" + i).innerHTML = oppo[i][6];
                    document.getElementById("oppocloseball" + i).src = "img/closeball.png";
                    document.getElementById("massageBox").innerHTML = oppohero[1] + " is dead!";
                    await sleep(2000);
                    oppo[i] = "";

                }

            }

        }
        await sleep(2000);
        document.getElementById("massageBox").innerHTML = "";
        checkHp();

        for (var i = 0; i < 3; i++) {

            if (oppo[i] != "") {
                document.getElementById("myOppoImage" + i).innerHTML = oppo[i][0];
            }
        }
        await sleep(2000);

        if (oppo[0] == "" && oppo[1] == "" && oppo[2] == "") {
            battle.pause();
            win.play();
            document.getElementById("oppoImage").innerHTML = "";
            document.getElementById("massageBox").innerHTML = "<img src=img/youwin.png /> <img src=img/fireworksgif.gif /> ";
            oppohero = "";
            document.getElementById("attackcancel").innerHTML = "<img  class='blackattack attackbtn' src=img/attack.JPG /> ";
            document.getElementById("catchbtn").innerHTML = "<img  class='blackattack attackbtn' src=img/catch.JPG /> ";
            document.getElementById("changecancel").innerHTML = "<img  class='blackattack attackbtn' src=img/change.JPG /> ";
            //dance();
            return;
        }
        document.getElementById("changecancel").innerHTML = "<img class=attackbtn src=img/change.JPG onclick=changePokemon() /> ";
        oppoAttack();
        
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function oppoAttack() { // תקיפה יריב

        oppoMove();
        hitgif(oppohero[7]);

        for (var i = 0; i < 3; i++) {

            if (hero[1] == myPokemons[i][1]) {


                hero[2] -= Math.floor(oppohero[3] * 0.6 * (1 - (hero[4]) / 300));

                myPokemons[i][2] = hero[2];
                document.getElementById("heroHp").value = hero[2];
                document.getElementById("heroHpDisplay").innerHTML = "HP: " + Math.floor(document.getElementById("heroHp").value) + "/" +
                    document.getElementById("heroHp").max;
                await sleep(1000);
                document.getElementById("attackcancel").innerHTML = "<img id=attack class=attackbtn src=img/attack.JPG onclick=youAttack() />";
                document.getElementById("catchbtn").innerHTML = '<img  class="attackbtn" src="img/catch.jpg" onclick="catchPokemon()" />';

                if (hero[2] < 1) {
                    document.getElementById("attackcancel").innerHTML = "<img  class='blackattack attackbtn' src=img/attack.JPG /> ";
                    document.getElementById("catchbtn").innerHTML = "<img  class='blackattack attackbtn' src=img/catch.JPG /> ";
                    document.getElementById("myPokemonImage" + i).innerHTML = myPokemons[i][6];
                    document.getElementById("closeball" + i).src = "img/closeball.png";

                    document.getElementById("massageBox").innerHTML = hero[1] + " is dead!";
                    await sleep(3000);
                    document.getElementById("heroImage").innerHTML = "";
                    document.getElementById("massageBox").innerHTML = "";
                    //heroChange();



                    myPokemons[i] = "";
                    //changePokemon();


                    if (myPokemons[0] == "" && myPokemons[1] == "" && myPokemons[2] == "") {
                        document.getElementById("heroImage").innerHTML = "";
                        document.getElementById("massageBox").innerHTML = " <img src=img/gameover.png />  <img src=img/sad.gif style=width:170px /> ";
                        battle.pause();
                        lose.play();
                        hero = "";
                        document.getElementById("changecancel").innerHTML = "<img  class='blackattack attackbtn' src=img/change.JPG /> ";
                        document.getElementById("catchbtn").innerHTML = "<img  class='blackattack attackbtn' src=img/catch.JPG /> ";
                    }
                    return;

                }


            }

        }

    }

    function timer(ms) {
        var d = new Date();
        var d2 = null;
        do { d2 = new Date(); }
        while (d2 - d < ms);
    }


    function checkHp() {/* בודקת למי יש יותר חיים*/

        for (var i = 0; i < 3; i++) {

            if (oppohero[2] < oppo[i][2]) {

                oppohero = oppo[i];
                document.getElementById("oppoImage").innerHTML = oppohero[0];
                document.getElementById("oppoHp").max = oppohero[5];
                document.getElementById("oppoHp").value = oppohero[2];
                document.getElementById("oppoNameDisplay").innerHTML = oppohero[1];
                document.getElementById("oppoHpDisplay").innerHTML = "HP: " + Math.floor(document.getElementById("oppoHp").value) + "/" +
                document.getElementById("oppoHp").max;

            }
        }
    }


    function heroChange(num) {       /* מחליף פוקימון */

        document.getElementById("heroImage").innerHTML = "";

        if (num == 0) {
            name = document.getElementById("showname0").textContent;

        }
        if (num == 1) {
            name = document.getElementById("showname1").textContent;
        }

        for (var i = 0; i < 3; i++) {
            if (name == myPokemons[i][1]) {
                hero = myPokemons[i];
            }
        }


        document.getElementById("heroImage").innerHTML = hero[0];
        document.getElementById("heroHp").max = hero[5];
        document.getElementById("heroHp").value = hero[2];
        document.getElementById("heroHpDisplay").innerHTML = "HP: " + Math.floor(document.getElementById("heroHp").value) + "/" +
         document.getElementById("heroHp").max;
        document.getElementById("heroNameDisplay").innerHTML = "" + hero[1];
        document.getElementById("smallcard").style.display = "none";
        document.getElementById("attackcancel").innerHTML = "<img id=attack class=attackbtn src=img/attack.JPG onclick=youAttack() />";
        document.getElementById("changecancel").innerHTML = "<img class=attackbtn src=img/change.JPG onclick=changePokemon() /> ";
        document.getElementById("catchbtn").innerHTML = '<img  class="attackbtn" src="img/catch.jpg" onclick="catchPokemon()" />';

}

async function catchPokemon() {
    document.getElementById("changecancel").innerHTML = "<img  class='blackattack attackbtn' src=img/change.JPG /> ";
    document.getElementById("attackcancel").innerHTML = "<img  class='blackattack attackbtn'  src=img/attack.JPG /> ";
    document.getElementById("massageBox").innerHTML = "";
    document.getElementById("oppoImage").innerHTML = '<img class="pokeballgif" src="img/pokeballgif.gif" />';
    await sleep(1500);

    if (oppohero[2] < 20) {
        document.getElementById("massageBox").innerHTML = "Well done ! choose a pokemon to change ";
        document.getElementById("me0").style.pointerEvents = "auto";
        document.getElementById("me1").style.pointerEvents = "auto";
        document.getElementById("me2").style.pointerEvents = "auto";    
        await sleep(3000);
        var time = 5;
        var interval = setInterval(function () {
            if (time >=0) {
                document.getElementById("massageBox").innerHTML = "you have " + time + " second";
                time--;
            }
            else {
                clearInterval(interval); 
            }
        }, 1000);  
    }
    else {
        nextTime();
    }
    await sleep(6000);
    
    if (oppo[0] == "" && oppo[1] == "" && oppo[2] == "") {
        battle.pause();
        win.play();
        document.getElementById("oppoImage").innerHTML = "";
        document.getElementById("massageBox").innerHTML = "<img src=img/youwin.png /> <img src=img/fireworksgif.gif /> ";
        oppohero = "";
        document.getElementById("attackcancel").innerHTML = "<img  class='blackattack attackbtn' src=img/attack.JPG /> ";
        document.getElementById("changecancel").innerHTML = "<img  class='blackattack attackbtn' src=img/change.JPG /> ";
        document.getElementById("catchbtn").innerHTML = "<img  class='blackattack attackbtn' src=img/catch.JPG /> ";

        return;
    }

    else {
        document.getElementById("oppoImage").innerHTML = oppohero[0];
        document.getElementById("massageBox").innerHTML = "";
    }

    document.getElementById("me0").style.pointerEvents = "none";
    document.getElementById("me1").style.pointerEvents = "none";
    document.getElementById("me2").style.pointerEvents = "none";
    document.getElementById("attackcancel").innerHTML = "<img id=attack class=attackbtn src=img/attack.JPG onclick=youAttack() />";
    document.getElementById("changecancel").innerHTML = "<img class=attackbtn src=img/change.JPG onclick=changePokemon() /> ";

}

function nextTime() {
    document.getElementById("massageBox").innerHTML = "try again next time <br /> <br /><br />tip: try under 20 hp";
    document.getElementById("oppoImage").innerHTML = oppohero[0];  
}

async function changeme(me) {
    var tempPokemon = oppohero
    tempPokemon[2] = tempPokemon[5];
    localStorage.setItem("pokemon" + me, JSON.stringify(tempPokemon));
    oppohero[2] = 0;
    for (var i = 0; i < 3; i++) {
        if (oppohero[0] == oppo[i][0]) {
            document.getElementById("myOppoImage" + i).innerHTML = "";
            num = i;
        }
    }
    checkHp();
    oppo[num] = "";

   

    
}

    //function newGame() {
    //    location.reload();
    //}


    //********************************************************************************************//  animation

    var win = new Audio('sound/win.mp3');
    var dead = new Audio('sound/dead.mp3');
    var kill = new Audio('sound/kill.mp3');
    var battle = new Audio('sound/battle.mp3');
    var lose = new Audio('sound/lose.mp3');


    var imgObj = null;

    window.onload = init;

    function init() {
        heroPokeonMove = document.getElementById('heroImage');
        heroPokeonMove.style.position = 'relative';
        heroPokeonMove.style.left = '0px';

        oppoPokeonMove = document.getElementById('oppoImage');
        oppoPokeonMove.style.position = 'relative';
        oppoPokeonMove.style.left = '0px';
    }

    async function myMove() {
        var elem = document.getElementById("heroImage");
        var pos = 0;
        var setPos = 85;
        var add = 1;
        var id = setInterval(frame, 1);
        function frame() {
            if (pos == setPos) {
                setPos = 0;
                add = -1;
                //clearInterval(id);
            } else {
                pos = pos + add;
                //elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
                
                
            }
        }
        await sleep(500);
        $("#oppoImage").effect("shake");

    }

   async function oppoMove() {
        var elem = document.getElementById("oppoImage");
        var pos = 0;
        var setPos = 85;
        var add = 1;
        var id = setInterval(frame, 1);
        function frame() {
            if (pos == setPos) {
                setPos = 0;
                add = -1;
                //clearInterval(id);
            } else {
                pos = pos + add;
                //elem.style.top = pos + 'px';
                elem.style.left = -pos + 'px';
            }
        }
        await sleep(500);
        $("#heroImage").effect("shake");
    }

    

function hitgif(card) {

    switch (card) {

        case "Fire":
            if (card == hero[7]) {
                document.getElementById("oppoImage").innerHTML += "<img class=gifoppo src=img/firegif.gif style='width:120px;'   />";
                setTimeout(function () { document.getElementById("oppoImage").innerHTML = oppohero[0]; }, 2000);
            }
            else {
                document.getElementById("heroImage").innerHTML += "<img class=gifhero src=img/firegif.gif 'style=width:120px;' />";
                setTimeout(function () { document.getElementById("heroImage").innerHTML = hero[0]; }, 2000);
            }

            break;

        case "Water":
            if (card == hero[7]) {
                document.getElementById("oppoImage").innerHTML += "<img class=gifoppo src=img/watergif.gif />";
                setTimeout(function () { document.getElementById("oppoImage").innerHTML = oppohero[0]; }, 2000);
            }
            else {
                document.getElementById("heroImage").innerHTML += "<img class=gifhero src=img/watergif.gif />";
                setTimeout(function () { document.getElementById("heroImage").innerHTML = hero[0]; }, 2000);
            }

            break;

        case "Grass":
            if (card == hero[7]) {
                document.getElementById("oppoImage").innerHTML += "<img class=gifoppo src=img/grassgif.gif />";
                setTimeout(function () { document.getElementById("oppoImage").innerHTML = oppohero[0]; }, 2000);
            }
            else {
                document.getElementById("heroImage").innerHTML += "<img class=gifhero src=img/grassgif.gif />";
                setTimeout(function () { document.getElementById("heroImage").innerHTML = hero[0]; }, 2000);
            }

            break;

        case "Poison":
            if (card == hero[7]) {
                document.getElementById("oppoImage").innerHTML += "<img class=gifoppo src=img/poisongif.gif style='width: 110px'; />";
                setTimeout(function () { document.getElementById("oppoImage").innerHTML = oppohero[0]; }, 2000);
            }
            else {
                document.getElementById("heroImage").innerHTML += "<img class=gifhero src=img/firegif.gif  style='width: 110px'; />";
                setTimeout(function () { document.getElementById("heroImage").innerHTML = hero[0]; }, 2000);
            }

            break;
        case "Psychic":
            if (card == hero[7]) {
                document.getElementById("oppoImage").innerHTML += "<img class=gifoppo src=img/psychicgif.gif />";
                setTimeout(function () { document.getElementById("oppoImage").innerHTML = oppohero[0]; }, 2000);
            }
            else {
                document.getElementById("heroImage").innerHTML += "<img class=gifhero src=img/psychicgif.gif />";
                setTimeout(function () { document.getElementById("heroImage").innerHTML = hero[0]; }, 2000);
            }

            break;
        case "Rock":
            if (card == hero[7]) {
                document.getElementById("oppoImage").innerHTML += "<img class=gifoppo src=img/firegif.gif />";
                setTimeout(function () { document.getElementById("oppoImage").innerHTML = oppohero[0]; }, 2000);
            }
            else {
                document.getElementById("heroImage").innerHTML += "<img class=gifhero src=img/firegif.gif />";
                setTimeout(function () { document.getElementById("heroImage").innerHTML = hero[0]; }, 2000);
            }

            break;

        case "Electric":

            if (card == hero[7]) {
                document.getElementById("oppoImage").innerHTML += "<img class=gifoppo src=img/electricgif.gif />";
                setTimeout(function () { document.getElementById("oppoImage").innerHTML = oppohero[0]; }, 2000);
            }
            else {
                document.getElementById("heroImage").innerHTML += "<img class=gifhero src=img/electricgif.gif />";
                setTimeout(function () { document.getElementById("heroImage").innerHTML = hero[0]; }, 2000);
            }

            break;

        default:
            if (card == hero[7]) {
                document.getElementById("oppoImage").innerHTML += "<img class=gifoppo src=img/defgif.gif />";
                setTimeout(function () { document.getElementById("oppoImage").innerHTML = oppohero[0]; }, 2000);
            }
            else {
                document.getElementById("heroImage").innerHTML += "<img class=gifhero src=img/defgif.gif />";
                setTimeout(function () { document.getElementById("heroImage").innerHTML = hero[0]; }, 2000);
            }
            break;

    }


}


    function fadeIn(el) {
        el.style.opacity = 0;
        var tick = function () {
            el.style.opacity = +el.style.opacity + 0.02;
            if (+el.style.opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
            }
        };
        tick();
    }

    window.fightFade = function () {
        var el = document.getElementById("fightBtn");
        fadeIn(el);
    }

    window.chooseFade1 = function () {
        var el = document.getElementById("choose1");
        fadeIn(el);
    }
function cancel() {

    document.getElementById("smallcard").style.display = "none";
    document.getElementById("changecancel").innerHTML = "<img class=attackbtn src=img/change.JPG onclick=changePokemon() /> ";
  

    var count = 0;
    for (var i = 0; i < 3; i++) {
        if (myPokemons[i] == "") {
            count++;
        }

    }
    if (count == 2) {
        document.getElementById("catchbtn").innerHTML = '<img  class="attackbtn" src="img/catch.jpg" onclick="catchPokemon()" />';
        document.getElementById("attackcancel").innerHTML = "<img id=attack class=attackbtn src=img/attack.JPG onclick=youAttack() />";

    }

}

    function changePokemon() {


        document.getElementById("massageBox").innerHTML = "";
        document.getElementById("attackcancel").innerHTML = "<img  class='blackattack attackbtn'  src=img/attack.JPG /> ";
        document.getElementById("changecancel").innerHTML = "<img class=attackbtn src=img/cancel.jpg onclick=cancel() /> ";
        document.getElementById("catchbtn").innerHTML = "<img  class='blackattack attackbtn' src=img/catch.JPG /> ";


        for (var j = 0; j < 2; j++) {
            document.getElementById("showimage" + j).innerHTML = "";
            document.getElementById("showname" + j).innerHTML = "";
            document.getElementById("showhp" + j).innerHTML = "";
            document.getElementById("showattack" + j).innerHTML = "";
            document.getElementById("showdefense" + j).innerHTML = "";
        }

        document.getElementById("smallcard").style.display = "block";

        var j = 0;
        for (var i = 0; i < 3; i++) {
            if (hero[1] != myPokemons[i][1] && myPokemons[i] != "") {
                document.getElementById("showimage" + j).innerHTML = pokemonImage(myPokemons[i]);
                document.getElementById("showname" + j).innerHTML = pokemonName(myPokemons[i]);
                document.getElementById("showhp" + j).innerHTML = " &nbsp&nbspHP: " + pokemonHp(myPokemons[i]);
                document.getElementById("showattack" + j).innerHTML = "Attack: " + pokemonAttack(myPokemons[i]);
                document.getElementById("showdefense" + j).innerHTML = " &nbsp&nbspDefense: " + pokemonDefense(myPokemons[i]);
                j++;

            }

        }

    }
