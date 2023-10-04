/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

window.addEventListener('beforeunload', (event) => {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('code-journal-storage', dataJSON);
});

const dataLocalStorage = JSON.parse(
  localStorage.getItem('code-journal-storage')
);

if (dataLocalStorage) data = dataLocalStorage;
