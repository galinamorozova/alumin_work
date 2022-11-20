import React from 'react';
import './aluDoor.scss';
import SideMenu from '../../sideMenu/SideMenu';
import FindPrice from '../../findPrice/FindPrice';
import { NavLink } from "react-router-dom";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import warmAl from '../../../images/alumConstructions/warmAl.png';
import coldAl from '../../../images/alumConstructions/coldAl.png';
import doorFilling from '../../../images/alumConstructions/doorFilling.jpeg';
import doorFilling2 from '../../../images/alumConstructions/doorFilling2.jpeg';
import alDoor from '../../../images/alumConstructions/alDoor.jpeg';
import doubleDoor from '../../../images/alumConstructions/doubleDoor.jpg';
import ordinaryDoor from '../../../images/alumConstructions/ordinaryDoor.jpeg';
import pendulumDoor from '../../../images/alumConstructions/pendulumDoor.jpg';
import doorTitle from '../../../images/alumConstructions/doorTitle.jpg';
import autoDoor from '../../../images/autoDoor/autoDoor3.png';

import carousel1 from '../../../images/alumConstructions/fasadCarousel/fasaddoor3.jpeg';
import carousel13 from '../../../images/alumConstructions/fasadCarousel/fasaddoor2.jpeg';
import carousel14 from '../../../images/alumConstructions/fasadCarousel/fasaddoor.jpeg';
import carousel2 from '../../../images/alumConstructions/wd2.jpeg';
import carousel3 from '../../../images/alumConstructions/wd3.jpeg';
import carousel4 from '../../../images/alumConstructions/wd4.jpeg';
import carousel5 from '../../../images/alumConstructions/wd5.jpeg';
import carousel6 from '../../../images/alumConstructions/wd6.jpeg';
import carousel7 from '../../../images/alumConstructions/wd7.jpeg';
import carousel8 from '../../../images/alumConstructions/wd8.jpeg';
import carousel9 from '../../../images/alumConstructions/wd9.jpeg';
import carousel10 from '../../../images/alumConstructions/wd10.jpeg';
import carousel11 from '../../../images/alumConstructions/wd11.jpeg';
import carousel12 from '../../../images/alumConstructions/wd12.jpeg';



export default function AluDoor() { 

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src={carousel1} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel13} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel14} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
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
  ];

  const Gallery = () => {
    return (
        <div className='carousel'>
            <AliceCarousel mouseTracking items={items}/>
        </div>
    );}
    return( 
        <section className='aluDoor'>

            <div className='container'>
                <div className='menu_content'>
                    <SideMenu/>

                    <div className='button_content'>
                    <h3>Алюминиевые двери</h3>

                    <img src={doorTitle} alt='алюминиевые двери'/>

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
                    <div className='AlDoorFeatures'>
                        <img src={alDoor} alt='алюминиевая дверь'/> 
                        <div>
                            <h3>Особенности алюминиевых дверей</h3>
                            <ul>
                                <li>Прочнее, надежнее, долговечнее, чем аналогичные изделия из ПВХ</li>
                                <li>легкий профиль из алюминия не подвержен коррозии. Он не боится механических и статических нагрузок.</li>
                                <li>Алюминий не пересыхает под воздействием ультрафиолета, не теряет своей прочности по прошествии многих лет.</li>
                                <li>Подобные конструкции можно изготовить даже по сложным дизайнерским проектам. Стекло с гравировкой и фьюзингом, фотопечать, варианты дверей без стекла – все это позволит реализовать ваши задумки и создать неповторимый интерьер в помещении.</li>
                            </ul>
                        </div>
                    </div>
                    <h3>Варианты заполнения полотен</h3>
                    <div className='doorFilling'>
                        <img src={doorFilling} alt='варианты заполнения конструкций'/>
                        <img src={doorFilling2} alt='варианты заполнения конструкций'/>
                    </div>

                    <h3>Варианты конструкций</h3>
                    <div className='AlDoorVariants'>
                        <div>
                            <h4>Распашные</h4>
                            <img src={ordinaryDoor} alt='распашная дверь'/>
                            <p>Традиционная схема открывания дверей на поворотных петлях «к себе» либо «от себя» оптимальна для стандартного дверного проема. Обязательно комплектуется доводчиком, надежными ручками и замком.</p>
                        </div>
                        <div>
                            <h4>Штульповые</h4>
                            <img src={doubleDoor} alt='штульповая дверь'/>
                            <p>Конструктивно штульповые двери устроены таким образом, что отпадает необходимость в вертикальной планке - где встречаются два открывающихся полотна в закрытом состоянии. При открывании двух створок, проем полностью освобождается. Это действительно удобно в ситуациях, когда необходимо вносить крупногабаритные предметы.</p>
                        </div>
                        <div>
                            <h4>Маятниковые</h4>
                            <img src={pendulumDoor} alt='маятниковая дверь'/>
                            <p>Круговое вращение подвижных секций относительно оси позволяет открывать дверь на 180 %. Конструктивное решение удобно в офисах и других общественных местах с большим потоком клиентов. Дверь с маятниковым механизмом оснащается специальным доводчиком, обеспечивающим плавное возвращение створки в исходное положение.</p>
                        </div>
                    </div>
                    <h3>наши объекты</h3>
                    <Gallery/>
                    <NavLink className='doorSection' to='/aluDoor'>
                        <div>
                            <h4>АВТОМАТИЧЕСКИЕ АЛЮМИНИЕВЫЕ ДВЕРИ</h4>
                            <p>Помимо стандартных неавтоматизированных дверей мы реализуем автоматические распашные, штульповые и маятниковые алюминиевые двери. С ними Вы можете ознакомиться в этом разделе:</p>
                            <i className="fas fa-hand-point-right"></i>
                        </div>
                        <div><img src={autoDoor} alt='алюминиевые двери'/></div>
                    </NavLink>
                <FindPrice/>
                    </div>  
                </div>
            </div>
        </section>
    )
};