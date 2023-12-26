//Quando colocar o ? depois da propriedade ele vira opcional
function sendSpaceship(spaceship) {
    // ...
}
sendSpaceship({ pilot: 'caio', copilot: 'caua' });
sendSpaceship({ pilot: 'caio' });
//unknow pode receber outros tipos, mas outros tipos nao podem receber unknow
var input;
input = 'teste';
input = 20;
var text;
//text=input
input = text;
//O tipo any desabilita o typeScript ele
var any;
any = 'teste';
any = 20;
text = any;
input = text;
function verification(test) {
    if (test) {
    }
    else {
        var _check = void 0;
        var text_1 = _check;
        return _check;
    }
}
