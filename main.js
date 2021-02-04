var count = 0;

//config page load
addEventListener('load',function(){
    document.getElementById('quot').innerHTML="The only power a person has is the ability to change himself"
    document.getElementById('author').innerHTML='saitama :)'
    //desighn left arrow in start
    document.getElementById('left').style.cursor='not-allowed'
    document.getElementById('left1').style.animation = 'moveleft1 1s forwards'; 
    document.getElementById('left2').style.animation = 'moveleft2 1s forwards'; 
  
})

//set slider for quotations
var slide = setInterval(function(){
    var stop = 0;
    if(count < data.length){
    document.getElementById('quot').innerHTML=data[count].quotation
    document.getElementById('author').innerHTML=data[count].author
    count++
}   else if (count===data.length) {
    count=0;
    stop +=1;
  }; 
    
 if(stop === 3){
      clearInterval(slide);
  };
  //config left arrow  after 2 index
 if(count>1){
    document.getElementById('left').style.cursor='pointer'
    document.getElementById('left1').style.animation = 'moveleftold1 1s forwards'; 
    document.getElementById('left2').style.animation = 'moveleftold2 1s forwards'; 
    //config right arrow after 2 index
 }
}, 8000)
//receive data from data js
function setData(index) {
    document.getElementById('quot').innerHTML=data[index].quotation
    document.getElementById('author').innerHTML=data[index].author
  
}
setData(count);

//config left arrow
function leftArr(index){
     
    if(index!==0){
        document.getElementById('left').style.cursor='pointer'
        document.getElementById('left1').style.animation = 'moveleftold1 1s forwards'; 
        document.getElementById('left2').style.animation = 'moveleftold2 1s forwards'; 
        
    }else{
        document.getElementById('left').style.cursor='not-allowed'
        document.getElementById('left1').style.animation = 'moveleft1 1s forwards'; 
        document.getElementById('left2').style.animation = 'moveleft2 1s forwards'; 
    }
}
//config right arrow
function rightArr(index){
    
    if(count<data.length-1){
        document.getElementById('right').style.cursor='pointer'
        document.getElementById('right1').style.animation = 'moverightold1 1s forwards'; 
        document.getElementById('right2').style.animation = 'moverightold2 1s forwards'; 
    }else{
        document.getElementById('right').style.cursor='not-allowed'
        document.getElementById('right1').style.animation = 'moveright1 1s forwards'; 
        document.getElementById('right2').style.animation = 'moveright2 1s forwards'; 
    }

}

//set right arrow
function right(){
    
    if(count< data.length-1){
        clearInterval(slide)
        count++;
        setData(count)
        count === data.length-1 ? rightArr(count) : leftArr(count)
       
       
   } 
}
//set left arrow

function left(){
    
    if(count !== 0){
        clearInterval(slide)
        count--;
        setData(count)
        count !==0 ? rightArr(count) : leftArr(count)
       
    }
    }
 






 







