function CheckInput() {
  let inputStr = document.querySelector('.hero__search-line__input').value;
  if (inputStr.match(/[!@#$%^&*()]/) || inputStr.length < 4 || inputStr.length > 12) {
    document.querySelector('.hero__search-line__input').classList.add('form_wrong');
    return false;
  }
  document.querySelector('.hero__search-line__input').classList.remove('form_wrong');
  return true;
}


document.querySelector('.hero__search-line__input').addEventListener('focus', function(e) {
  document.querySelector('.hero__search-line__input').addEventListener('keyup', function (e){CheckInput()})
})