import "./table.style.css";
import usersStore from "../../store/users-store";
import { showModal } from "../render-modal/modal";
import { deleteUserById } from "../../users_cases/delete_user_by_id";

let table;

const createTable = () => {
  const table = document.createElement("table");
  const tableHeaders = document.createElement("thead");
  tableHeaders.innerHTML = `
  <tr>
    <th>#Id</th>
    <th>Balance</th>
    <th>FirstName</th>
    <th>LastName</th>
    <th>Active</th>
    <th>Actions</th>
  </tr>
  `;

  const tableBody = document.createElement("tbody");
  table.append(tableHeaders, tableBody);

  return table;
};

/**
 *
 * @param {PointerEvent} event
 */
const userSelectListener = (event) => {
  const element = event.target.closest(".select-user");
  if (!element) return;

  const id = element.getAttribute("data-id");
  showModal(id);
};

/**
 *
 * @param {PointerEvent} event
 */
const userDeleteListener = async (event) => {
  const element = event.target.closest(".delete-user");
  if (!element) return;

  const id = element.getAttribute("data-id");

  try {
    await deleteUserById(id);
    await usersStore.reloadPage();
    document.querySelector("#current-page").innerText =
      usersStore.getCurrentPage();
    renderTable();
  } catch (error) {
    alert("No se pudo eliminar el usuario");
  }
};

export const renderTable = (element) => {
  // Obtenemos los usuarios
  const users = usersStore.getUsers();

  if (!table) {
    table = createTable();
    element.append(table);

    //TODO: Agregar Listeners a la tabla
    table.addEventListener("click", userSelectListener);
    table.addEventListener("click", userDeleteListener);
  }

  let tableHtml = "";
  users.forEach((user) => {
    tableHtml += `
      <tr>
        <td>${user.id}</td>
        <td>${user.balance}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.isActive}</td>
        <td>
          <a href="#" class="select-user" data-id="${user.id}">Select</a>
          |
          <a href="#" class="delete-user" data-id="${user.id}">Delete</a>
        </td>
      </tr>
    `;
  });

  table.querySelector("tbody").innerHTML = tableHtml;
};
