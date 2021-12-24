import './header.css';

function Header({nameObject}){
    return (
        <div className="header" >
            <a className="name" href="/">{nameObject["name"]}</a><br/>
            <a className="position" href="/research">{nameObject["position"]}</a>
        </div>
    )
}

export default Header;