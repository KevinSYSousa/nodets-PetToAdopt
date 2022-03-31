type PetType = 'dog' | 'cat' | 'fish';
type Pet = {
  type: PetType;
  image: string;
  name: string;
  color: string;
  genre: 'Male' | 'Female';
};

const data: Pet[] = [
  {
    type: 'dog',
    image: 'pastor-alemao.jpg',
    name: 'Pastor-alemão',
    color: 'Amarelo e Preto',
    genre: 'Male',
  },
  {
    type: 'dog',
    image: 'labrador.jpg',
    name: 'Labrador-retriever',
    color: 'Branco',
    genre: 'Male',
  },
  {
    type: 'dog',
    image: 'zwergspitz.jpg',
    name: 'Zwergspitz',
    color: 'Amarelo',
    genre: 'Female',
  },
  {
    type: 'dog',
    image: 'husky.jpg',
    name: 'Husky Siberiano',
    color: 'Branco e Preto',
    genre: 'Male',
  },
  {
    type: 'dog',
    image: 'golden.jpg',
    name: 'Golden Retriever',
    color: 'Amarelo',
    genre: 'Male',
  },
  {
    type: 'dog',
    image: 'poodle.jpg',
    name: 'Poodle',
    color: 'Branco',
    genre: 'Female',
  },
  {
    type: 'dog',
    image: 'bulldog.jpg',
    name: 'Bulldog',
    color: 'Branco e Amarelo',
    genre: 'Male',
  },
  {
    type: 'cat',
    image: 'persa.jpg',
    name: 'Persa',
    color: 'Amarelo',
    genre: 'Male',
  },
  {
    type: 'cat',
    image: 'mainecoon.jpg',
    name: 'Maine Coon',
    color: 'Preto e Branco',
    genre: 'Male',
  },
  {
    type: 'cat',
    image: 'bengal.jpg',
    name: 'Bengal',
    color: 'Branco, Preto e Amarelo',
    genre: 'Female',
  },
  {
    type: 'cat',
    image: 'siames.jpg',
    name: 'Siamês',
    color: 'Amarelo e Preto',
    genre: 'Male',
  },
  {
    type: 'cat',
    image: 'sphynx.jpg',
    name: 'Sphynx',
    color: 'Branco',
    genre: 'Male',
  },
  {
    type: 'fish',
    image: 'neon.jpg',
    name: 'Tetra Neon',
    color: 'Vermelho e Azul',
    genre: 'Male',
  },
  {
    type: 'fish',
    image: 'matogrosso.jpg',
    name: 'Mato Grosso',
    color: 'Laranja',
    genre: 'Male',
  },
  {
    type: 'fish',
    image: 'limpavidro.jpg',
    name: 'Limpa Vidro',
    color: 'Verde e Branco',
    genre: 'Male',
  },
  {
    type: 'fish',
    image: 'tanictis.jpg',
    name: 'Tanictis',
    color: 'Vermelho',
    genre: 'Male',
  },
  {
    type: 'fish',
    image: 'acara.jpg',
    name: 'Acará Bandeira',
    color: 'Preto',
    genre: 'Male',
  },
];

export const Pet = {
  getData: (): Pet[] => {
    return data;
  },

  getAnimal: (type: PetType): Pet[] => {
    return data.filter((item) => item.type === type);
  },

  filterName: (name: string): Pet[] => {
    return data.filter(
      (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
  },
};
