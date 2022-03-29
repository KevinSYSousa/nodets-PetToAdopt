type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const activatedMenu = (selected: MenuOptions) => {
  let response = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };

  if (selected !== '') {
    response[selected] = true;
  }

  return response;
};
