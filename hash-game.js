let input = require('readline-sync')

//functions declaration
function header(){
    console.log('===================')
    console.log(' *** HASH GAME *** ')
    console.log('===================')
}

function footer(){
    console.log('===================')
}

function create_matriz(nrow,ncolumn){
    let matriz = []
    let array = []
    let cont = 1

    for(let row = 0;row < nrow;row++){
        for(let column = 0;column < ncolumn;column++){
            array.push(`${cont}`)
            cont++
        }
        matriz.push(array)
        array = []
    }
    return matriz
}

function show_matriz(matriz){
    for(let cont = 0;cont < (matriz.length);cont++){
        console.log(matriz[cont])
    }
}

function play(simbol, number){
    let change = false
    for(let row = 0; row < num_rows;row++){
        for(let column = 0; column < num_columns;column++){
            if(matriz3x3[row][column] == number){
                matriz3x3[row][column] = simbol
                change = true
            }
        }
    }
    return change
}

function change_player(){
    if(simbol == 'X'){
        simbol = 'O'
    }else{
        simbol = 'X'
    }
}

function end_game(){
    let end = false
    let occurrence = 0
    
    //plays in rows
    for(let row = 0; row < num_rows;row++){
        if(matriz3x3[row][0] == matriz3x3[row][1] && matriz3x3[row][1] == matriz3x3[row][2]){
            end = true
        }
    }

    //plays in columns
    for(let column = 0; column < num_columns;column++){
        if(matriz3x3[0][column] == matriz3x3[1][column] && matriz3x3[1][column] == matriz3x3[2][column]){
            end = true
        } 
    }

    //plays in diagonal
    if(matriz3x3[0][0] == matriz3x3[1][1] && matriz3x3[1][1] == matriz3x3[2][2]){
        end = true
    }
    
    if(matriz3x3[0][2] == matriz3x3[1][1] && matriz3x3[1][1] == matriz3x3[2][0]){
        end = true
    }

    //tied game
    for(let row = 0; row < num_rows;row++){
        for(let column = 0; column < num_columns;column++){
            if(matriz3x3[row][column] != 'X' && matriz3x3[row][column] != 'O'){
                occurrence++
            }
        }
    }

    if(occurrence == 0){
        end = true
    }

    //return if the game goes end or not
    return end
}

//variables declaration
let matriz3x3 = []
const num_rows = 3
const num_columns = 3
let simbol = 'X'
let position = 0
let answer = false

//data input
matriz3x3 = create_matriz(num_rows,num_columns);

//processing data output
header();
show_matriz(matriz3x3);
do{
    do{
        position = input.question(`Which position would you go to play with [${simbol}]? `)
        answer = play(simbol, position);
        if(answer == false){
            console.log(`YOU CAN NOT DO THAT!`)
        }
    
    }while(answer == false)
    change_player();
    console.clear();
    header();
    show_matriz(matriz3x3);

}while(end_game() == false)
footer();
console.log(`END GAME!`)
footer();