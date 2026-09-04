import { routes } from './app.routes';

describe('navigation V6.1', () => {
  const childRoutes = routes.find(route => route.path === '')?.children ?? [];

  it('exposes every primary V6.1 prototype route', () => {
    const paths = childRoutes.map(route => route.path);
    const expected = [
      'dashboard', 'beneficiaires', 'carte-sites', 'cycles', 'besoins',
      'financements', 'contributions', 'achats', 'stocks', 'distribution',
      'equipements', 'visites', 'missions-audit', 'anomalies',
      'validation-dossiers', 'passeport', 'programmes', 'bailleurs', 'rapports',
      'utilisateurs-permissions', 'parametres'
    ];

    expected.forEach(path => expect(paths).withContext(path).toContain(path));
  });

  it('keeps legacy URLs as redirects', () => {
    expect(childRoutes.find(route => route.path === 'exploitations')?.redirectTo).toBe('beneficiaires');
    expect(childRoutes.find(route => route.path === 'parcelles')?.redirectTo).toBe('carte-sites');
  });

  it('prepares livestock and aquaculture routes', () => {
    const paths = childRoutes.map(route => route.path);
    ['elevage', 'animaux-lots', 'sante-animale', 'vaccination', 'alimentation', 'aquaculture', 'qualite-eau', 'recoltes-aquacoles']
      .forEach(path => expect(paths).withContext(path).toContain(path));
  });
});
