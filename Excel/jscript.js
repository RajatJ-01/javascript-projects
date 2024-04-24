  var msg=document.getElementById("msg");
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxUxg_bG1GZtcMtqU1__M3Jd7DoL6E6LW90q7pyC3J2bo24_BFu9vzielqfDTH93KnD/exec';
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML='Thank You for Subscribing!';
      })
      .catch(error => console.error('Error!', error.message))
  })