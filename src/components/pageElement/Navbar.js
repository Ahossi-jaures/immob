import React from 'react';
import image from'../../asset/image/télécharger.jpg';
import User from '../../components/user/user';

import {BsFillPersonFill, BsJustify, BsFillGearFill, 
       BsChevronDown, BsPeopleFill, BsTools, BsBookHalf, BsBrush, BsGraphUp} from 'react-icons/bs'

 class Navbar extends React.Component{
     render(){
         return(
           <section>
               <nav class="navbar navbar-inverse navbar-global navbar-fixed-top">
                  <div class="container-fluid">
                        {/*nav-horizontal*/}
                        <div class="navbar-header">
                           <a class="navbar-brand" href="#"> <BsJustify/> Yada-Immobilier</a>
                        </div>
 
                   </div>
               </nav>

                 {/*nav-vertical*/}
              <nav class="navbar-primary">     
                    <ul class="navbar-primary-menu">
                        <li>                            
                            <a href="#"> <span class="nav-label"><BsFillGearFill/> Tableau de bord</span> </a>
                            <a href="#"> <span class="nav-label"><BsFillPersonFill/> Param. Users </span></a>
                            <a href="#"> <span class="nav-label"><BsPeopleFill/> Param. Locatires </span></a>
                            <a href="#"> <span class="nav-label">< BsTools/> Fournisseur</span></a>
                            <a href="#"> <span class="nav-label"><BsBookHalf/> Comptabilité  </span></a>
                            <a href="#"> <span class="nav-label"><BsBrush/> Contrat </span></a>
                            <a href="#"> <span class="nav-label"><BsGraphUp/> Bilan Gestion </span></a>                            
                        </li>
                        
                    </ul>
             </nav>

                 {/*content*/}
             <div class="main-content">
                    <User/>
                    <h1> I am the main content </h1>
                    <img src={image}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem sint assumenda quae aliquid voluptatibus quia, ea, ad natus magni repellat earum, culpa iure tempore. Enim dolor eaque minima voluptas ducimus?</p>
            </div>
        </section>
       )
     }
 }

export default Navbar;