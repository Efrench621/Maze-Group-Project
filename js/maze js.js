var mapData = { // All levels for the maze stored in arrays
    level1:[
        ["x","_","_","_","1","x","_","_","_"],
        ["_","_","x","x","x","x","x","x","_"],
        ["_","s","_","_","_","_","x","x","x"],
        ["_","s","x","x","_","x","x","s","x"],
        ["_","_","_","_","_","_","x","_","_"],
        ["_","x","x","x","c","_","x","x","_"],
        ["_","_","2","x","x","_","_","_","_"]
    ],
    level2:[
        ["2","_","_","_","x","c","x","_","_","x","_","_","_","x","2","x","_","_"],
        ["_","x","x","2","x","_","x","x","_","_","_","x","_","x","_","_","_","x"],
        ["_","_","_","x","x","_","x","x","x","_","x","x","_","x","_","x","x","_"],
        ["_","x","x","x","_","_","_","_","_","_","_","x","_","_","_","x","_","_"],
        ["_","_","_","_","_","s","_","x","x","x","_","x","_","x","_","_","_","x"],
        ["_","x","x","x","_","_","_","_","_","_","_","x","_","_","_","x","x","_"],
        ["_","_","_","x","_","x","x","x","_","_","x","x","_","x","_","_","_","_"],
        ["x","_","x","x","_","x","x","x","x","_","_","_","x","_","_","_","_","x"],
        ["x","_","x","_","_","_","_","_","x","x","x","_","e","_","x","x","_","_"],
        ["x","_","_","_","_","_","x","_","_","_","x","_","x","_","_","_","x","_"],
        ["x","x","x","_","2","x","x","x","x","_","_","_","x","x","x","s","s","1"]
    ],
    level3:[
        ["_","2","x","_","x","x","x","x","2","x"],
        ["_","x","x","_","_","c","_","_","_","_"],
        ["_","_","_","_","x","x","x","_","x","_"],
        ["_","x","x","_","_","_","_","_","s","x"],
        ["_","_","x","_","x","e","x","x","_","_"],
        ["x","x","_","x","x","_","x","_","x","x"],
        ["x","2","_","x","x","_","_","_","x","_"],
        ["x","x","_","_","_","_","x","_","_","1"]
    ],
    level4:[
        ["x","x","x","x","x","x","x","2","x","_"],
        ["_","2","s","_","x","_","_","_","_","_"],
        ["_","x","x","_","x","_","x","x","x","_"],
        ["_","x","_","_","_","_","_","x","1","_"],
        ["_","_","_","x","_","x","e","_","x","x"],
        ["x","_","_","x","_","_","x","x","_","_"],
        ["x","c","x","x","x","_","_","_","_","_"],
        ["x","_","_","_","_","_","x","2","x","_"]
    ],
    level5:[
        ["2","x","x","_","_","_","x","x","_","_"],
        ["_","_","_","_","x","_","_","_","_","_"],
        ["e","x","x","_","x","_","x","_","x","_"],
        ["_","_","_","x","x","_","x","x","x","_"],
        ["_","x","_","_","x","_","x","_","x","_"],
        ["_","c","x","_","s","_","_","_","x","_"],
        ["_","x","x","_","x","s","s","s","_","_"],
        ["_","_","x","_","_","s","2","s","x","1"]
    ],
    level6:[
        ["c"]
    ]
}

var currentMap = "level1";
var level = 1;
var isDead = false;
var lives = 5;
var coins = 0;
var isOnTrap = false;
var enemyIsOnTrap = false;
var AniFin = false;
var notStarted = true;

