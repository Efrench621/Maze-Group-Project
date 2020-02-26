var maps = { // All levels for the maze stored in arrays
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
        ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
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

function printScreen() // Function that creates the table, sets ids to the <td> tags, and prints lives
{
    var out = "<table>";
    for(var y = 0; y < maps[currentMap].length; y++ )
    {
        out += "<tr>";
        for(var x = 0; x < maps[currentMap][y].length; x++)
        {
            if(maps[currentMap][y] [x] == "c")
            {
                out += "<td id='char'>" + maps[currentMap][y] [x] + "</td>";
            }
            else if(maps[currentMap][y] [x] == "x")
            {
                out += "<td class='block'>" + maps[currentMap][y] [x] + "</td>";
            }
            else if(maps[currentMap][y] [x] == "2")
            {
                out += "<td class='coin'>" + maps[currentMap][y] [x] + "</td>";
            }
            else if(maps[currentMap][y] [x] == "s")
            {
                out += "<td class='station'>" + maps[currentMap][y] [x] + "</td>";
            }
            else if(maps[currentMap][y] [x] == "e")
            {
                out += "<td class='motion'>" + maps[currentMap][y] [x] + "</td>";
            }
            else
            {
                out += "<td>" + maps[currentMap][y] [x] + "</td>";
            }
        }
        out += "</tr>";
    }
    out += "</table>";
    var stats = "Lives: "+ lives + "<br> Score:" + coins;
    document.getElementById("screen").innerHTML = out;
    document.getElementById("lives").innerHTML = stats;
}

var resetMaps = maps;
var currentMap = "level1";
var level = 1;
var isDead = false;
var lives = 3;
var coins = 0;
var isOnTrap = false;

function specificKey(event) // Checks if key is pressed
{
    var keyPressed = event.key;
    return keyPressed;
}

function resetMapFunc()
{
    maps = resetMaps;
    lives = 3;
    level = 0;
    return(true);
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
    else if(input == "r" && lives == 0)//menu button
    {
        resetMapFunc();
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

function getPos()
{
    var pos = {
        Y:0,
        X:0
    };
    for(var y = 0; y<maps[currentMap].length; y++)
    {
        for(var x = 0; x<maps[currentMap][y].length; x++)
        {
            if(maps[currentMap][y] [x] == "c")
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
    var pos = getPos();
    try{
        if(maps[currentMap][pos.Y-1] [pos.X] == "_"){
            if(isOnTrap)
            {
                maps[currentMap][pos.Y] [pos.X] = "s";
                maps[currentMap][pos.Y-1] [pos.X] = "c";
                isOnTrap = false;
            }
            else
            {
                maps[currentMap][pos.Y] [pos.X] = "_";
                maps[currentMap][pos.Y-1] [pos.X] = "c";
            }
        }
        else if(maps[currentMap][pos.Y-1] [pos.X] == "1"){
            level++;
            currentMap = "level"+level;
        }
        else if(maps[currentMap][pos.Y-1] [pos.X] == "s"){
            lives--;
            if(isOnTrap)
            {
                maps[currentMap][pos.Y] [pos.X] = "s";
                maps[currentMap][pos.Y-1] [pos.X] = "c";
                isOnTrap = false;
            }
            else
            {
                maps[currentMap][pos.Y] [pos.X] = "_";
                maps[currentMap][pos.Y-1] [pos.X] = "c";
            }
            isOnTrap = true;
        }
        else if(maps[currentMap][pos.Y-1] [pos.X] == "2")
        {
            coins += 100;
            if(isOnTrap)
            {
                maps[currentMap][pos.Y] [pos.X] = "s";
                maps[currentMap][pos.Y-1] [pos.X] = "c";
                isOnTrap = false;
            }
            else
            {
                maps[currentMap][pos.Y] [pos.X] = "_";
                maps[currentMap][pos.Y-1] [pos.X] = "c";
            }
        }
    }
    catch(err){
    }
    printScreen();
}
function moveDown()
{
    var pos = getPos();
    try {
        if(maps[currentMap][pos.Y+1] [pos.X] == "_"){
            if(isOnTrap)
            {
                maps[currentMap][pos.Y] [pos.X] = "s";
                maps[currentMap][pos.Y+1] [pos.X] = "c";
                isOnTrap = false;
            }
            else
            {
                maps[currentMap][pos.Y] [pos.X] = "_";
                maps[currentMap][pos.Y+1] [pos.X] = "c";
            }
        }
        else if(maps[currentMap][pos.Y+1] [pos.X] == "1"){
            level++;
            currentMap = "level"+level;
        }
        else if(maps[currentMap][pos.Y+1] [pos.X] == "s"){
            lives--;
            if(isOnTrap)
            {
                maps[currentMap][pos.Y] [pos.X] = "s";
                maps[currentMap][pos.Y+1] [pos.X] = "c";
                isOnTrap = false;
            }
            else
            {
                maps[currentMap][pos.Y] [pos.X] = "_";
                maps[currentMap][pos.Y+1] [pos.X] = "c";
            }
            isOnTrap = true;
        }
        else if(maps[currentMap][pos.Y+1] [pos.X] == "2"){
            coins += 100;
            if(isOnTrap)
            {
                maps[currentMap][pos.Y] [pos.X] = "s";
                maps[currentMap][pos.Y+1] [pos.X] = "c";
                isOnTrap = false;
            }
            else
            {
                maps[currentMap][pos.Y] [pos.X] = "_";
                maps[currentMap][pos.Y+1] [pos.X] = "c";
            }
        }
    }
    catch(err) {
    }
    printScreen();
}
function moveLeft()
{
    var pos = getPos();
    try {
        if(maps[currentMap][pos.Y] [pos.X-1] == "_"){
            if(isOnTrap)
            {
                maps[currentMap][pos.Y] [pos.X] = "s";
                maps[currentMap][pos.Y] [pos.X-1] = "c";
                isOnTrap = false;
            }
            else
            {
                maps[currentMap][pos.Y] [pos.X] = "_";
                maps[currentMap][pos.Y] [pos.X-1] = "c";
            }
        }
        else if(maps[currentMap][pos.Y] [pos.X-1] == "1"){
            level++;
            currentMap = "level"+level;
        }
        else if(maps[currentMap][pos.Y] [pos.X-1] == "s"){
            lives--;
            if(isOnTrap)
            {
                maps[currentMap][pos.Y] [pos.X] = "s";
                maps[currentMap][pos.Y] [pos.X-1] = "c";
                isOnTrap = false;
            }
            else
            {
                maps[currentMap][pos.Y] [pos.X] = "_";
                maps[currentMap][pos.Y] [pos.X-1] = "c";
            }
            isOnTrap = true;
        }
        else if(maps[currentMap][pos.Y] [pos.X-1] == "2"){
            coins += 100;
            if(isOnTrap)
            {
                maps[currentMap][pos.Y] [pos.X] = "s";
                maps[currentMap][pos.Y] [pos.X-1] = "c";
                isOnTrap = false;
            }
            else
            {
                maps[currentMap][pos.Y] [pos.X] = "_";
                maps[currentMap][pos.Y] [pos.X-1] = "c";
            }
        }
    }
    catch(err) {
    }
    printScreen();
}
function moveRight()
{
    var pos = getPos();
    try {
        if(maps[currentMap][pos.Y] [pos.X+1] == "_"){
            if(isOnTrap)
            {
                maps[currentMap][pos.Y] [pos.X] = "s";
                maps[currentMap][pos.Y] [pos.X+1] = "c";
                isOnTrap = false;
            }
            else
            {
                maps[currentMap][pos.Y] [pos.X] = "_";
                maps[currentMap][pos.Y] [pos.X+1] = "c";
            }
        }
        else if(maps[currentMap][pos.Y] [pos.X+1] == "1"){
            level++;
            currentMap = "level"+level;
        }
        else if(maps[currentMap][pos.Y] [pos.X+1] == "s"){
            lives--;
            if(isOnTrap)
            {
                maps[currentMap][pos.Y] [pos.X] = "s";
                maps[currentMap][pos.Y] [pos.X+1] = "c";
                isOnTrap = false;
            }
            else
            {
                maps[currentMap][pos.Y] [pos.X] = "_";
                maps[currentMap][pos.Y] [pos.X+1] = "c";
            }
            isOnTrap = true;
        }
        else if(maps[currentMap][pos.Y] [pos.X+1] == "2"){
            coins += 100;
            if(isOnTrap)
            {
                maps[currentMap][pos.Y] [pos.X] = "s";
                maps[currentMap][pos.Y] [pos.X+1] = "c";
                isOnTrap = false;
            }
            else
            {
                maps[currentMap][pos.Y] [pos.X] = "_";
                maps[currentMap][pos.Y] [pos.X+1] = "c";
            }
        }
    }
    catch(err) {
    }
    printScreen();
}

printScreen();