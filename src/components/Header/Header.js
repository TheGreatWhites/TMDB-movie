import React, { Component } from 'react';

import Search from '../Search/Search'; 
import style from './Header.css';

class Header extends Component{

    toggleMenu = () => {
        this.setState({menuActive:!this.state.menuActive});
    }
    searchHandler = (val) => {
        this.props.submitHandler(val);
    }

    state = {
        headerElements : [
            {
                id:1,
                title:'Home',
                link:'/'
            },
            {
                id:2,
                title:'Movies',
                link:'/movie'
            },
            {
                id:3,
                title:'Series',
                link:'/tv'
            },
            {
                id:4,
                title:'About',
                link:'/about'
            },
        ],
        menuActive:0
    }

    render() {
        return (
            <div className={style.headerWrapper}>
                <div className={style.headerContent}>
                    <div className={style.Navbar}>
                        <div className={style.Hamburger + ' ' + (this.state.menuActive ? style.active : '')}>
                            <span className={'glyphicon glyphicon-menu-hamburger'+' '+ style.BurgerIcon} onClick = { () => {this.toggleMenu(); }}></span>
                            <span className={'glyphicon glyphicon-arrow-left'+' '+ style.BackIcon} onClick = { () => {this.toggleMenu(); }}></span>
                            <div className={style.Backdrop + ' ' + (this.state.menuActive ? style.active : '')}></div>
                        </div>
                        <ul className={this.state.menuActive ? style.active : ''}>
                        {
                            this.state.headerElements.map((element) => {
                                return(
                                    <li key={element.id} onClick={() => {
                                        this.props.history.push(element.link);
                                        this.props.getData();
                                    }}>{element.title}</li>        
                                );
                            })
                        }
                        </ul>
                    </div>
                    <div className={style.Search}>
                    <Search submitHandler = {this.searchHandler}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;