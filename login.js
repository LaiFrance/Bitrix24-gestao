const loginForm = document.querySelector('#loginForm')

loginForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const username = document.querySelector('#usernameInput').value
  const password = document.querySelector('#passwordInput').value

  // Simulação de validação de login
  if (username === 'admin' && password === 'password') {
    // Login bem-sucedido, redirecionar para outra página
    window.location.href = 'index.html'
  } else {
    // Login inválido, exibir mensagem de erro
    alert('Invalid username or password')
  }
})