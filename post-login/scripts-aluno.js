const horariosData = [
    { dia: 'Segunda-feira', horario: '8:00 - 10:00', disciplina: 'Matemática Discreta' },
    { dia: 'Segunda-feira', horario: '10:00 - 12:00', disciplina: 'Devops' },
    { dia: 'Terça-feira', horario: '8:00 - 10:00', disciplina: 'Cálculo 1' },
    { dia: 'Terça-feira', horario: '10:00 - 12:00', disciplina: 'UI-UX' },
    { dia: 'Quarta-feira', horario: '8:00 - 10:00', disciplina: 'Matemática Discreta' },
    { dia: 'Quarta-feira', horario: '10:00 - 12:00', disciplina: 'Cálculo 1' },
    { dia: 'Quinta-feira', horario: '8:00 - 10:00', disciplina: 'POO' },
    { dia: 'Quinta-feira', horario: '10:00 - 12:00', disciplina: 'Devops' },
    { dia: 'Sexta-feira', horario: '8:00 - 10:00', disciplina: 'Matemática Discreta' },
    { dia: 'Sexta-feira', horario: '10:00 - 12:00', disciplina: 'POO' },
  ];
  const disciplinasData = [
    { disciplina: 'Matemática Discreta', nota1: 7, nota2: 8 },
    { disciplina: 'UI-UX', nota1: 6, nota2: 9 },
    { disciplina: 'POO', nota1: 9, nota2: 8 },
    { disciplina: 'Estruturas de Dados', nota1: 6, nota2: 8 },
    { disciplina: 'Cálculo 1', nota1: 7, nota2: 7 },
    { disciplina: 'DevOps', nota1: 10, nota2: 9.2 },
  ];
  
  function fillHorariosTable() {
    const horariosTableBody = document.getElementById('horarios-table-body');
  
    horariosData.forEach(({ dia, horario, disciplina }) => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${dia}</td><td>${horario}</td><td>${disciplina}</td>`;
      horariosTableBody.appendChild(row);
    });
  }
  function fillDisciplinasTable() {
    const disciplinasTableBody = document.getElementById('disciplinas-table-body');
  
    disciplinasData.forEach(({ disciplina, nota1, nota2 }) => {
      const average = (nota1 + nota2) / 2;
      const row = document.createElement('tr');
      row.innerHTML = `<td>${disciplina}</td><td>${nota1}</td><td>${nota2}</td><td>${average.toFixed(2)}</td>`;
      disciplinasTableBody.appendChild(row);
    });
  }
  window.onload = function () {
    fillHorariosTable();
    fillDisciplinasTable();
  };
  