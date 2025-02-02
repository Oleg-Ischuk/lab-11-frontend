// ===========================Task_1.2========================//

function createInput(type, id = "", name = "") {
  const input = document.createElement("input");
  input.setAttribute("type", type);
  if (id) input.setAttribute("id", id);
  if (name) input.setAttribute("name", name);
  return input;
}

function createLabel(forId, labelText) {
  const label = document.createElement("label");
  label.setAttribute("for", forId);
  label.textContent = labelText;
  return label;
}
function createForm() {
  const form = document.createElement("form");
  const table = document.createElement("table");
  function createRow(labelText, inputElement) {
    const tr = document.createElement("tr");
    const tdLabel = document.createElement("td");
    const label = createLabel(inputElement.id, labelText);
    tdLabel.appendChild(label);
    const tdInput = document.createElement("td");
    tdInput.appendChild(inputElement);
    tr.appendChild(tdLabel);
    tr.appendChild(tdInput);
    return tr;
  }
  const loginInput = createInput("text", "login");
  table.appendChild(createRow("Логін:", loginInput));
  const passwordInput = createInput("password", "password");
  table.appendChild(createRow("Пароль:", passwordInput));
  const repeatPasswordInput = createInput("password", "repeat-password");
  table.appendChild(createRow("Повторіть пароль:", repeatPasswordInput));
  const genderRow = document.createElement("tr");
  const genderTdLabel = document.createElement("td");
  genderTdLabel.appendChild(createLabel("", "Стать:"));
  const genderTdInput = document.createElement("td");
  const maleInput = createInput("radio", "male", "gender");
  const femaleInput = createInput("radio", "female", "gender");
  genderTdInput.appendChild(maleInput);
  genderTdInput.appendChild(createLabel(maleInput.id, "Чоловік"));
  genderTdInput.appendChild(femaleInput);
  genderTdInput.appendChild(createLabel(femaleInput.id, "Жінка"));
  genderRow.appendChild(genderTdLabel);
  genderRow.appendChild(genderTdInput);
  table.appendChild(genderRow);
  const citySelect = document.createElement("select");
  citySelect.setAttribute("size", "3");
  const cities = ["Житомир", "Київ", "Львів"];
  cities.forEach((city) => {
    const option = document.createElement("option");
    option.textContent = city;
    citySelect.appendChild(option);
  });
  table.appendChild(createRow("Вкажіть місто:", citySelect));
  const interestsRow = document.createElement("tr");
  const interestsTdLabel = document.createElement("td");
  interestsTdLabel.appendChild(createLabel("", "Інтереси:"));
  const interestsTdInput = document.createElement("td");
  const interests = ["Футбол", "Шахи", "Малювання", "Музика"];
  interests.forEach((interest) => {
    const checkbox = createInput("checkbox", interest);
    interestsTdInput.appendChild(checkbox);
    interestsTdInput.appendChild(createLabel(checkbox.id, interest));
  });
  interestsRow.appendChild(interestsTdLabel);
  interestsRow.appendChild(interestsTdInput);
  table.appendChild(interestsRow);
  const buttonsRow = document.createElement("tr");
  const buttonsTd = document.createElement("td");
  buttonsTd.setAttribute("colspan", "2");
  const resetButton = createInput("reset");
  resetButton.textContent = "Очистити";
  const submitButton = createInput("submit");
  submitButton.textContent = "Відправити";
  buttonsTd.appendChild(resetButton);
  buttonsTd.appendChild(submitButton);
  buttonsRow.appendChild(buttonsTd);
  table.appendChild(buttonsRow);
  form.appendChild(table);
  document.getElementById("form-container").appendChild(form);
}

createForm();
