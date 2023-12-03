const account = [
    {username: 'admin@gmail.com', password: 'admin'},
];

function active() {
  document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.sidebar .main .navbar .sidebar-menu a');

    links.forEach(function (link) {
    link.addEventListener('click', function () {
        links.forEach(function (l) {
          l.classList.remove('active-link');
        });
        this.classList.add('active-link');
      });
    });
  });
}

const userName = document.getElementById('username');
const passWord = document.getElementById('password');
const subMit = document.getElementById('submit');

subMit.addEventListener('click', () => {
    validate(userName, passWord, account);
});

function validate(userName, passWord, account) {
        for (let i in account) {
            if (userName.value === account[i].username && passWord.value === account[i].password) {
              alert('Login successfully');
              document.getElementsByTagName("form")[0].setAttribute("action", "src//views/homepage.html");
            } else {
                alert('sign in failed');
                document.getElementsByTagName("form")[0].removeAttribute("action");
            }
        }
    }

active();
