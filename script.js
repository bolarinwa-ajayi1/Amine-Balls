const container = document.querySelector('.container');

container.style.width = '100%';
container.style.height = '100vh';
container.style.backgroundColor = '#0D1116'
// container.style.position=' relative'


// container.style 

class Ball{
    constructor(props) { 
        this.ball= document.createElement('div'); 
        this.b = {left:props.left, top:props.top, w: props.size, h:props.size, dx:1,dy:1, speed: 10, ani:{}, move:false}
        this.ball.style.position= "absolute";
        this.ball.style.left= props.left + 'px'; 
        this.ball.style.top= props.top + 'px'; 
        this.ball.style.width= props.size + 'px'; 
        this.ball.style.height= props.size + 'px';
        this.ball.style.backgroundColor= props.backgroundColor; 
        this.ball.style.borderRadius  ="50%";

        this.size = props.size;
        this.control= document.querySelector('.controlBtn');
        this.control.style.width = '70px';
        this.control.style.height = '30px';
        this.control.style.borderRadius= '7px';
        this.control.style.backgroundColor='white';
        this.control.style.position= "absolute";
        this.control.style.left= "10px"; 
        this.control.style.top= "20px"; 
        this.control.style.padding = "5px";
        this.control.style.display = "flex";
        this.control.style.justifyContent= "center";
        this.control.style.alignItems = "center";


        this.control.addEventListener('click',()=>{

            // this.resize(Math.floor(Math.random()* 100));
        
                if (this.b.move !== true){
                    this.b.ani = window.requestAnimationFrame(this.mover().bind(this));
                    this.b.move = true; 
                }else{
                   cancelAnimationFrame(this.b.ani);
                   this.b.move = false
                  
                }  
        })
    }

    addToContainer(){
        container.append(this.ball);
    }

    resize(newSize){
        this.ball.style.width= newSize + "px"; 
        this.ball.style.height= newSize +"px"; 
    }

    
    mover(){
        //bounce effect limit

        if(this.b.top >= 590 - this.b.h || this.b.top < 0){
            this.b.dy *= -1;

        }

        if(this.b.left >= 1000 - this.b.w || this.b.left < 0){
            this.b.dx *= -1;
        }
       
        //set ball direction
        this.b.left += this.b.dx * this.b.speed;
        this.b.top += this.b.dy  * this.b.speed;

        //set ball position
        this.ball.style.left= this.b.left + 'px';
        this.ball.style.top= this.b.top + 'px';

        
        //animation continuation

        if(this.b.move = true){
                this.b.ani = window.requestAnimationFrame(this.mover.bind(this));  
                // console.log('Bolarinwa the best world class engineer'); 
            }else{
            console.log('Bolarinwa the great engineer');
            }
        }
        
}

const ballLog = [];

for (let i = 0; i < 10 ; i++){
    const addBall = new Ball({top:genNum(500), left:genNum(1000), size:50, backgroundColor: getRandomColor()});
    addBall.addToContainer();
    ballLog.push(addBall);

}

// console.log(ballLog);


function genNum(upperLimit){
    return Math.floor(Math.random()* upperLimit);
}

function  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

