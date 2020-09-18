const scriptURL = 'https://script.google.com/macros/s/AKfycbwaIC0d_F7Oxaf_OWIxtkoJWXO-9UG4T1xPtUOP1AeY47cnLaC7/exec'
const form = document.forms['google-sheet']
const form1 = document.forms['google-sheet1']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
      .catch(error => console.error('Error!', error.message))
})

form1.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form1)})
      .then(response => alert("Login successful"))
      .catch(error => console.error('Error!', error.message))
})

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
function openForm1() {
    document.getElementById("myForm1").style.display = "block";
}
  
  function closeForm1() {
    document.getElementById("myForm1").style.display = "none";
}
