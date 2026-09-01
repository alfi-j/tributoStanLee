export const creations = [
  {
    id: 1,
    name: "Spider-Man",
    firstAppearance: "Amazing Fantasy #15 (1962)",
    rating: 5,
    description: "Peter Parker, el héroe arácnido trepamuros",
    icon: "🕷️"
  },
  {
    id: 2,
    name: "Iron Man",
    firstAppearance: "Tales of Suspense #39 (1963)",
    rating: 5,
    description: "Tony Stark, el genio multimillonario",
    icon: "🤖"
  },
  {
    id: 3,
    name: "Thor",
    firstAppearance: "Journey into Mystery #83 (1962)",
    rating: 4.5,
    description: "El Dios del Trueno de Asgard",
    icon: "🔨"
  },
  {
    id: 4,
    name: "Hulk",
    firstAppearance: "The Incredible Hulk #1 (1962)",
    rating: 4.5,
    description: "Bruce Banner, la fuerza imparable",
    icon: "💚"
  },
  {
    id: 5,
    name: "Black Widow",
    firstAppearance: "Tales of Suspense #52 (1964)",
    rating: 4,
    description: "Natasha Romanoff, espía maestra",
    icon: "🕸️"
  },
  {
    id: 6,
    name: "Daredevil",
    firstAppearance: "Daredevil #1 (1964)",
    rating: 4,
    description: "Matt Murdock, el hombre sin miedo",
    icon: "😈"
  },
  {
    id: 7,
    name: "Doctor Strange",
    firstAppearance: "Strange Tales #110 (1963)",
    rating: 4.5,
    description: "El Hechicero Supremo",
    icon: "✨"
  },
  {
    id: 8,
    name: "Black Panther",
    firstAppearance: "Fantastic Four #52 (1966)",
    rating: 5,
    description: "T'Challa, rey de Wakanda",
    icon: "🐆"
  },
  {
    id: 9,
    name: "Captain Marvel",
    firstAppearance: "Marvel Super-Heroes #13 (1968)",
    rating: 4,
    description: "Carol Danvers, poder cósmico",
    icon: "⭐"
  }
];

export const cameos = [
  { movie: "Iron Man (2008)", role: "Larry King en gala benéfica", badge: "Debut MCU" },
  { movie: "The Incredible Hulk (2008)", role: "Bebida contaminada con sangre de Bruce", badge: "Cameo oculto" },
  { movie: "Iron Man 2 (2010)", role: "Larry King disfrazado", badge: "" },
  { movie: "Thor (2011)", role: "Conductor intentando sacar a Mjolnir", badge: "" },
  { movie: "Captain America: The First Avenger (2011)", role: "General en ceremonia", badge: "" },
  { movie: "The Avengers (2012)", role: "Entrevistado sobre héroes", badge: "" },
  { movie: "Thor: The Dark World (2013)", role: "Paciente en asilo", badge: "" },
  { movie: "Captain America: The Winter Soldier (2014)", role: "Guardia de seguridad", badge: "" },
  { movie: "Guardians of the Galaxy (2014)", role: "Anciano en Xandar", badge: "" },
  { movie: "Avengers: Age of Ultron (2015)", role: "Veterano en fiesta", badge: "" },
  { movie: "Ant-Man (2015)", role: "Barbero borracho", badge: "" },
  { movie: "Captain America: Civil War (2016)", role: "Mensajero FedEx", badge: "" },
  { movie: "Spider-Man: Homecoming (2017)", role: "Vecino que regaña a Spidey", badge: "" },
  { movie: "Thor: Ragnarok (2017)", role: "Peluquero de Thor", badge: "" },
  { movie: "Black Panther (2018)", role: "Apostador en casino", badge: "" },
  { movie: "Avengers: Infinity War (2018)", role: "Conductor de autobús escolar", badge: "" },
  { movie: "Ant-Man and the Wasp (2018)", role: "Auto encogido", badge: "" },
  { movie: "Captain Marvel (2019)", role: "Leyendo guion de Mallrats", badge: "Póstumo" },
  { movie: "Avengers: Endgame (2019)", role: "Conductor clásico en los 70s", badge: "Despedida" }
];

