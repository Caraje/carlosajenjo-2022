export const db = {
  blog: [],
  portfolio: [
    {
      id: '01',
      title: 'Dados y Pixeles',
      img: '/x21s64aayabndq2jmvwk.webp',
      description: [
        'Es una web centrada en series, juegos de mesa, cine y videojuegos, que nació como un proyecto personal de amigos, un lugar donde poder escribir y hablar sobre algunos de sus hobbies habituales.',

        'Se trata de una versión preliminar del proyecto, mientras se prepara un proyecto más complejo y con más características, sin embargo, para el inicio del proyecto la prioridad era poder subir los artículos de forma fácil y rápida, por eso opte por usar Next.js y subir los artículos desde archivos Markdown.',

        'El proyecto esta creado desde cero sin usar paquetes de terceros y mantenerlo lo más sencillo posible, para más adelante hacerlo evolucionar y añadirle características más complejas tanto para los miembros que colaboran con el proyecto como los usuarios que lo visitan.',
      ],
      techList: ['HTML', 'CSS', 'Javascript', 'React', 'Next-js'],
      urlGit: 'https://github.com/Caraje/dadosypixeles',
      urlDemo: 'https://www.dadosypixeles.es',
      spotlight: true,
    },
    {
      id: '02',
      title: 'Emparejados',
      img: '/auqtu0crizjjpdr1gdok.webp',
      description: [
        'Una versión del popular juego de cartas “Memory”, donde el jugador deberá encontrar parejas dentro de un número determinado de cartas, una vez que el jugador revela todas las parejas disponibles el juego termina.',

        'Está creado usando React con la intención de practicar la comunicación entre componentes y el uso del “state”, además este proyecto supuso mi primer contacto con “SASS” del cual también tenía interés de comprobar su funcionamiento.',

        'El juego además cuenta con sistema de puntuación para el jugador en base de aciertos y fallos durante la partida, quedando reflejados los puntos totales, los intentos que ha tenido para completarlo y la cantidad de fallos.',
      ],
      techList: ['HTML', 'CSS', 'Javascript', 'React', 'Sass'],
      url: '/portfolio/emparejados',
      urlGit: 'https://github.com/Caraje/Emparejados',
      urlDemo: 'https://caraje.github.io/Emparejados/',
      spotlight: true,
    },
    {
      id: '03',
      title: 'GifApp',
      img: '/t2nivwrhu62rbueewpw6.webp',
      description: [
        'Es un buscador de gifs animados, usando la api de Giphy, se puede usar el buscador para introducir los términos de lo que deseas buscar, además en la entrada de la app, sale una relación de categorías fijas y que van conectado con la api para sacar gifs relacionados con estas categorías.',

        'La aplicación está creada usando React y su fin era la de practicar con la conexión a APIs externas y cómo manipular los resultados dentro de mi Frontend.',

        'También se usa Sass para manejar el CSS de la aplicación, ya que una de las intenciones de este proyecto era mejorar en su manejo, por lo demás es una aplicación sencilla, pero que me resultó interesante a la hora de crearla.',
      ],
      techList: ['HTML', 'CSS', 'JavaScript', 'React', 'Sass'],
      url: '/portfolio/gifapp',
      urlGit: 'https://github.com/Caraje/gifsApp',
      urlDemo: 'https://caraje.github.io/gifsApp/',
      spotlight: false,
    },
    {
      id: '04',
      title: 'BlackJack',
      img: '/ceka0a1zgyb3xawgjg0r.webp',
      description: [
        'Una versión del juego de cartas BlackJack, donde el jugador tiene que ir pidiendo cartas en este caso a la máquina, con la finalidad de sumar 21 puntos, siempre sin pasarse, posteriormente la CPU, en su turno procede a hacer lo mismo y aquel que iguale o se quede más cerca de los 21 puntos sin pasarse gana la ronda.',

        'Fue quizá mi primera práctica personal, realizada únicamente con HTML, CSS y JavaScript, por lo que es un poco especial para mi pese a su simpleza de cara al código, sin embargo me permitió explorar el uso de JavaScript y el uso de DOM.',

        'Su diseño es ultra simple ya que no era la prioridad del proyecto, que era el uso de JavaScript, el proyecto en su momento supuso algún quebradero de cabeza, pero fue muy satisfactorio cuando lo termine de programar.',
      ],
      techList: ['HTML', 'CSS', 'Javascript'],
      url: '/portfolio/blackjack',
      urlGit: 'https://github.com/Caraje/BlackJack',
      urlDemo: 'https://blackjack-caraje.netlify.app/',
      spotlight: false,
    },
    {
      id: '05',
      title: 'Pokemon',
      img: '/tf0rkvrwx7g3vitlriwe.webp',
      description: [
        'Es una aplicación simple para explorar el uso de Next.js, es un catálogo de diferentes Pokemons que se extraen de una API. y se muestra el listado completo con un par de datos extraídos de la misma API.',

        'La aplicación además permite guardar un listado de Pokemons favoritos y poder consultarlos cuando quieras, aunque la intención de la aplicación es la de aprender el manejo de Next.js y del “Static Props” y “static Paths”',
      ],
      techList: ['HTML', 'CSS', 'Javascript', 'React', 'Sass', 'Next-js'],
      url: '/portfolio/pokemon',
      urlGit: 'https://github.com/Caraje/pokemonApp',
      urlDemo: 'https://pokemon-app-indol.vercel.app/',
      spotlight: false,
    },
    {
      id: '06',
      title: 'TodoApp',
      img: '/sealfwyokrnpk8pxvnsy.webp',
      description: [
        'Uno de mis primeros proyectos de aprendizaje que realicé cuando empecé en el mundo de la programación, la idea era realizar un proyecto únicamente haciendo uso de JavaScript, sin usar otras tecnologías adicionales.',

        'Es una aplicación de tareas que permite al usuario crear nuevas tareas, marcarlas y desmarcar las completadas, así como poder eliminarlas las completadas.',

        'Lo importante de este proyecto era el manejo del DOM, y en especial aprender a hacer el uso del “LocalStorage”, además trate de hacer uso del CSS para ampliar mis conocimientos y habituarme a su uso',
      ],
      techList: ['HTML', 'CSS', 'Javascript'],
      url: '/portfolio/todoapp',
      urlGit: 'https://github.com/Caraje/Todo-Js-Vanilla',
      urlDemo: 'https://caraje.github.io/Todo-Js-Vanilla/',
      spotlight: true,
    },
    {
      id: '07',
      title: 'Calendario',
      img: '/wso5qaeiy5wnyablelsz.webp',
      description: [
        'La aplicación es un calendario donde varios usuarios pueden ir anotando diferentes tareas de algún proyecto en el que puedan estar trabajando juntos, es quizás el proyecto más elaborado que he publicado en esta web.',

        'Está creada usando React, y además gestiona el uso de varios usuarios, así como los permisos de estos, también hace uso del context.',

        'Además esta aplicación no solo tiene programado el Front, sino que también se le realizó su propio BackEnd y quizás lo más importante de este proyecto además de usar context y creación y gestión de usuarios múltiples, es que fue mi primer contacto con Testing en React.',

        'También hace uso de diferentes paquetes de terceros como “Sweet Alert”, “React Modal” o “Moment” entre otros',
      ],
      techList: ['HTML', 'CSS', 'Javascript', 'React'],
      url: '/portfolio/calendario',
      urlGit: 'https://github.com/Caraje/CalenadarApp',
      urlDemo: 'https://calendar-app-back.vercel.app/',
      spotlight: true,
    },
    {
      id: '08',
      title: 'CarlosAjenjo(V1)',
      img: '/s4c4sspsobszujubwzc0.webp',
      description: [
        'Es el proyecto de la que fue mi primera web personal, antes de esta que está disponible actualmente, fue creada con React como forma de practicar con esta tecnología.',

        'Fue un proyecto sencillo pero que me permitió aprender mucho, por eso me gusta conservarla, más por motivos sentimentales que prácticos.',

        'En este proyecto me centré también en el apartado visual, ya que era importante para mi web personal, sin embargo decidí cambiarla porque no representaba mis conocimientos actuales y podría realizar un mejor trabajo con mi experiencia actual.',
      ],
      techList: ['HTML', 'CSS', 'Javascript', 'React'],
      url: '/portfolio/CarlosAjenjo(V1)',
      urlGit: 'https://github.com/Caraje/carlosajenjo.com',
      urlDemo: 'https://carlosajenjo-com.vercel.app/#/',
      spotlight: false,
    },
  ],
}
