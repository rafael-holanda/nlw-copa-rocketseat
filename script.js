function createGame(player1, player2, hour) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="">
    </li>
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
    </div>
  `;
}

document.querySelector("#app").innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="">
  </header>
  <main id="cards">
    ${createCard("24/11", "quinta", createGame("brazil", "serbia", "16:00"))}
    ${createCard("28/11", "segunda", createGame("brazil", "switzerland", "13:00") + createGame("portugal", "uruguai", "14:00"))}
    ${createCard("02/12", "sexta", createGame("brazil", "cameroon", "16:00"))}
  </main>
`;
