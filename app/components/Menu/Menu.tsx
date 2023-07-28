import Link from "next/link";
import { menu } from "@/app/menuData";

function Menu() {
  return (
    <div className="menu">
      {menu &&
        menu.map((item) => (
          <div className="menu-item" key={item.id}>
            <span className="title uppercase hidden md:block">{item.title}</span>
            {item?.listItems.map((listItems) => {
              return (
                <Link href="#" className="listItem" key={listItems.id}>
                  <img src={listItems.icon} alt="" className=" h-6 w-6"/>
                  <span className="listItemTitle hidden md:block">{listItems.title}</span>
                </Link>
              );
            })}
          </div>
        ))}
    </div>
  );
}

export default Menu;
