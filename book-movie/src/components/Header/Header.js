import Netflixlogo from '../../assets/images/logoHeader.png';
import {MdSearch} from 'react-icons/md'
import {AiOutlineUser} from 'react-icons/ai'
import { useScrollY } from '../hooks/useScrollY';
import styled from 'styled-components'

import {Link} from 'react-router-dom';
function Header (props) {
    const [scrollY] = useScrollY();
    return(
        <Navigation style={scrollY < 100 ? {background: 'var(--color-whitemax'}: {background: 'transparent'}}>
            <div className="navContainer">
                <div className="logo">
                    <img src={Netflixlogo} alt="" />
                </div>

                <div className="navSearch">
                    <MdSearch className="iconSearch"/>
                    <input type="text" placeholder="Nhập từ khoá để tìm kiếm phim..." />
                </div>
              
               
                    
                <div className="login">
                        <AiOutlineUser className="iconUser"/>
                        <span className="loginText">Đăng nhập</span>
                </div>
              

                <div className="language">
                    <span className="languageText">VI|EN</span>
                </div>
            </div>
        </Navigation>
    )
}

export default Header;

const Navigation = styled.div`
    width: 100%;
    height: 100px;
    
    top: 0;
    transition-timing-function: ease-in;
    transition: all 1s;
    z-index: 10;
    
    @media only srceen and (max-width: 600px){
    
        height: 100px;
    }
    .navContainer {
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 100%;

        @media only srceen and (max-width: 600px){
            flex-direction: column;
            
        }

        .logo{
            margin-left: 100px;
            width: 120px;
            cursor: pointer;
            img {
                height: 100px;
                width:100%;
            }
        }

        .navSearch {
            
            color: var(--color-white);
            padding-right: 20px;
            display: flex;
            justify-content: flex-end;

            
            .iconSearch {
                width: 20px;
                height: 20px;
                //đưa icon vô trong
                transform: translateX(25px) translateY(10px);
                color: #251B37;
            }

            input {
                font-size: 14px;
                border: 1px solid #251B37;
                color: var(--color-background);
                outline: none;
                width: 300px;
                padding: 10px;
                cursor: pointer;
                background: var(--color-whitemax);
                padding-left: 26px;
                width: 300px;
                cursor: text;
                border-radius: 4px;
                
            }
        }

        .login{
            top: 10px;
            margin-left: 40%;
            cursor: pointer;
            .iconUser{
              
                transform:  translateY(1px);
               
            }
            .loginText{
                margin-left:5px;
              
            }
        }

        .language{
            top: 10px;
            margin-left: 10px;
            margin-right:10%;
        }
    }
`;


