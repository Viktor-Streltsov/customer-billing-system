function regis() {
    let login = document.querySelector('.login');
let btnreg = document.querySelector('.btn');

btnreg.addEventListener('click', function(e) {
    if(login.value === 'admin') {
        this.href="../Adminpage/index.html";
    }else {
        this.href="../Userpage/index.html";
    }
});
};

regis();