function createInput({ type, id = "", name = "", value = "" }) {
  const input = document.createElement("input");
  input.setAttribute("type", type);
  if (id) input.setAttribute("id", id);
  if (name) input.setAttribute("name", name);
  if (value) input.setAttribute("value", value);
  return input;
}

function createLabel({ forId, labelText }) {
  const label = document.createElement("label");
  label.setAttribute("for", forId);
  label.textContent = labelText;
  return label;
}

function createRow({ labelText, inputElement }) {
  const tr = document.createElement("tr");
  const tdLabel = document.createElement("td");
  tdLabel.appendChild(inputElement);
  const tdInput = document.createElement("td");
  tdInput.appendChild(createLabel({ forId: inputElement.id, labelText }));
  tr.appendChild(tdLabel);
  tr.appendChild(tdInput);
  return tr;
}

function createForm() {
  const form = document.createElement("form");
  const table = document.createElement("table");

  // Configuration for inputs
  const formElements = [
    { labelText: "Логін:", type: "text", id: "login" },
    { labelText: "Пароль:", type: "password", id: "password" },
    { labelText: "Повторіть пароль:", type: "password", id: "repeat-password" },
  ];

  formElements.forEach((elem) => {
    const input = createInput({ type: elem.type, id: elem.id });
    table.appendChild(
      createRow({ labelText: elem.labelText, inputElement: input })
    );
  });

  // Gender Radio Buttons
  const genderRow = document.createElement("tr");
  const genderTdLabel = document.createElement("td");
  genderTdLabel.appendChild(createLabel({ labelText: "Стать:" }));
  const genderTdInput = document.createElement("td");
  const maleInput = createInput({ type: "radio", id: "male", name: "gender" });
  const femaleInput = createInput({
    type: "radio",
    id: "female",
    name: "gender",
  });
  genderTdInput.appendChild(maleInput);
  genderTdInput.appendChild(
    createLabel({ forId: maleInput.id, labelText: "Чоловік" })
  );
  genderTdInput.appendChild(femaleInput);
  genderTdInput.appendChild(
    createLabel({ forId: femaleInput.id, labelText: "Жінка" })
  );
  genderRow.appendChild(genderTdLabel);
  genderRow.appendChild(genderTdInput);
  table.appendChild(genderRow);

  // City Select
  const citySelect = document.createElement("select");
  citySelect.setAttribute("size", "3");
  const cities = ["Житомир", "Київ", "Львів"];
  cities.forEach((city) => {
    const option = document.createElement("option");
    option.textContent = city;
    citySelect.appendChild(option);
  });
  table.appendChild(
    createRow({ labelText: "Вкажіть місто:", inputElement: citySelect })
  );

  // Interests Checkboxes
  const interestsRow = document.createElement("tr");
  const interestsTdLabel = document.createElement("td");
  interestsTdLabel.appendChild(createLabel({ labelText: "Інтереси:" }));
  const interestsTdInput = document.createElement("td");
  const interests = ["Футбол", "Шахи", "Малювання", "Музика"];
  interests.forEach((interest) => {
    const checkbox = createInput({ type: "checkbox", id: interest });
    interestsTdInput.appendChild(checkbox);
    interestsTdInput.appendChild(
      createLabel({ forId: checkbox.id, labelText: interest })
    );
  });
  interestsRow.appendChild(interestsTdLabel);
  interestsRow.appendChild(interestsTdInput);
  table.appendChild(interestsRow);

  // Buttons Row
  const buttonsRow = document.createElement("tr");
  const buttonsTd = document.createElement("td");
  buttonsTd.setAttribute("colspan", "2");
  const resetButton = document.createElement("button");
  resetButton.setAttribute("type", "reset");
  resetButton.textContent = "Очистити";
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Відправити";
  buttonsTd.appendChild(resetButton);
  buttonsTd.appendChild(submitButton);
  buttonsRow.appendChild(buttonsTd);
  table.appendChild(buttonsRow);

  form.appendChild(table);
  document.getElementById("form-container").appendChild(form);
}

createForm();
