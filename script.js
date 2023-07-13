 // Credenciais da API
 const domain = 'b24-4qk6uy.bitrix24.com.br'
 const accessToken = 's0mujvynyef1p9vh'

 // Função para carregar os departamentos do Bitrix24
 function carregarDepartamentos() {
   const url = `https://${domain}/rest/1/wkve83h3dtso2txe/department.get.json`

   axios
     .get(url)
     .then((response) => {
       const selectDepartments = document.querySelector(
         '#selectDepartments',
       )
       selectDepartments.innerHTML = '' // Limpar as opções existentes no select
       //mostrar os departamentos e seus respectivos funcionários
       response.data.result.forEach((department) => {
         const option = document.createElement('option')
         option.value = department.ID
         option.textContent = department.NAME
         selectDepartments.appendChild(option)
       })
       console.log(response.data.result)
     })
     .catch((error) => {
       console.log(error)
     })
 }

 // Função para carregar as tarefas do Bitrix24
 function carregarTarefas() {
   const selectedDepartmentId = document.querySelector(
     '#selectDepartments',
   ).value
   axios
     .get(
       `https://b24-4qk6uy.bitrix24.com.br/rest/1/1yt2djsnutdogdar/task.item.list.json`,
     )
     .then((response) => {
       const tabelaBitrix24 = document.querySelector(
         '#tabelaBitrix24 tbody',
       )
       tabelaBitrix24.innerHTML = '' // Limpar as linhas existentes na tabela

       response.data.result.forEach((task) => {
         const tr = document.createElement('tr')

         const tdFuncionario = document.createElement('td')
         tdFuncionario.textContent =
           task.RESPONSIBLE_NAME + ' ' + task.RESPONSIBLE_LAST_NAME

         const tdIdTarefa = document.createElement('td')
         tdIdTarefa.textContent = task.ID

         const tdTempoDecorrido = document.createElement('td')
         tdTempoDecorrido.textContent =
           task.TIME_SPENT_IN_LOGS +
           ' minutos' +
           ' ' +
           (task.TIME_SPENT_IN_LOGS / 60 + ' horas')

         tr.appendChild(tdFuncionario)
         tr.appendChild(tdIdTarefa)
         tr.appendChild(tdTempoDecorrido)

         tabelaBitrix24.appendChild(tr)
       })

       console.log(response.data.result)
     })
     .catch((error) => {
       console.error(error)
     })
 }

 // Função para carregar os colaboradores do Bitrix24
 function carregarColaboradores() {
   const url =
     'https://b24-4qk6uy.bitrix24.com.br/rest/1/1yt2djsnutdogdar/task.item.list.json'

   axios
     .get(url)
     .then((response) => {
       const tabelaColaboradores = document.querySelector(
         '#outraTabela tbody',
       )
       tabelaColaboradores.innerHTML = '' // Limpar as linhas existentes na tabela

       response.data.result.forEach((colaborador) => {
         const tr = document.createElement('tr')

         const tdColaborador = document.createElement('td')
         tdColaborador.textContent =
           colaborador.RESPONSIBLE_NAME +
           ' ' +
           colaborador.RESPONSIBLE_LAST_NAME

         const tdFusoHorario = document.createElement('td')
         tdFusoHorario.textContent = colaborador.TIME_SPENT_IN_LOGS

         tr.appendChild(tdColaborador)
         tr.appendChild(tdFusoHorario)

         tabelaColaboradores.appendChild(tr)
       })

       console.log(response.data.result)
     })
     .catch((error) => {
       console.error(error)
     })
 }

 // Chama a função para carregar os departamentos ao carregar a página
 document.addEventListener('DOMContentLoaded', carregarDepartamentos)
 document.addEventListener('DOMContentLoaded', carregarTarefas)
 document.addEventListener('DOMContentLoaded', carregarColaboradores)