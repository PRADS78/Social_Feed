import "../SocialFeedStyles/MenuOptions.scss";

const MenuOptions = ({ menuOptions }) => {
    return (

        <ul className="list-of-menus">

            {menuOptions.map((menu) => (

                <li key={menu.id}>
                    <div className="menu-options" >
                        <div className="content" >
                            <div className="content-icon">{menu.icon}</div>
                            <div className="content-text">{menu.options}</div>
                        </div>
                        <div className="count">{menu.count}</div>

                    </div>
                </li>


            ))}
        </ul>

    );
}

export default MenuOptions;







