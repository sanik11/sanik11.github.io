var data = [];
var nam = 1;

function randomNumber(m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
};

add_form.addEventListener("click", function() {
    nam += 1;
    let y = document.getElementsByTagName("input");

    for (var i = 0; i < (y.length - 1); i++) {
        data[i] = y[i].value;
    }

    var node = '<div class="row my_row"><div class="card-panel teal lighten-2"><h4>Form ' + nam + '</h4></div> <div class="input-field col s6"> <i class="material-icons prefix">account_circle</i> <input id="icon_prefix' + nam + '" type="text" class="validate"> <label for="icon_prefix' + nam + '">Name</label> </div> <div class="input-field col s6"> <i class="material-icons prefix">email</i> <input id="email' + nam + '" type="email" class="validate"> <label for="email' + nam + '">Email</label> </div> <div class="input-field col s6"> <i class="material-icons prefix">phone</i> <input id="icon_telephone' + nam + '" type="tel" class="validate"> <label for="icon_telephone' + nam + '">Telephone</label> </div> <div class="input-field col s6"> <i class="material-icons prefix">lock_open</i> <input id="password' + nam + '" type="password" class="validate"> <label for="password' + nam + '">Password</label> </div>   </div>';
    document.getElementsByClassName("wrap")[0].innerHTML = document.getElementsByClassName("wrap")[0].innerHTML + node;
    for (var i = 0; i < y.length; i++) {
        if (data[i] != undefined) {
            y[i].value = data[i];
        } else {
            y[i].value = '';
        }
    }

})

del_form.addEventListener("click", function() {
    var node = document.getElementsByClassName("row")[nam - 1];
    if (node != undefined) {
        document.getElementsByClassName("wrap")[0].removeChild(node);
        nam -= 1;
        data = data.slice(4);
    }
})

clean.addEventListener("click", function() {
    let y = document.getElementsByTagName("input");
    data = [];
    for (var i = 0; i < y.length; i++) {
        y[i].value = '';
    }
})

var aspmA = randomNumber(1, 23);
var aspmB = randomNumber(1, 23);
var sumAB = aspmA + aspmB;
document.getElementById('aspm').innerHTML = aspmA + ' + ' + aspmB + ' = ';


cons.addEventListener("click", function() {
    let y = document.getElementsByTagName("input");

    for (var i = 0; i < (y.length - 1); i++) {
        data[i] = y[i].value;
    }

    if (document.getElementById("text-captcha").value == sumAB) {

        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
    } else {
        confirm("Введіть правильне число з картинки!")
    }

})