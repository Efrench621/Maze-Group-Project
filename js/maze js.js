var mapData = { // All levels for the maze stored in arrays
    level1:[
        ["_","_","_","_","1","_","_","_","_"],
        ["_","_","_","_","s","_","_","_","_"],
        ["_","s","_","_","_","_","_","_","_"],
        ["_","s","_","_","2","_","_","s","_"],
        ["_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","c","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_"]
    ],
    level2:[
        ["_","_","_","_","x","x","x","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","x","c","x","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","x","_","x","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","s","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","e","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","1"]
    ],
    level3:[
        ["_","_","_","_","x","x","x","_","_","_"],
        ["_","_","_","_","x","_","x","_","_","_"],
        ["_","_","_","_","x","_","x","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_"],
        ["x","x","_","_","_","_","_","_","_","_"],
        ["x","c","_","_","_","_","_","_","_","_"],
        ["x","x","_","_","_","_","_","_","_","1"]
    ],
    level4:[
        ["_","_","_","_","x","x","x","_","_","_"],
        ["_","_","_","_","x","_","x","_","_","_"],
        ["_","_","_","_","x","_","x","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_"],
        ["x","x","_","_","_","_","_","_","_","_"],
        ["x","c","_","_","_","_","_","_","_","_"],
        ["x","x","_","_","_","_","_","_","_","1"]
    ],
    level5:[
        ["_","_","_","_","x","x","x","_","_","_"],
        ["_","_","_","_","x","_","x","_","_","_"],
        ["_","_","_","_","x","_","x","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_"],
        ["x","x","_","_","_","_","_","_","_","_"],
        ["x","c","_","_","_","_","_","_","_","_"],
        ["x","x","_","_","_","_","_","_","_","1"]
    ]
}

var currentMap = "level1";
var level = 1;
var isDead = false;
var lives = 3;
var coins = 0;
var isOnTrap = false;

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
                out += "<td id='char'>" + mapData[currentMap][y] [x] + "</td>";
            }
            else if(mapData[currentMap][y] [x] == "x")
            {
                out += "<td class='block'>" + mapData[currentMap][y] [x] + "</td>";
            }
            else if(mapData[currentMap][y] [x] == "2")
            {
                out += "<td class='coin'>" + "<img src='images/small coin.png'>" + "</td>";
            }
            else if(mapData[currentMap][y] [x] == "s")
            {
                out += "<td class='station'>" + mapData[currentMap][y] [x] + "</td>";
            }
            else if(mapData[currentMap][y] [x] == "e")
            {
                out += "<td class='motion'>" + mapData[currentMap][y] [x] + "</td>";
            }
            else
            {
                out += "<td>" + mapData[currentMap][y] [x] + "</td>";
            }
        }
        out += "</tr>";
    }
    out += "</table>";
    var stats = "Lives: "+ lives + "<br> Score:" + coins;
    document.getElementById("screen").innerHTML = out;
    document.getElementById("lives").innerHTML = stats;
}



function specificKey(event) // Checks if key is pressed
{
    var keyPressed = event.key;
    return keyPressed;
}

function resetMapFunc()
{
    location.reload();
}

function bone(input)
{
    //movement
    if(input=="w"||input=="W")
    {
        moveUp();
    }
    else if(input=="a"||input=="A")
    {
        moveLeft();
    }
    else if(input=="s"||input=="S")
    {
        moveDown();
    }
    else if(input=="d"||input=="D")
    {
        moveRight();
    }
    if(isDead)
    {
        resetMapFunc();
    }
    if (lives<=0)
    {
        isDead = true;
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



printScreen();