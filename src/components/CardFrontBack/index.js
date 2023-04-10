import CardGame from '../CardGame/main';

function CardFrontBack() {
    return /*html*/ `
    <article class='card-front-back'>
      ${CardGame('javascript', 'Logo do Javascript')}
      ${CardGame('css', 'Logo do Css')}
    </article>
  `;
}

export default CardFrontBack;
