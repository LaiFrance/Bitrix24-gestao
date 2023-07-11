// credenciais da API
const domain = 'b24-4qk6uy.bitrix24.com.br'
const accessToken = 's0mujvynyef1p9vh'

// Obter perfil
axios
  .get(`https://${domain}/rest/1/${accessToken}/profile.json`)
  .then((response) => {
    console.log(response.data.result)
  })
  .catch((error) => {
    console.log(error.response.data)
  })

// Função para carregar os departamentos do Bitrix24
function carregarDepartamentos() {
  const url =
    'https://b24-4qk6uy.bitrix24.com.br/rest/1/wkve83h3dtso2txe/department.get.json'

  axios
    .get(url)
    .then((response) => {
      const selectDepartments = document.querySelector('#selectDepartments')

      response.data.result.forEach((department) => {
        const option = document.createElement('option')
        option.value = department.ID
        option.textContent = department.NAME

        selectDepartments.appendChild(option)
      })
    })
    .catch((error) => {
      console.error(error)
    })
}

// Chama a função para carregar os departamentos ao carregar a página
document.addEventListener('DOMContentLoaded', carregarDepartamentos)
