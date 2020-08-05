import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/39315300?s=460&u=44f00eb83eb760d01016713523aa8b9403d3725a&v=4" alt="Gabriel França"/>

        <div>
          <strong>Gabriel França</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        <br/>
        <br/>
        Architecto nesciunt vitae ullam debitis dolore suscipit. Ullam incidunt dolorum velit qui, nihil asperiores porro aspernatur tempora voluptatem, animi autem debitis quaerat!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;