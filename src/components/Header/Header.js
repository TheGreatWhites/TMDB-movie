import React, { Component } from 'react';

import Search from '../Search/Search'; 
import style from './Header.css';

import userIcon from '../../assets/images/user.png';

class Header extends Component{

    toggleMenu = () => {
        this.setState({menuActive:!this.state.menuActive});
    }
    closeMenu = () => {
        this.setState({menuActive:0});
    }
    searchHandler = (val) => {
        this.props.submitHandler(val);
    }

    state = {
        login :{
            status: false,
            text: 'Login or Sign up',
            link: '/login'
        },
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
                            <div className={style.Backdrop + ' ' + (this.state.menuActive ? style.active : '')} onClick = { () => {this.closeMenu(); }}></div>
                        </div>
                        <div className={style.Sidebar + ' ' + (this.state.menuActive ? style.active : '')} >
                            <div 
                                className={style.loginWrapper} 
                                onClick={() => {
                                    this.props.history.push(this.state.login.link);
                                    this.closeMenu();
                                }} >
                                <div className={style.loginIcon}>
                                    <img src={userIcon} className={style.userIcon} height="25px" width="25px"/>
                                </div>
                                <div className={style.loginText}>
                                    <span>
                                        {this.state.login.text}
                                    </span>
                                </div>
                            </div>
                            <ul>
                            {
                                this.state.headerElements.map((element) => {
                                    return(
                                        <li key={element.id} onClick={() => {
                                            this.props.history.push(element.link);
                                            this.props.getData();
                                            this.closeMenu();
                                        }}>{element.title}</li>        
                                    );
                                })
                            }
                            </ul>
                        </div>
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