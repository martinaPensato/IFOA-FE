const check = function () {
  if (localStorage.getItem('user')) {
    txt = 'Ehi, ' + localStorage.getItem('user')
  } else {
    txt = 'No data'
  }
  document.querySelector('.title').innerHTML = txt
}

const save = function () {
  let user = document.getElementById('user').value
  localStorage.setItem('user', user)
  check()
}

const deleteData = function () {
  localStorage.removeItem('user')
  check()
}

window.onload = check


let i = sessionStorage.getItem('count')
        ? parseInt(sessionStorage.getItem('count'))
        : 0

      const conta = function () {
        i = i + 1
        document.getElementById('timer').innerText =
          i + ' secondi di sessione aperta'
        sessionStorage.setItem('count', i)
      }

      setInterval(conta, 1000)
