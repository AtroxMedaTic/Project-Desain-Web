function active() {
  document.querySelectorAll('ul li a').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelectorAll('ul li a').forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

function toggleSidebar() {
  const sideNav = document.querySelector('.side-nav');
  sideNav.style.left = sideNav.style.left === '0px' ? '-250px' : '0px';
}

function search(){
  const value = document.querySelector('input').value;
  const iconSearch = document.querySelector('.search-icon');

  if(value !== ''){
    iconSearch.style.display = 'none';
  } else {
    iconSearch.style.display = 'block';
  }

}

active();
toggleSidebar();
