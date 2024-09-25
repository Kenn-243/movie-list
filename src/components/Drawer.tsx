function Drawer() {
  return (
    <div className="lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li>
            <a>My Collections</a>
          </li>
          <li>
            <a>My Favorites</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
