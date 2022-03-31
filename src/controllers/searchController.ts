import { Request, Response } from 'express';

import { Pet } from '../models/Pet';
import { activatedMenu } from '../helpers/activateMenu';

export const search = (req: Request, res: Response) => {
  const search: string = req.query.name as string;
  if (!search) {
    res.redirect('/');
    return;
  }

  const list = Pet.filterName(search);

  res.render('pages/page', {
    menu: activatedMenu(''),
    list,
    search,
  });
};
