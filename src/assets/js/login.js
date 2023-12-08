 function login() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      showToast('Gagal login. Harap isi semua kolom.', 'danger');
      return;
    }

    // Ambil data pengguna yang sudah ada di localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Cek apakah ada pengguna dengan email dan password yang sesuai
    const user = users.find(function(u) {
      return u.email === email && u.password === password;
    });

    if (user) {
      setTimeout(() => {
        window.location.assign('/src/views/homepage.html');
      }, 1000);
      showToast('Login berhasil. Selamat datang, ' + user.username + '!', 'success');
    } else {
      showToast('Gagal login. Email atau password tidak valid.', 'danger');
    }
  }

  function showToast(message, type) {
    const toastContainer = document.getElementById('toastContainer');
    toastContainer.innerHTML = `
    <div class="alert alert-${type} alert-dismissible" role="alert">
      <div>${message}</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
    ;

    const toast = new bootstrap.Toast(document.querySelector('.toast'));
    toast.show();
  }
