let count = 1;

const addFilmInputNode = document.querySelector('.js-addFilmInput');
const addFilmBtnNode = document.querySelector('.js-addFilmBtn');
const movieListNode = document.querySelector('.js-movieList');

const movieList = () => {
  const movieListItem = document.createElement('div');
  movieListItem.classList.add('movielist__item');
  return movieListItem;
};

const radio = () => {
  const radio = document.createElement('input');
  radio.type = 'radio';
  radio.id = `radio${count}`;
  radio.classList.add('movielist__radio');
  return radio;
};

const label = () => {
  const label = document.createElement('label');
  label.setAttribute('for', `radio${count}`);
  label.setAttribute('class', 'movielist__label');
  return label;
};

const film = () => {
  const film = document.createElement('p');
  film.setAttribute('class', 'movielist__film');
  film.innerText = `${addFilmInputNode.value}`;
  return film;
};

const button = () => {
  const button = document.createElement('button');
  button.setAttribute('class', 'movielist__btn');
  button.classList.add('js-delFilm');

  const img = document.createElement('img');
  img.setAttribute('src', 'images/exit.png');
  img.setAttribute('alt', 'Удалить фильм');
  img.setAttribute('class', 'movielist__btn-img');
  button.append(img);

  return button;
};

const clearInput = (input) => {
  input.value = '';
};

addFilmBtnNode.addEventListener('click', function () {
  if (!addFilmInputNode.value) {
    return;
  }
  count++;

  const movieListItem = movieList();

  const radioEl = radio();
  const labelEl = label();
  const filmEl = film();
  const btnEl = button();

  movieListItem.append(radioEl, labelEl, filmEl, btnEl);
  movieListNode.append(movieListItem);

  setTimeout(() => {
    movieListItem.classList.add('show');
  }, 10);

  clearInput(addFilmInputNode);

  btnEl.addEventListener('click', function () {
    movieListItem.classList.add('removing');

    setTimeout(() => {
      movieListItem.remove();
    }, 300)
  });

  radioEl.addEventListener('change', function () {
    if (radioEl.checked) {
      movieListItem.classList.add('checked');
    } else {
      movieListItem.classList.remove('checked');
    }
  });
});

addFilmInputNode.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    addFilmBtnNode.click();
  }
});
