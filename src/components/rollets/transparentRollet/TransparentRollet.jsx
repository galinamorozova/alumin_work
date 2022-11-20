import React from 'react';
import './transparentRollet.scss';
import SideMenu from '../../sideMenu/SideMenu';
import FindPrice from '../../findPrice/FindPrice';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


import transpTittle from '../../../images/rollet/titletransp.jpg';
import transprollet from '../../../images/rollet/transpRollet.jpeg';
import transprollet1 from '../../../images/rollet/transpRollet1.jpeg';
import transprollet2 from '../../../images/rollet/transpExmpl.jpg';
import transprollet3 from '../../../images/rollet/transpRollet3.jpg';
import transprollet4 from '../../../images/rollet/transpRollet4.jpg';

import carousel1 from '../../../images/rollet/carousel1.jpeg';
import carousel2 from '../../../images/rollet/carousel2.jpeg';
import carousel3 from '../../../images/rollet/carousel3.jpeg';
import carousel4 from '../../../images/rollet/carousel4.jpeg';
import carousel5 from '../../../images/rollet/carousel5.jpeg';
import carousel6 from '../../../images/rollet/carousel6.jpeg';
import carousel7 from '../../../images/rollet/carousel7.jpeg';
import carousel8 from '../../../images/rollet/carousel8.jpeg';
import carousel9 from '../../../images/rollet/carousel9.jpeg';
import carousel10 from '../../../images/rollet/carousel10.jpeg';
import carousel11 from '../../../images/rollet/carousel11.jpeg';
import carousel12 from '../../../images/rollet/carousel12.jpeg';
import carousel13 from '../../../images/rollet/carousel13.jpeg';
import carousel14 from '../../../images/rollet/carousel14.jpeg';
import carousel15 from '../../../images/rollet/carousel15.jpg';
import carousel16 from '../../../images/rollet/carousel16.jpg';
import carousel17 from '../../../images/rollet/carousel17.jpg';
import carousel18 from '../../../images/rollet/carousel18.jpg';
import carousel19 from '../../../images/rollet/carousel19.jpg';
import carousel20 from '../../../images/rollet/carousel20.jpg';
import carousel21 from '../../../images/rollet/carousel21.jpg';


export default function TransparentRollet() { 

    const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src={carousel17} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel18} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel19} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel20} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel21} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel15} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel16} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel1} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel2} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel3} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel4} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel5} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel6} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel7} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel8} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel9} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel10} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel11} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel12} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel13} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel14} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
  ];

  const Gallery = () => {
    return (
        <div className='carousel'>
            <AliceCarousel mouseTracking items={items}/>
        </div>
    );}


    return( 
        <section className='transparetnRollet'>
         <div className='container'>
            <div className='menu_content'>
                    <SideMenu/>

                    <div className='button_content'>
                        
                        <h3>прозрачные роллеты</h3>
                        <img src={transpTittle} alt='прозрачные роллеты'/>
                        <p>Прозрачные роллеты - это прекрасная идея для террас, беседок, балконов и т.п. Они защищают Ваш балкон, террасу, зону барбекю от осадков, ветра и пыли. Кроме того, прозрачные роллеты позволяют с комфортом использовать подобные помещения и в более холодных погодных условиях.</p>
                        <p>Отличительным преимуществом прозрачных рольставен является то, что они дают возможность сделать веранду полностью открытой и продуваемой свежим воздухом, когда возникает такая необходимость - достаточно просто поднять рольставни полностью (они уберутся в короб).</p>
                        <div className='plusesWrapper'>
                            <div><img src={transprollet1} alt='пример прозрачных роллет'/></div>
                            <div>
                                <h4>Солярность</h4>
                                <p>Помимо того, роллеты, изготовленные из поликарбоната, сохраняют максимум солярности - пропускная способность солнечного света до 90%, при этом, такие роллеты защищают от ультрафиолетовых лучей.</p>
                            </div>
                            <div><img src={transprollet} alt='пример прозрачных роллет'/></div>
                            <div>
                                <h4>Прочность</h4>
                                <p>Прозрачные рольставни изготовляются из ударопрочного поликарбоната толщиной 3 мм или 4 мм, степень надежности такой конструкции аналогична стандартным рольставням из экструдированных алюминиевых профилей.</p>
                            </div>
                            <div><img src={transprollet2} alt='прозрачная роллета'/></div>
                            <div>
                                <h4>Преимущества перед стеклом</h4>
                                <p>Светопрозрачный литой поликарбонат в 2 раза легче обычного силикатного стекла и при этом в 250 раз превосходит его по прочности.</p>
                            </div>
                            
                        </div>
                        <p>Конструкция прозрачной роллеты состоит (как и любая стандарная роллета) из закрепляемого сверху короба, в который она при желании убирается полностью; полос поликарбоната, соединенных между собой алюминиевыми профилями, которые обеспечивают дополнительную жесткость и устойчивость конструкции; направляющих а также системы управления роллетами.</p>
                        <p>Окрашивание профиля и короба возможно в любой цвет RAL. Стандартные цвета: белый и коричневый.</p>
                        <p>Дополнительно можно заказать: блок со встроенным радиоканалом и пультом дистанционного управления; замки, запорные элементы; устройство аварийного открытия при отсутствии электричества на объекте.</p>
                        <h3>виды управления</h3>
                        <div className='controlWrapper'>
                            <img src={transprollet3} alt='автоматическое управление'/>
                            <p>Автоматическое управление<span> - комфорт в использовании и минимум 15 лет работы привода.</span></p>
                            <img src={transprollet4} alt='ручное управление'/>
                            <p>Ручное управление.<span> Предусмотрена возможность открытия ворот вручную при помощи ручки.</span></p>
                        </div>  
                        <h3>наши объекты</h3>
                        <Gallery/>
                        <div className="panoram">
                        <h3>подробнее на нашем сайте:</h3>
                        <a href="https://panoram-rollet.ru">panoram-rollet.ru</a>
                        </div>
                        <FindPrice/>
                    </div>
                    

            </div>
            </div>
        </section>
         );
        }