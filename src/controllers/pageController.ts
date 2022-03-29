import { Request, Response } from 'express';
import { activatedMenu } from '../helpers/activateMenu';

export const home = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: activatedMenu('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg',
    },
  });
};

export const dogs = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: activatedMenu('dog'),
    banner: {
      title: 'Todos os cachorros',
      background: 'banner_dog.jpg',
    },
  });
};

export const cats = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: activatedMenu('cat'),
    banner: {
      title: 'Todos os gatos',
      background: 'banner_cat.jpg',
    },
  });
};

export const fishes = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: activatedMenu('fish'),
    banner: {
      title: 'Todos os peixes',
      background: 'banner_fish.jpg',
    },
  });
};
