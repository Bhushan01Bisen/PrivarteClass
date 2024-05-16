let pswrd = document.getElementById('pswrd');
let toggleBtn = document.getElementById('toggleBtn');

// show hide password
toggleBtn.onclick = function () {
    if (pswrd.type === 'password') {
        pswrd.setAttribute('type', 'text');
        toggleBtn.classList.add('hide');


    } else {
        pswrd.setAttribute('type', 'password');
        toggleBtn.classList.remove ('hide');
    }


}
