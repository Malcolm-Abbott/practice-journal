const $newEntryImg = document.querySelector('.new-entry-img');

const $photo = document.querySelector('#photo');
$photo.addEventListener('input', (event) => {
  $newEntryImg.setAttribute('src', $photo.value);
});

const $title = document.querySelector('#title');
const $notes = document.querySelector('#notes');

const $form = document.querySelector('form');
$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = $title.value;
  const photo = $photo.value;
  const notes = $notes.value;
  const values = {
    title,
    photo,
    notes,
  };
  values.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(values);
  $newEntryImg.setAttribute('src', '../images/placeholder-image-square.jpg');
  $form.reset();
});
