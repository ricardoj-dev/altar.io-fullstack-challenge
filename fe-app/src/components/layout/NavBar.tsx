import NavbarLink from "./NavBarLink";

const NavBar = () => {
  return (
    <div className="flex justify-between py-4">
      <p className="text-xl font-bold text-blue-950">Altar.io</p>
      <div className="flex gap-2">
        <NavbarLink text={"Generator"} to={"/"} />
        <NavbarLink text={"Payments"} to={"/payments"} />
      </div>
    </div>
  );
};

export default NavBar;
