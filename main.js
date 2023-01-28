async function changeEmail() {
  let ajax = new XMLHttpRequest();
  let url = 'https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1';
  ajax.onloadend = function() {
    let json = JSON.parse(this.responseText);
    let ats = json.toString();
    document.getElementById('email').textContent = ats;
  }
  ajax.open('GET', url);
  ajax.send();
}

async function copyt() {
  let copyt = document.getElementById('email');
  copyt.select();
  document.execCommand('copy');
  document.getElementById('info').textContent = 'Email successfully copied'
}