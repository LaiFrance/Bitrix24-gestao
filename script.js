// Credenciais da API
const domain = 'b24-4qk6uy.bitrix24.com.br';
const accessToken = 's0mujvynyef1p9vh';

// Função para carregar os departamentos do Bitrix24
function carregarDepartamentos() {
  const url = `https://${domain}/rest/1/wkve83h3dtso2txe/department.get.json`;

  axios
    .get(url)
    .then((response) => {
      const selectDepartments = document.querySelector('#selectDepartments');

      response.data.result.forEach((department) => {
        const option = document.createElement('option');
        option.value = department.ID;
        option.textContent = department.NAME;
        option.setAttribute('data-department', department.ID);
        option.setAttribute('data-department-name', department.NAME);
        option.setAttribute('data-department-parent', department.PARENT);
        option.setAttribute('data-department-sort', department.SORT);

        selectDepartments.appendChild(option);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

// Função para carregar os colaboradores do Bitrix24
function carregarColaboradores() {
  const url = `https://${domain}/rest/1/wkve83h3dtso2txe/user.get.json`;

  axios
    .get(url)
    .then((response) => {
      response.data.result.forEach((colaborador) => {
        const tbody = document.querySelector('#tabelaBitrix24 tbody');

        const row = document.createElement('tr');
        const funcionarioCell = document.createElement('td');
        funcionarioCell.textContent = colaborador.NAME;
        row.appendChild(funcionarioCell);

        const taskIdCell = document.createElement('td');
        taskIdCell.textContent = colaborador.ID;
        row.appendChild(taskIdCell);

        const tempoEstimadoCell = document.createElement('td');
        tempoEstimadoCell.textContent = colaborador.DURATION;
        row.appendChild(tempoEstimadoCell);

        tbody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

// Chama a função para carregar os departamentos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  carregarDepartamentos();
  carregarColaboradores();
});
