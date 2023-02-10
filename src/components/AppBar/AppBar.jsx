import { Header, NavLinkStyles } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const AppBar = () => {
  return (
    <Header>
      <nav>
        <NavLinkStyles to="/">Home</NavLinkStyles>
        <NavLinkStyles to="movies">Movies</NavLinkStyles>
        {/* {navItems.map(({ href, text }) => {
          <NavLinkStyles key={href} to={href}>
            {text}
          </NavLinkStyles>;
        })} */}
      </nav>
    </Header>
  );
};

export default AppBar;
