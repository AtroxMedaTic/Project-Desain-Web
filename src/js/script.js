const account = [
    {username: 'admin', password: 'admin'},
];


function login(username, password) {
  const userName = document.getElementById('username');
  const passWord = document.getElementById('password');
  const subMit = document.getElementById('submit');
  subMit.addEventListener('click', () => {
    validate(userName, passWord, account);
  })
}

function validate(userName, passWord, account) {
  for (let i in account) {
    if (userName.value === account[i].username && passWord.value === account[i].password) {
          return false;
    }
  }
  alert('sign in failed');
  document.getElementsByTagName("form")[0].removeAttribute("action");
}

