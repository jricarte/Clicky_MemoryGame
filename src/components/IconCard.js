import React from 'react';

const style = {
    imgResize: {
        width: 150,
        heigth: 100,
    }
}

const IconCard = props => (
  <section  id={props.id} value={props.id} onClick={() =>
  props.clickedPlayer(props.id)
  }>
    <article>
      <img style={style.imgResize} src={props.image} alt="game-char" />
    </article>
  </section>
)

export default IconCard;