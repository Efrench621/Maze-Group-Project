var maps = {
    Inn:[
        ["_","_","_","_","1","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","I","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","c","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_"],
        0
    ],
    Outside:[
        ["_","_","_","_","x","x","x","_","_","_"],
        ["_","_","_","_","x","1","x","_","_","_"],
        ["_","_","_","_","x","c","x","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_"],
        ["x","x","_","_","_","_","_","_","_","_"],
        ["x","2","_","_","_","_","_","_","_","_"],
        ["x","x","_","_","_","_","_","_","_","_"],
        0
    ]
}

var currentMap = "Inn";

function getPos()
{
    var pos = {
        Y:0,
        X:0
    };
    for(var y = 0; y<maps[currentMap].length-1; y++)
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
            if(Math.random() <= maps[currentMap][maps[currentMap].length-1])
            {
                stateMSBM = 2;
                printAction("You are Attacted by Monsters!");
            }
        }
        else if(maps[currentMap][pos.Y-1] [pos.X] == "I"){
            stateMSBM = 1;
            printAction("what do you want to buy?");
            printAction(storeList);
        }
        else if(maps[currentMap][pos.Y-1] [pos.X] == "1"){
            if(currentMap == "Inn")
            {
                currentMap = "Outside";
            }
            else if(currentMap == "Outside")
            {
                currentMap = "Inn";
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
            maps[currentMap][pos.Y] [pos.X] = "_";
            maps[currentMap][pos.Y+1] [pos.X] = "c";
            if(Math.random() <= maps[currentMap][maps[currentMap].length-1])
            {
                stateMSBM = 2;
                printAction("You are Attacted by Monsters!");
            }
        }
        else if(maps[currentMap][pos.Y+1] [pos.X] == "I"){
            stateMSBM = 1;
            printAction("what do you want to buy?");
            printAction(storeList);
        }
        else if(maps[currentMap][pos.Y+1] [pos.X] == "1"){
            if(currentMap == "Inn")
            {
                currentMap = "Outside";
            }
            else if(currentMap == "Outside")
            {
                currentMap = "Inn";
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
            if(Math.random() <= maps[currentMap][maps[currentMap].length-1])
            {
                stateMSBM = 2;
                printAction("You are Attacted by Monsters!");
            }
        }
        else if(maps[currentMap][pos.Y] [pos.X-1] == "I"){
            stateMSBM = 1;
            printAction("what do you want to buy?");
            printAction(storeList);
        }
        else if(maps[currentMap][pos.Y] [pos.X-1] == "1"){
            if(currentMap == "Inn")
            {
                currentMap = "Outside";
            }
            else if(currentMap == "Outside")
            {
                currentMap = "Inn";
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
            if(Math.random() <= maps[currentMap][maps[currentMap].length-1])
            {
                stateMSBM = 2;
                printAction("You are Attacted by Monsters!");
            }
        }
        else if(maps[currentMap][pos.Y] [pos.X+1] == "I"){
            stateMSBM = 1;
            printAction("what do you want to buy?");
            printAction(storeList);
        }
        else if(maps[currentMap][pos.Y] [pos.X+1] == "1"){
            if(currentMap == "Inn")
            {
                currentMap = "Outside";
            }
            else if(currentMap == "Outside")
            {
                currentMap = "Inn";
            }
        }
    }
    catch(err) {
    }
    printScreen();
}