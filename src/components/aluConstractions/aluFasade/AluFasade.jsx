import React from 'react';
import './aluFasade.scss';
import SideMenu from '../../sideMenu/SideMenu';
import FindPrice from '../../findPrice/FindPrice';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import fasadeTitle from '../../../images/alumConstructions/aluFasade.jpeg';
import warmAl from '../../../images/alumConstructions/warmAl.png';
import coldAl from '../../../images/alumConstructions/coldAl.png';
import crossbar from '../../../images/alumConstructions/crossbar.png';
import structural from '../../../images/alumConstructions/structural.png';
import semiStructured from '../../../images/alumConstructions/semistructured.png';

import carousel1 from '../../../images/alumConstructions/fasadCarousel/fasad.jpeg';
import carousel3 from '../../../images/alumConstructions/fasadCarousel/fasad4.jpeg';
import carousel4 from '../../../images/alumConstructions/fasadCarousel/fasad5.jpeg';
import carousel5 from '../../../images/alumConstructions/fasadCarousel/fasad6.jpeg';
import carousel6 from '../../../images/alumConstructions/fasadCarousel/fasad7.jpeg';
import carousel7 from '../../../images/alumConstructions/fasadCarousel/fasad8.jpeg';
import carousel8 from '../../../images/alumConstructions/fasadCarousel/fasad9.jpeg';
import carousel9 from '../../../images/alumConstructions/fasadCarousel/fasad10.jpeg';
import carousel10 from '../../../images/alumConstructions/fasadCarousel/fasad11.jpeg';
import carousel11 from '../../../images/alumConstructions/fasadCarousel/fasad12.jpeg';
import carousel12 from '../../../images/alumConstructions/fasadCarousel/fasad13.jpeg';
import carousel13 from '../../../images/alumConstructions/fasadCarousel/fasad14.jpeg';
import carousel14 from '../../../images/alumConstructions/fasadCarousel/fasaddoor.jpeg';
import carousel15 from '../../../images/alumConstructions/fasadCarousel/fasaddoor2.jpeg';
import carousel16 from '../../../images/alumConstructions/fasadCarousel/fasaddoor3.jpeg';



export default function AluFasade() { 
    const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src={carousel16} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel11} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel9} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel12} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel15} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel13} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel14} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel3} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel4} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel5} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel6} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel7} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel8} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel10} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item vert'/>,
    <img src={carousel1} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item vert'/>,
  ];

  const Gallery = () => {
    return (
        <div className='carousel'>
            <AliceCarousel mouseTracking items={items}/>
        </div>
    );}

    return( 
        <section className='aluFasade'>

            <div className='container'>
                <div className='menu_content'>
                    <SideMenu/>

                    <div className='button_content'>
                    <h3>Алюминиевые фасады</h3>
                    <img src={fasadeTitle} alt='алюминиевые фасады'/>

                    <p>Наша компания занимается изготовлением и монтажом алюминиевых конструкций разных видов (фасады, лоджии, окна, перегородки) как из теплого алюминия так и из холодного.</p>
                    <p>Для начала необходимо разобраться в разнице <span>"холодного"</span> и <span>"теплого"</span> алюминия.</p>
                    <p>Алюминий характеризуется высокой теплопроводностью, что может быть и недостатком в определенных обстоятельствах - перегородки из алюминия промерзали бы при минусовых температурах. Однако, современные технологии позволяют избежать этих недостатков при производстве изделий из алюминия.</p>
                    <h3>Отличие теплого от холодного алюминия</h3>

                    <div className='coldWarmAl'>
                        <div className='kind'>
                            <div><img src={warmAl} alt='теплый алюминий'/></div>
                            <h3>Теплый алюминий и его преимущества</h3>
                            <p>Теплый алюминиевый профиль имеет две составляющие - металлические детали в нем чередуются с пластмассовыми вставками. Их называют термомостом или терморазрывом. Созданы они из стеклонасыщенного полиамида. Предназначение вставки – создание преграды на пути тепловой энергии, идущей из комнаты или кабинета на улицу (вне здания).</p>
                            <p>Алюминий с полиамидной вставкой закреплены по системе «паз-гребень». Она обеспечивает герметичность конструкции, плотное прилегание элементов. Такая система защищает помещение от сквозняков. С легкостью выносит ветровые нагрузки. Другое их наименование – многокамерные окна. Через стеклопакеты и каркас не проходит холод. Низкие температуры задерживаются. Изделия не промерзают. Теплоизоляция таких алюминиевых профилей схожа с аналогичными параметрами рам из дерева и ПВХ.</p>
                        </div>
                        <div className='kind'>
                            <div><img src={coldAl} alt='холодный алюминий'/></div>
                            <h3>Холодный алюминий и его преимущества</h3>
                            <p>Структура холодных рам однородна, неразрывна. Целостность конструкции делает ее максимально герметичной. Она защищает помещение от атмосферных осадков, пыли, влаги. Теплопотери при таком остеклении существенны из-за отсутствия полиамидной вставки. Однако холодный алюминиевый профиль обладает рядом преимуществ:</p>
                            <ul>
                                <li>Легкий вес, что дает возможность установить окна даже в сооружения без несущих стен и основательного фундамента;</li>
                                <li>Простота сборки, что делает холодные металлоконструкции актуальными для обустройства веранды или хозяйственных построек;</li>
                                <li>Дешевизна. Поэтому такие конструкции особенно востребованы для нежилых помещений, например, лоджии, неотапливаемых технических сооружений.</li>
                            </ul>
                        </div>
                    </div>


                    <h3>Технологии фасадов:</h3>
                    <div className='fasadeType'>
                        <div className='kind'>
                            <h4>Cтоечно-ригельный</h4>
                            <div><img src={crossbar} alt='стоечно-ригельный'/></div>
                            <p>Вертикальные стойки и горизонтальные ригели являются несущей частью конструкции, на которой фиксируются архитектурные стеклопакеты при помощи герметиков и внешних прижимных планок. Внешний вид стоечно-ригельных фасадов определяется формой и цветом прижимных элементов, а так же - цветом и типом используемого стекла.</p>
                        </div>
                        <div className='kind'>
                            <h4>Структурный</h4>
                            <div><img src={structural} alt='структурный'/></div>
                            <p>Эстетика структурного остекления обусловлена отсутствием видимых перемычек – стеклопакеты крепятся при помощи герметика с небольшим зазором между секциями. Для создания цельного полотна используется специальный герметик высокой адгезии с антикоррозийными, влаго- и теплоизоляционными свойствами.</p>
                        </div>
                        <div className='kind'>
                            <h4>Полуструктурный</h4>
                            <div><img src={semiStructured} alt='полуструктурный'/></div>
                            <p>Стеклопакеты с тонированными или зеркальными архитектурными стеклами фиксируются на несущей конструкции при помощи герметика и тонкой прижимной планки в горизонтальной или вертикальной плоскости. Т.е. визуально заметны только базовые швы, опоясывающие здание горизонтально или уходящие вертикально ввысь.</p>
                        </div>
                    </div>
                    <h3>наши объекты</h3>
                    <Gallery/>

                    <FindPrice/>

                    </div>
                </div>
            </div>
        </section>
    )
};