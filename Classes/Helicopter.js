class Helicopter extends Plane {
    constructor(_size = 0.19){
        super()
        this.size = _size
        this.oldVel = null
    }
   
    render(){
        if(this.alert == true)
        {
            noFill()
            stroke(255,0,0)
            ellipse(this.pos.x,this.pos.y,40)
            stroke(0,255,0)
        }
        push()
        strokeWeight(5)
        stroke(255)
        translate(this.pos.x, this.pos.y)
        rotate(this.velocity.heading()+90)
        scale(this.size)
        line (0,0, 0,50)
        line (5,50,0,50)
        push()
        rotate(degrees(45))
        rect (0,0,2,30)
        rect (0,0,30,2)
        pop()
        pop()
        this.alert = false;
    }   

    hover(){
        this.oldVel = this.velocity;
        this.velocity -= this.velocity;
    }

    unHover(){
        console.log('unhovering' + this.oldVel)
        if(this.velocity.x == 0 && this.velocity.y == 0){
            this.velocity += this.oldVel
        }
    }

    checkLimits(){
        super.checkLimits()
    }

    faster(){
        super.faster()
    }

    slower(){
        super.slower()
    }
}