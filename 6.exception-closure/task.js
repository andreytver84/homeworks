function parseCount(val) {
    let num = Number.parseInt(val);
    if (Number.isNaN(num)) {
        throw Error('Невалидное значение');
    }
    return num;
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
            throw Error('Треугольник с такими сторонами не существует');
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }
    getPerimeter() {
        return this.a+this.b+this.c;
    }
    getArea() {
        let p = this.getPerimeter()/2;
        let s = (Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c))).toFixed(3);
        return parseInt(s);
    }
}

function getTriangle(a,b,c) {
    try {
        return new Triangle(a,b,c);
    } catch {
        return {
            getArea() {
                return 'Ошибка! Треугольник не существует';
            },
            getPerimeter() {
                return'Ошибка! Треугольник не существует';
            }
        };
    }
}