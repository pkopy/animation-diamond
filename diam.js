function sq(){
var colors=['yellow','red','green','blue','lightblue','pink','white','grey']
var color = document.getElementById('color')
color.addEventListener('click',aha)

function aha(){
    var b=Math.floor((Math.random()*colors.length)+1)
    //console.log(b)
        square1(colors[b],0)
        color.value='CLEAR'
        color.disabled=true
        color.removeEventListener('click',aha)
        setTimeout(function(){
        color.addEventListener('click',remove)
          color.disabled=false
            color.style.color.hover=color[b];
        },4000)
       
       }

function remove(){
     var body = document.getElementsByTagName('body')[0]
     var dd = document.querySelectorAll('div')
         for(let i=0;i<dd.length;i++){
            var dd1=dd[i]
            color.removeEventListener('click',remove)
            color.value='START'
            body.removeChild(dd1)
            color.addEventListener('click',aha)
           }
 }
 
  


    function square1(color,vector){
   var check1 =0;
  for (let i = 0; i <= 10; i++) {
   
    setTimeout(function() {
        hop1(i,0,0,0);
    }, i*100);
    var t1=i*100;
    var m1 =i;
}
setTimeout(function(){
for (let i = 0; i <= m1; i++) {
   
    setTimeout(function() {
        hop1(m1,i,0,0);
    }, i*100);
   
}
},t1)
setTimeout(function(){
for (let i = m1; i >= 0; i--) {
   
    setTimeout(function() {
        hop1(-i,m1,10,0);
    }, i*100);
   
}
},t1*2)
setTimeout(function(){
for (let i = m1; i >= 0; i--) {
   
    setTimeout(function() {
        hop1(m1,-i,0,10);
    }, i*100);
   
}
},t1*3)

function hop1(a,b,c,d){ 
        
var div=document.createElement('div')
var name = 'diva'+check1;
div.id = name;
div.style.position='absolute';
div.style.backgroundColor=color;
div.style.border='1px solid black'
div.style.width='20px';
div.style.height='20px';
//div.style.margin='15px'
div.style.transform='-webkit-transform: rotateZ(45deg)'
div.style.transform='rotateZ(45deg)'
div.style.left =80+(a*40)+(c*40)+(-d*40)+vector+'px'
div.style.top = 40+40*b+(d*40)+'px'
div.style.opacity = 0
var body = document.getElementsByTagName('body')[0]
body.appendChild(div)
var bb = document.getElementsByTagName('div')[check1]
check1++
console.log(bb)
move(bb,linear)
    }
   }
}
