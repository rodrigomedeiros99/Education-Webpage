
const scheduleData = [
  { day: 'Segunda-feira', time: '14:00 - 16:00', subject: 'Programação Web 1' },
  { day: 'Quarta-feira', time: '08:00 - 10:00', subject: 'Programação Web 2' },
  { day: 'Quarta-feira', time: '10:00 - 12:00', subject: 'POO' },
  { day: 'Quinta-feira', time: '10:00 - 12:00', subject: 'POO' },
  { day: 'Quinta-feira', time: '14:00 - 16:00', subject: 'Programação Web 1' },
  { day: 'Sexta-feira', time: '08:00 - 10:00', subject: 'Mobile' },
  { day: 'Sexta-feira', time: '14:00 - 16:00', subject: 'Programação Web 2' },
];

const studentsData = [
  { name: 'João', grade1: 8.4, grade2: 9 },
  { name: 'Maria', grade1: 7.2, grade2: 7.4 },
  { name: 'Breno', grade1: 9.8, grade2: 9.5 },
  { name: 'Guilherme', grade1: 7.7, grade2: 8.2 },
  { name: 'Yury', grade1: 8, grade2: 9 },
  { name: 'Lucas', grade1: 7, grade2: 8 },
  { name: 'Allyson', grade1: 8, grade2: 5.8 },
  { name: 'Victor', grade1: 7, grade2: 7.1 },
  { name: 'Tulio', grade1: 8, grade2: 6 },
  { name: 'Rodrigo', grade1: 10, grade2: 10 },
];

function fillScheduleTable() {
  const scheduleTableBody = document.getElementById('schedule-table-body');

  scheduleData.forEach(({ day, time, subject }) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${day}</td><td>${time}</td><td>${subject}</td>`;
    scheduleTableBody.appendChild(row);
  });
}

function fillStudentsTable() {
  const studentsTableBody = document.getElementById('students-table-body');

  studentsData.forEach(({ name, grade1, grade2 }, index) => {
    const average = (grade1 + grade2) / 2;
    const row = document.createElement('tr');
    row.innerHTML = `<td>${name}</td><td><input type="number" id="grade1-${index}" value="${grade1}" /></td><td><input type="number" id="grade2-${index}" value="${grade2}" /></td><td>${average.toFixed(2)}</td><td><button onclick="updateGrades(${index})">Salvar</button></td>`;
    studentsTableBody.appendChild(row);
  });
}
function updateGrades(index) {
  const inputGrade1 = document.getElementById(`grade1-${index}`);
  const inputGrade2 = document.getElementById(`grade2-${index}`);

  const newGrade1 = parseFloat(inputGrade1.value);
  const newGrade2 = parseFloat(inputGrade2.value);

  if (isNaN(newGrade1) || isNaN(newGrade2)) {
    alert("Por favor, insira valores numéricos para as notas.");
    return;
  }

  studentsData[index].grade1 = newGrade1;
  studentsData[index].grade2 = newGrade2;

  const average = (newGrade1 + newGrade2) / 2;
  const averageCell = document.querySelectorAll("#students-table-body tr")[index].querySelectorAll("td")[3];
  averageCell.textContent = average.toFixed(2);

  alert(`Notas do aluno ${studentsData[index].name} atualizadas com sucesso!`);
}

window.onload = function () {
  fillScheduleTable();
  fillStudentsTable();
};
