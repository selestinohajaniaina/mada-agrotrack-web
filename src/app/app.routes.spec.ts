import { routes } from './app.routes';
describe('navigation Web V1', () => {
  const children = routes.find(route => route.path === '')?.children ?? [];
  it('exposes the current cultivateur and account scope', () => {
    ['dashboard','cultivateurs','cultivateurs/individuels','cultivateurs/associations','cultivateurs/:id','cultivateurs/:id/modifier','comptes','comptes/nouveau','comptes/:id','comptes/:id/modifier','profil'].forEach(path => expect(children.some(route => route.path === path)).withContext(path).toBeTrue());
  });
  it('keeps login outside the protected shell', () => expect(routes.some(route => route.path === 'login')).toBeTrue());
  it('does not expose out-of-scope advanced modules', () => expect(children.some(route => ['financements','stocks','elevage','aquaculture'].includes(route.path ?? ''))).toBeFalse());
});