function printScreen() // Function that creates the table, sets ids to the <td> tags, and prints lives
{
    var out = "<table>";
    for(var y = 0; y < mapData[currentMap].length; y++ )
    {
        out += "<tr>";
        for(var x = 0; x < mapData[currentMap][y].length; x++)
        {
            if(mapData[currentMap][y] [x] == "c")
            {
                out += "<td id='char'>" + "<img src='images/pika.png'>" + "</td>";
            }
            else if(mapData[currentMap][y] [x] == "x")
            {
                out += "<td class='block'></td>";
            }
            else if(mapData[currentMap][y] [x] == "1")
            {
                out += "<td>" + "<img src='images/gate.png' width='60%' height='60%'>" + "</td>";
            }
            else if(mapData[currentMap][y] [x] == "2")
            {
                out += "<td class='coin'>" + "<img src='images/shiny coin.png' width='60%' height='60%'>" + "</td>";
            }
            else if(mapData[currentMap][y] [x] == "s")
            {
                out += "<td class='station'>" + "<img src='images/ven.png' width='60%' height='60%'>" + "</td>";
            }
            else if(mapData[currentMap][y] [x] == "e")
            {
                out += "<td class='motion'>" + "<img src='images/char.png'>" + "</td>";
            }
            else
            {
                out += "<td></td>";
            }
        }
        out += "</tr>";
    }
    out += "</table>";
    var stats = "Lives: "+ lives + "<br> Score:" + coins;
    document.getElementById("screen").innerHTML = out;
    document.getElementById("lives").innerHTML = stats;
}

function sleep(milliseconds) 
{
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
        console.log(Date.now());
    } while (currentDate - date < milliseconds);
}

function specificKey(event) // Checks if key is pressed
{
    var keyPressed = event.key;
    return keyPressed;
}

function death()
{
    deathAnimation();
    if(AniFin)
    {
        location.reload();
    }
}

function bone(input)
{
    if(notStarted)
    {
        startAnimation();
        return(true);
    }
    document.getElementById("anime").style.top = -50 + "px";
    //movement
    if(input == "w" && isDead == false)
    {
        moveUp();
    }
    else if(input == "a" && isDead == false)
    {
        moveLeft();
    }
    else if(input == "s" && isDead == false)
    {
        moveDown();
    }
    else if(input == "d" && isDead == false)
    {
        moveRight();
    }
    if (lives<=0)
    {
        isDead = true;
        death();
    }
    enemyAi();
    if(level >= 6)
    {
        winAnimation();
        if(AniFin)
        {
            location.reload();
        }
    }
}

function getPos(input)
{
    var pos = {
        Y:0,
        X:0
    };
    for(var y = 0; y<mapData[currentMap].length; y++)
    {
        for(var x = 0; x<mapData[currentMap][y].length; x++)
        {
            if(mapData[currentMap][y] [x] == input)
            {
                pos.Y = y;
                pos.X = x;
                return pos;
            }
        }
    }
}

