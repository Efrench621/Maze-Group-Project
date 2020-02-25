var maps = {
    level1:[
        ["_","_","_","_","1","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","I","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","c","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_"]
    ],
    level2:[
        ["_","_","_","_","x","x","x","_","_","_"],
        ["_","_","_","_","x","1","x","_","_","_"],
        ["_","_","_","_","x","c","x","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_"],
        ["x","x","_","_","_","_","_","_","_","_"],
        ["x","2","_","_","_","_","_","_","_","_"],
        ["x","x","_","_","_","_","_","_","_","_"]
    ]
}

function printScreen()
{
    var out = "<table>";
    for(var y = 0; y < maps[currentMap].length; y++ )
    {
        out += "<tr>";
        for(var x = 0; x < maps[currentMap][y].length; x++)
        {
            out += "<td>" + maps[currentMap][y] [x] + "</td>";
        }
        out += "</tr>";
    }
    out += "</table>";
    var stats = "Lives: "+ lives;
    document.getElementById("screen").innerHTML = out;


}

var currentMap = "level1";
var ifDead = false;
var lives = 3;

function specificKey(event)
{
    var keyPressed = event.key;
    return keyPressed;
}

function reset()
{

}

function bone(input)
{
    if(ifDead == false)//movement
    {
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
        else if(input == "r" || input == "R" && lives == 0)//menu button
        {
            reset();
        }
    }
}

bone();

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
            maps[currentMap][pos.Y] [pos.X] = "_";
            maps[currentMap][pos.Y-1] [pos.X] = "c";
        }
        else if(maps[currentMap][pos.Y-1] [pos.X] == "1"){
            currentMap++;
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
            maps[currentMap][pos.Y] [pos.X] = "_";
            maps[currentMap][pos.Y+1] [pos.X] = "c";
        }
        else if(maps[currentMap][pos.Y+1] [pos.X] == "I"){
            stateMSBM = 1;
            printAction("what do you want to buy?");
            printAction(storeList);
        }
        else if(maps[currentMap][pos.Y+1] [pos.X] == "1"){
            if(currentMap == "level1")
            {
                currentMap = "level2";
            }
            else if(currentMap == "level2")
            {
                currentMap = "level1";
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
            maps[currentMap][pos.Y] [pos.X] = "_";
            maps[currentMap][pos.Y] [pos.X-1] = "c";
        }
        else if(maps[currentMap][pos.Y] [pos.X-1] == "I"){
            stateMSBM = 1;
            printAction("what do you want to buy?");
            printAction(storeList);
        }
        else if(maps[currentMap][pos.Y] [pos.X-1] == "1"){
            if(currentMap == "level1")
            {
                currentMap = "level2";
            }
            else if(currentMap == "level2")
            {
                currentMap = "level1";
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
            maps[currentMap][pos.Y] [pos.X] = "_";
            maps[currentMap][pos.Y] [pos.X+1] = "c";
        }
        else if(maps[currentMap][pos.Y] [pos.X+1] == "I"){
            stateMSBM = 1;
            printAction("what do you want to buy?");
            printAction(storeList);
        }
        else if(maps[currentMap][pos.Y] [pos.X+1] == "1"){
            if(currentMap == "level1")
            {
                currentMap = "level2";
            }
            else if(currentMap == "level2")
            {
                currentMap = "level1";
            }
        }
    }
    catch(err) {
    }
    printScreen();
}