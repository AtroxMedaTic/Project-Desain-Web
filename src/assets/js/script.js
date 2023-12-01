function active() {
  document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.sidebar .main .navbar .sidebar-menu a');

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

active();
