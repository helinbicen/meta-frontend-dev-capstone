import Logo from "../assets/Logo.svg";

function Header() {
  const menuItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Menu" },
    { id: 4, name: "Reservations" },
    { id: 5, name: "Order Online" },
    { id: 6, name: "Login" },
  ];

  const listItems = menuItems.map((item, key) => {
    return <li key={item.id}>{item.name}</li>;
  });
  return (
    <header className="header content-wrapper">
      <img src={Logo} alt="Little Lemon Logo" className="logo" />
      <nav>
        <ul>
          {listItems}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
