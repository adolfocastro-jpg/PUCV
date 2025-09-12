import { fetchData } from "./data.js";

async function initDashboard() {
  const data = await fetchData();

  const table = document.createElement("table");
  table.innerHTML = `
    <tr>
      ${Object.keys(data[0] || {}).map(key => `<th>${key}</th>`).join("")}
    </tr>
  `;

  data.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = Object.values(row).map(val => `<td>${val}</td>`).join("");
    table.appendChild(tr);
  });

  document.body.appendChild(table);
}

initDashboard();
