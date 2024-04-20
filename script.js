let player='X';
let status=false;
function restart(){
    document.getElementById("one").textContent=null;
    document.getElementById("two").textContent=null;
    document.getElementById("three").textContent=null;
    document.getElementById("four").textContent=null;
    document.getElementById("five").textContent=null;
    document.getElementById("six").textContent=null;
    document.getElementById("seven").textContent=null;
    document.getElementById("eight").textContent=null;
    document.getElementById("nine").textContent=null;
    document.getElementById("result-text").textContent="";
    status=false;
}

function checkequals(id1,id2,id3){
    return document.getElementById(id1).textContent===document.getElementById(id2).textContent&&document.getElementById(id2).textContent===document.getElementById(id3).textContent&&document.getElementById(id3).textContent!="";
}

function check(){
    arrlist = [
    ['one', 'two', 'three'],
    ['four', 'five', 'six'],
    ['seven', 'eight', 'nine'],
    ['one', 'four', 'seven'],
    ['two', 'five', 'eight'],
    ['three', 'six', 'nine'],
    ['one', 'five', 'nine'],
    ['three', 'five', 'seven']
    ]
        
        for(let i=0;i<8;i++){
            if(checkequals(arrlist[i][0],arrlist[i][1],arrlist[i][2])){
                status=true;
                
                document.getElementById("result-text").textContent=player+" has won! Press restart to play again."
                
                
            }
            
        }
        player= player==='X' ? 'O':'X' 
        
}
function play(cell_id){
    
    if(document.getElementById(cell_id).textContent==""&&status==false){
        document.getElementById(cell_id).textContent=player;
        setTimeout(()=>{
            check();
        },0)
        
        
    }
}




