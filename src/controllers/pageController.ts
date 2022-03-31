import { Request, Response } from 'express';

import { Pet } from '../models/Pet';
import { activatedMenu } from '../helpers/activateMenu';

export const home = (req: Request, res: Response) => {
  const list = Pet.getData();

  res.render('pages/page', {
    menu: activatedMenu('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg',
    },
    list,
  });
};

export const dogs = (req: Request, res: Response) => {
  const list = Pet.getAnimal('dog');

  res.render('pages/page', {
    menu: activatedMenu('dog'),
    banner: {
      title: 'Todos os cachorros',
      background: 'banner_dog.jpg',
    },
    list,
  });
};

export const cats = (req: Request, res: Response) => {
  const list = Pet.getAnimal('cat');

  res.render('pages/page', {
    menu: activatedMenu('cat'),
    banner: {
      title: 'Todos os gatos',
      background: 'banner_cat.jpg',
    },
    list,
  });
};

export const fishes = (req: Request, res: Response) => {
  const list = Pet.getAnimal('fish');

  res.render('pages/page', {
    menu: activatedMenu('fish'),
    banner: {
      title: 'Todos os peixes',
      background: 'banner_fish.jpg',
    },
    list,
  });
};
