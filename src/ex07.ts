class Ponto {
    x:number;
    y:number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    distancia(ponto:Ponto):number{
        let dx = ponto.x - this.x;
        let dy = ponto.y - this.y;
        dx = dx ** 2;
        dy = dy ** 2;

        return Math.sqrt(dx + dy);
    }
}

const a = new Ponto(3,5);
const b = new Ponto(1,2);
console.log("Distancia", a.distancia(b));