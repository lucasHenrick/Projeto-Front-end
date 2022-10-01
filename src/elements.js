export function getTodoItem({ id, name, status, onDelete, onUpdate }) {
  const element = document.createElement("div");
  element.className = "row mt-2";

  const elementComplete = document.createElement("div");
  elementComplete.className = "col-4";
  elementComplete.append(getCheckbox({ status, onClick: onUpdate }));

  element.append(elementComplete);

  const elementName = document.createElement("div");
  elementName.className = "col-4";
  elementName.append(name);

  element.append(elementName);

  const elementDelete = document.createElement("div");
  elementDelete.className = "col-4 d-flex flex-row-reverse";
  elementDelete.append(getDeleteButton({ onClick: onDelete }));

  element.append(elementDelete);
  return element;
}

export function getDeleteButton({ onClick }) {
  const button = document.createElement("button");

  button.onclick = () => {
    button.disabled = "disabled";
    onClick();
  };

  button.className = "btn btn-danger";

  const elementSpamDelete = document.createElement("spam");
  elementSpamDelete.className = "material-icons";
  elementSpamDelete.innerHTML = "delete";
  button.append(elementSpamDelete);

  return button;
}

export function getCheckbox({ status, onClick }) {
  const button = document.createElement("input");
  button.setAttribute("type", "checkbox");
  //button.innerHTML = status === "pending" ? "complete" : "undo";

  button.onclick = () => {
    const check = button.checked ? true : false;
    button.checked = check;
  };

  return button;
}
