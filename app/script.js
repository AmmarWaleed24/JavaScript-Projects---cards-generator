const btn = document.querySelector("button");
const cards = document.querySelector(".cards");

function* buildCardContent() {
  let h2 = document.createElement("h2");
  h2.innerText = "hello from card";
  yield h2;

  let p = document.createElement("p");
  p.innerText = "this is card text";
  yield p;
}

function* cardGenerator() {
  while (true) {
    let card = document.createElement("div");
    card.className = "card";

    for (let element of buildCardContent()) {
      card.appendChild(element);
    }

    yield card;
  }
}

const generator = cardGenerator();

btn.addEventListener("click", () => {
  const result = generator.next();
  if (!result.done) {
    cards.appendChild(result.value);
  }
});
