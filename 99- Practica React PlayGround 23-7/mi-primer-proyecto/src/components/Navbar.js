import React from 'react'
let username = 'Tomas';
let avatar = "https://i.pravatar.cc/150?img=39";

function Navbar() {
    return (
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img 
                    src={avatar} width="30" height="30" 
                    class="d-inline-block align-top rounded-circle mr-3" />
                {username}
            </a>
        </nav>
    )
}

export default Navbar