function parseCount(val) {
    let num = Number.parseInt(val);
    if (Number.isNaN(num)) {
        throw new ReferenceError('Невалидное значение');
    } else {
        return num;
    }
}

function validateCount(val2) {
    try {
        return parseCount(val2);
    } catch(err) {
        return err;
    }    
}

class Triangle {
    constructor(a,b,c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new ReferenceError('Треугольник с такими сторонами не существует');
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }
    getPerimeter() {
        let per = this.a+this.b+this.c;
        return per;
    }
    getArea(per) {
        let p = per/2;
        let s = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3);
        return parseInt(s);
    }
}

function getTriangle(A,B,C) {
    try {
        return new Triangle(A,B,C);
    } catch {
        return {
            getArea() {
                console.log('Ошибка! Треугольник не существует');
            },
            getPerimeter() {
                console.log('Ошибка! Треугольник не существует');
            }
        };
    }
}