export const spiderManData = {
  origin: {
    title: "El Origen de Spider-Man",
    story: "Peter Benjamin Parker era un estudiante tímido y brillante que fue mordido por una araña radiactiva durante una exhibición científica. Esto le otorgó poderes sobrehumanos: fuerza proporcional a una araña, capacidad de adherirse a superficies, un 'sentido arácnido' que lo alerta del peligro, y agilidad sobrehumana.",
    quote: "Un gran poder conlleva una gran responsabilidad.",
    quoteAuthor: "Tío Ben"
  },
  stats: [
    { label: "Primera Aparición", value: "Amazing Fantasy #15", year: "Agosto 1962" },
    { label: "Creadores", value: "Stan Lee & Steve Ditko", year: "Guion y Arte" },
    { label: "Ciudad Natal", value: "Queens, Nueva York", year: "USA" },
    { label: "Popularidad", value: "★★★★★", year: "#1 Marvel" }
  ],
  villains: [
    { name: "Green Goblin", issue: "#14", desc: "Norman Osborn, archienemigo", icon: "🎃" },
    { name: "Doctor Octopus", issue: "#3", desc: "Otto Octavius, tentáculos mecánicos", icon: "🐙" },
    { name: "Venom", issue: "#300", desc: "Simbionte alienígena oscuro", icon: "👹" },
    { name: "Lizard", issue: "#6", desc: "Dr. Curt Connors, reptil humanoide", icon: "🦎" },
    { name: "Electro", issue: "#9", desc: "Max Dillon, poder eléctrico", icon: "⚡" },
    { name: "Mysterio", issue: "#13", desc: "Quentin Beck, maestro de ilusiones", icon: "🎭" }
  ],
  allies: [
    { name: "Mary Jane Watson", relation: "Amor verdadero", quote: "¡Cara bonita!", icon: "💕" },
    { name: "Gwen Stacy", relation: "Primer amor trágico", quote: "", icon: "🌸" },
    { name: "J. Jonah Jameson", relation: "Editor del Daily Bugle", quote: "¡Spidey es una amenaza!", icon: "📰" },
    { name: "Tía May", relation: "Corazón de Peter", quote: "", icon: "👵" }
  ],
  movies: [
    { actor: "Tobey Maguire", years: "2002-2007", films: "Trilogía Sam Raimi", status: "Completa" },
    { actor: "Andrew Garfield", years: "2012-2014", films: "The Amazing Spider-Man 1 & 2", status: "Reinició" },
    { actor: "Tom Holland", years: "2016-Presente", films: "MCU + 3 películas propias", status: "Activo" },
    { actor: "Animación", years: "2018, 2023", films: "Spider-Verse 1 & 2", status: "Oscar" }
  ],
  trivia: [
    "Su nombre completo es Peter Benjamin Parker",
    "Stan Lee se inspiró viendo una mosca trepar por la pared",
    "Inicialmente los editores rechazaron el concepto",
    "Debutó en un cómic que sería cancelado",
    "Es el personaje más icónico de Marvel Comics"
  ]
};

export const quotes = [
  { text: "¡Excelsior!", author: "Firma característica" },
  { text: "Un gran poder conlleva una gran responsabilidad.", author: "Spider-Man / Tío Ben" },
  { text: "Nunca es tarde para reinventarte.", author: "Stan Lee" },
  { text: "Los superhéroes son solo personas normales que hacen cosas extraordinarias.", author: "Stan Lee" },
  { text: "La imaginación es el arma más poderosa del universo.", author: "Stan Lee" },
  { text: "Haz lo que amas y ama lo que haces.", author: "Stan Lee" }
];

export const galleryImages = [
  { id: 1, src: "https://via.placeholder.com/400x300/EC1D24/FFFFFF?text=Stan+Lee+1", alt: "Stan Lee en convención" },
  { id: 2, src: "https://via.placeholder.com/400x300/0075C4/FFFFFF?text=Marvel+Comics", alt: "Oficinas de Marvel" },
  { id: 3, src: "https://via.placeholder.com/400x300/E62429/FFFFFF?text=Spider-Man", alt: "Spider-Man cómic" },
  { id: 4, src: "https://via.placeholder.com/400x300/202020/FFFFFF?text=Avengers", alt: "Los Vengadores" },
  { id: 5, src: "https://via.placeholder.com/400x300/EC1D24/FFFFFF?text=X-Men", alt: "X-Men equipo" },
  { id: 6, src: "https://via.placeholder.com/400x300/0075C4/FFFFFF?text=Fantastic+Four", alt: "Los 4 Fantásticos" }
];
