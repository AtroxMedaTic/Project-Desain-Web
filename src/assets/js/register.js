function registerUser() {
      // Ambil nilai dari formulir
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Validasi formulir
      if (!username || !email || !password) {
        showToast('Gagal mendaftar. Harap isi semua kolom.', 'text-bg-danger');
        return;
      }

      // Data pengguna baru
      let newUser = {
        username: username,
        email: email,
        password: password
      };

      // Ambil data pengguna yang sudah ada di localStorage
      let existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      console.log(existingUsers);

      // Tambahkan pengguna baru ke dalam array
      existingUsers.push(newUser);

      // Simpan data ke dalam localStorage
      localStorage.setItem('users', JSON.stringify(existingUsers));

      showToast('Pendaftaran berhasil. Data tersimpan.', 'text-bg-success');
    }

    function showToast(message, toastColor) {
      const toastContainer = document.getElementById('toastContainer');
      toastContainer.innerHTML = `
      <div class="toast align-items-center ${toastColor} rounded-2 p-2 w-auto" role="alert" aria-live="assertive"
            aria-atomic="true">
            <div class="d-flex">
              <div class="toast-body">
                ${message}
              </div>
              <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                aria-label="Close"></button>
            </div>
          </div>
    `;

      const toast = new bootstrap.Toast(document.querySelector('.toast'));
      toast.show();
    }
