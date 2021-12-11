
function Header({nameObject}){
    return (
        <div>
            <h2 className="name">{nameObject["name"]}</h2>
            <h4 className="position">{nameObject["position"]}</h4>
        </div>
    )
}

export default Header;