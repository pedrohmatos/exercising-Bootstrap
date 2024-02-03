type NavItemProps = {
    children: string;
    anchorClass: string
};

const NavItem = ({ children, anchorClass }: NavItemProps) => {

    return (
        <li className="nav-item">
            <a className={anchorClass}  href="#">
                {children}
            </a>
        </li>
    )
};

export default NavItem