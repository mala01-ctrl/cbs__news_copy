import React from 'react';
import './Header.css';

const Header = () => {
    const linkNav: string[] = ['Latest', 'Local News', 'Live', "Shows", "..."];

    return (
        <>
            <header className="App-header">
                <div className="container-sm">
                    <div className="row">
                        <div className="col-sm">
                            <nav>
                                <ul>
                                    {linkNav.map((link: string) => <li><a href={"#"}>{link}</a></li>)}
                                </ul>
                            </nav>
                        </div>
                        <div className="col-sm">
                            <img src={""} alt={"logo immagine"}/>
                        </div>
                        <div className="col-sm" style={{textAlign: "right"}}>
                            <i className="fa-solid fa-magnifying-glass" style={{fontSize: "30px"}}></i>
                        </div>
                    </div>
                </div>
            </header>
            <header className="subHeader">
                <div className="container sm">
                    <nav>
                        <ul>
                            {linkNav.map((link: string) => <li><a href={"#"}>{link}</a></li>)}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;