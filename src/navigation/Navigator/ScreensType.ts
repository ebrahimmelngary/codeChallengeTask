interface NavigationData {
  name: string;
  params?: {};
}

type Screens =
  | {
    name: 'Home';
  }
  | {
    name: 'Favroite';
  }
  | {
    name: 'MovieDetails';
    params?: {
      id?: Number;
    };
  };

export type { NavigationData, Screens };
