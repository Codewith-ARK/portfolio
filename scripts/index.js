const toggle = document.getElementById('navbar-toggler').addEventListener('click', ()=>{
  const navbarItem = document.getElementById('nav-item').classList;
  if(navbarItem.contains('hidden')){
    navbarItem.add('block');
    navbarItem.remove('hidden');
  } else {
    navbarItem.add('hidden')
    navbarItem.remove('block');
  }
})