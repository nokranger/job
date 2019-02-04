
const url = 'process.php';
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const files = document.querySelector('[type=file]').files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
        let file = files[i];

        formData.append('pic', file);
    }

    fetch(url, {
        method: 'POST',
        body: formData
    }).then(response => {
        insert_value();
        console.log(response);
    });
});
