for(let x = 0; x < 10; x +=2) {
    recursive(x);
}

function recursive(x) {
    let div = document.createElement("div");
    div.innerHTML = x;
    document.body.append(div);
}