function moveUp()
{
    var pos = getPos("c");
    try{
        if(mapData[currentMap][pos.Y-1] [pos.X] == "_"){
            if(isOnTrap)
            {
                mapData[currentMap][pos.Y] [pos.X] = "s";
                mapData[currentMap][pos.Y-1] [pos.X] = "c";
                isOnTrap = false;
            }
            else
            {
                mapData[currentMap][pos.Y] [pos.X] = "_";
                mapData[currentMap][pos.Y-1] [pos.X] = "c";
            }
        }
        else if(mapData[currentMap][pos.Y-1] [pos.X] == "1"){
            level++;
            currentMap = "level"+level;
        }
        else if(mapData[currentMap][pos.Y-1] [pos.X] == "s"){
            lives--;
            if(isOnTrap)
            {
                mapData[currentMap][pos.Y] [pos.X] = "s";
                mapData[currentMap][pos.Y-1] [pos.X] = "c";
                isOnTrap = false;
            }
            else
            {
                mapData[currentMap][pos.Y] [pos.X] = "_";
                mapData[currentMap][pos.Y-1] [pos.X] = "c";
            }
            isOnTrap = true;
        }
        else if(mapData[currentMap][pos.Y-1] [pos.X] == "2")
        {
            coins += 100;
            if(isOnTrap)
            {
                mapData[currentMap][pos.Y] [pos.X] = "s";
                mapData[currentMap][pos.Y-1] [pos.X] = "c";
                isOnTrap = false;
            }
            else
            {
                mapData[currentMap][pos.Y] [pos.X] = "_";
                mapData[currentMap][pos.Y-1] [pos.X] = "c";
            }
        }
    }
    catch(err){
    }
    printScreen();
}
function moveDown()
{
    var pos = getPos("c");
    try {
        if(mapData[currentMap][pos.Y+1] [pos.X] == "_"){
            if(isOnTrap)
            {
                mapData[currentMap][pos.Y] [pos.X] = "s";
                mapData[currentMap][pos.Y+1] [pos.X] = "c";
                isOnTrap = false;
            }
            else
            {
                mapData[currentMap][pos.Y] [pos.X] = "_";
                mapData[currentMap][pos.Y+1] [pos.X] = "c";
            }
        }
        else if(mapData[currentMap][pos.Y+1] [pos.X] == "1"){
            level++;
            currentMap = "level"+level;
        }
        else if(mapData[currentMap][pos.Y+1] [pos.X] == "s"){
            lives--;
            if(isOnTrap)
            {
                mapData[currentMap][pos.Y] [pos.X] = "s";
                mapData[currentMap][pos.Y+1] [pos.X] = "c";
                isOnTrap = false;
            }
            else
            {
                mapData[currentMap][pos.Y] [pos.X] = "_";
                mapData[currentMap][pos.Y+1] [pos.X] = "c";
            }
            isOnTrap = true;
        }
        else if(mapData[currentMap][pos.Y+1] [pos.X] == "2"){
            coins += 100;
            if(isOnTrap)
            {
                mapData[currentMap][pos.Y] [pos.X] = "s";
                mapData[currentMap][pos.Y+1] [pos.X] = "c";
                isOnTrap = false;
            }
            else
            {
                mapData[currentMap][pos.Y] [pos.X] = "_";
                mapData[currentMap][pos.Y+1] [pos.X] = "c";
            }
        }
    }
    catch(err) {
    }
    printScreen();
}
function moveLeft()
{
    var pos = getPos("c");
    try {
        if(mapData[currentMap][pos.Y] [pos.X-1] == "_"){
            if(isOnTrap)
            {
                mapData[currentMap][pos.Y] [pos.X] = "s";
                mapData[currentMap][pos.Y] [pos.X-1] = "c";
                isOnTrap = false;
            }
            else
            {
                mapData[currentMap][pos.Y] [pos.X] = "_";
                mapData[currentMap][pos.Y] [pos.X-1] = "c";
            }
        }
        else if(mapData[currentMap][pos.Y] [pos.X-1] == "1"){
            level++;
            currentMap = "level"+level;
        }
        else if(mapData[currentMap][pos.Y] [pos.X-1] == "s"){
            lives--;
            if(isOnTrap)
            {
                mapData[currentMap][pos.Y] [pos.X] = "s";
                mapData[currentMap][pos.Y] [pos.X-1] = "c";
                isOnTrap = false;
            }
            else
            {
                mapData[currentMap][pos.Y] [pos.X] = "_";
                mapData[currentMap][pos.Y] [pos.X-1] = "c";
            }
            isOnTrap = true;
        }
        else if(mapData[currentMap][pos.Y] [pos.X-1] == "2"){
            coins += 100;
            if(isOnTrap)
            {
                mapData[currentMap][pos.Y] [pos.X] = "s";
                mapData[currentMap][pos.Y] [pos.X-1] = "c";
                isOnTrap = false;
            }
            else
            {
                mapData[currentMap][pos.Y] [pos.X] = "_";
                mapData[currentMap][pos.Y] [pos.X-1] = "c";
            }
        }
    }
    catch(err) {
    }
    printScreen();
}
function moveRight()
{
    var pos = getPos("c");
    try {
        if(mapData[currentMap][pos.Y] [pos.X+1] == "_"){
            if(isOnTrap)
            {
                mapData[currentMap][pos.Y] [pos.X] = "s";
                mapData[currentMap][pos.Y] [pos.X+1] = "c";
                isOnTrap = false;
            }
            else
            {
                mapData[currentMap][pos.Y] [pos.X] = "_";
                mapData[currentMap][pos.Y] [pos.X+1] = "c";
            }
        }
        else if(mapData[currentMap][pos.Y] [pos.X+1] == "1"){
            level++;
            currentMap = "level"+level;
        }
        else if(mapData[currentMap][pos.Y] [pos.X+1] == "s"){
            lives--;
            if(isOnTrap)
            {
                mapData[currentMap][pos.Y] [pos.X] = "s";
                mapData[currentMap][pos.Y] [pos.X+1] = "c";
                isOnTrap = false;
            }
            else
            {
                mapData[currentMap][pos.Y] [pos.X] = "_";
                mapData[currentMap][pos.Y] [pos.X+1] = "c";
            }
            isOnTrap = true;
        }
        else if(mapData[currentMap][pos.Y] [pos.X+1] == "2"){
            coins += 100;
            if(isOnTrap)
            {
                mapData[currentMap][pos.Y] [pos.X] = "s";
                mapData[currentMap][pos.Y] [pos.X+1] = "c";
                isOnTrap = false;
            }
            else
            {
                mapData[currentMap][pos.Y] [pos.X] = "_";
                mapData[currentMap][pos.Y] [pos.X+1] = "c";
            }
        }
        
    }
    catch(err) {
    }
    printScreen();
}

