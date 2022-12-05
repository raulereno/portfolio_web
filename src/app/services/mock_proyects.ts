export interface Proyects {
  id: number;
  name: string;
  link: string;
  image: string;
  description: string;
  tecnologies: string;
}

export const PROYECTS: Proyects[] = [
  {
    id: 1,
    name: 'Proyecto individual Bootcamp',
    link: 'https://pi-dogs-henry.netlify.app/',
    image: './../../../../assets/capturasProyectos/pi-dogs.png',
    description:
      'Proyecto individual realizado en el bootcamp SoyHenry donde aprendi a hacer un sitio web desde el frontend del mismo hasta el backend, donde hicimos nuesta propia base de datos con SQL',
    tecnologies: 'React,Redux,NodeJs,Sequelize,PostgreSQL',
  },
  {
    id: 2,
    name: 'Not Fungible Token Ecommerce',
    link: 'https://nft-ecommerce-react.netlify.app/',
    image: './../../../../assets/capturasProyectos/pf-react-coder.png',
    description:
      'Proyecto final del curso de React en CoderHouse donde utilice React como tecnologia del frontend y firebase como base de datos para consultar',
    tecnologies: 'Javascript,React y Firebase',
  },
  {
    id: 3,
    name: 'Rentten - Alojamientos',
    link: 'https://rent-ten.vercel.app/home',
    image: './../../../../assets/capturasProyectos/rentten-alojamientos.png',
    description:
      'Proyecto grupal final del bootcamp soyHenry en donde junto a otros 5 compañeros realizamos un proyecto dedicado a aquellas personas que buscan alquilar y/o publicar alojamientos temporarios',
    tecnologies:
      'Angular,Typescript,NGRX,Node.js,Express,Sequelize,MercadoPago, Nodemailer',
  },
  {
    id: 4,
    name: 'En progreso',
    link: '',
    image: './../../../../assets/capturasProyectos/trabajo-en-proceso1.jpg',
    description: '',
    tecnologies: '',
  },
];
