// Credenciais da API
const domain = 'b24-4qk6uy.bitrix24.com.br'
const accessToken = 's0mujvynyef1p9vh'

// Função para carregar os departamentos do Bitrix24
function carregarDepartamentos() {
  const url = `https://${domain}/rest/1/wkve83h3dtso2txe/department.get.json`

  axios
    .get(url)
    .then((response) => {
      const selectDepartments = document.querySelector('#selectDepartments')

      response.data.result.forEach((department) => {
        const option = document.createElement('option')
        option.value = department.ID
        option.textContent = department.NAME
        option.setAttribute('data-department', department.ID)
        option.setAttribute('data-department-name', department.NAME)
        option.setAttribute('data-department-parent', department.PARENT)
        option.setAttribute('data-department-sort', department.SORT)

        selectDepartments.appendChild(option)
      })
      console.log(response.data.result)
    })
    .catch((error) => {
      console.error(error)
    })
}

// Função para carregar os colaboradores do Bitrix24
function carregarColaboradores() {
  const url = `https://${domain}/rest/1/wkve83h3dtso2txe/user.get.json`

  axios
    .get(url)
    .then((response) => {
      const tbody = document.querySelector('#tabelaBitrix24 tbody')
      const tbody2 = document.querySelector('#outraTabela tbody')

      response.data.result.forEach((colaborador) => {
        const tr = document.createElement('tr')
        const td = document.createElement('td')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')

        td.textContent = colaborador.NAME
        td2.textContent = colaborador.ID
        td3.textContent = colaborador.TIME_ZONE_OFFSET

        tr.appendChild(td)
        tr.appendChild(td2)
        tr.appendChild(td3)

        tbody.appendChild(tr)
      })

      console.log(response.data.result)
    })
    .catch((error) => {
      console.error(error)
    })
}

// função tempo gasto
function tempoGasto() {
  const tempoGasto = document.querySelector('#tempoGasto')
  const tempoEstimado = document.querySelector('#tempoEstimado')
  const tempoRestante = document.querySelector('#tempoRestante')

  const tempoGastoValue = tempoGasto.value
  const tempoEstimadoValue = tempoEstimado.value

  const tempoRestanteValue = tempoEstimadoValue - tempoGastoValue

  tempoRestante.value = tempoRestanteValue
}

// Chama a função para carregar os departamentos e colaboradores ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  carregarDepartamentos()
  carregarColaboradores()
})