function rand(min,max){
    while(true){
        var out = (Math.round((Math.random()*max))+Math.round((Math.random()*min)));
        if(min<out){
            if(max>out){
                return(out);
            }
        }
    }
}

function enemyAi(){
    var pos = getPos("e");
    var nomber = Math.round(rand(0,5));
    try
    {    
        if(nomber == 1){
            if(mapData[currentMap][pos.Y-1] [pos.X] == "_")
            {
                mapData[currentMap][pos.Y] [pos.X] = "_";
                mapData[currentMap][pos.Y-1] [pos.X] = "e";
            }
        }
        else if(nomber == 2){
            if(mapData[currentMap][pos.Y+1] [pos.X] == "_")
            {
                mapData[currentMap][pos.Y] [pos.X] = "_";
                mapData[currentMap][pos.Y+1] [pos.X] = "e";
            }
        }
        else if(nomber == 3){
            if(mapData[currentMap][pos.Y] [pos.X-1] == "_")
            {
                mapData[currentMap][pos.Y] [pos.X] = "_";
                mapData[currentMap][pos.Y] [pos.X-1] = "e";
            }
        }
        else if(nomber == 4){
            if(mapData[currentMap][pos.Y] [pos.X+1] == "_")
            {
                mapData[currentMap][pos.Y] [pos.X] = "_";
                mapData[currentMap][pos.Y] [pos.X+1] = "e";
            }
        }
    }
    catch(err){

    }
    
}

function deathAnimation() {
    var elem = document.getElementById("anime");
    elem.innerText = "The story of you ended with a terrible scream...";
    var pos = -50;
    var id = setInterval(frame, 5);
    function frame()
    {
        if (pos == 500) {
            clearInterval(id);
            AniFin = true;
        } else {
            pos++; 
            elem.style.top = pos + "px"; 
        }
    }
}

function winAnimation() {
    var elem = document.getElementById("anime");
    elem.innerText = "The stories of your victories will be told forever..." + "score:" + coins;
    var pos = -50;
    var id = setInterval(frame, 5);
    function frame()
    {
        if (pos == 500) {
            clearInterval(id);
            AniFin = true;
        } else {
            pos++; 
            elem.style.top = pos + "px"; 
        }
    }
}

function startAnimation()
{
    var elem = document.getElementById("anime");
    if(notStarted)
    {
        elem.innerText = "you start your adventure to save the world";
        var pos = -50;
        var id = setInterval(frame, 5);
        function frame()
        {
            if (pos == 500) {
                clearInterval(id);
                notStarted = false;
            } else {
                pos++; 
                elem.style.top = pos + "px"; 
            }
        }
    }
}

function timer()
{
    var elem = document.getElementById("tim");
    if(notStarted)
    {
        elem.innerText = "you start your adventure to save the world";
        var pos = 0;
        var id = setInterval(frame, 1000);
        function frame()
        {
            if (pos == 300) {
                clearInterval(id);
                location.reload();
            } else {
                pos++; 
                elem.innerHTML = pos + ":seconds"; 
            }
        }
    }
}
timer();
printScreen();