import data from './data.js';

const root = document.querySelector("#root");

function main() {
  console.log(data);
  
  const section = document.createElement('section');
  section.className = 'intro';

  const h1 = document.createElement('h1');
  h1.className = 'intro__header';
  h1.innerText = 'Visualized and clarified by AI.'

  section.append(h1);
  root.append(section);

  const container = document.createElement('section');
  container.className = 'container';


  for (const image of data) {
    const card = document.createElement("div");
    card.className = 'card';

    const h1 = document.createElement("h1");
    h1.className = 'card__header';
    h1.innerText = data.title;
  
    const body = document.createElement("div");
    body.className = 'card__body';
    body.src = data.text;

    const imgbody = document.createElement('div');
    imgbody.className = 'card_body_image';

    const imgtext = document.createElement('div');
    imgtext.className = 'card_body_text';

    const img = document.createElement('img');
    attr href =
    img.src = data.image;

    body.append(img);
    card.append(h1, body, imgbody);
    container.append(card);
  }
  root.append(container)
}
main();
