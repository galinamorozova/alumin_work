import React from 'react';
import './plasticDoor.scss';
import SideMenu from '../../sideMenu/SideMenu';
import FindPrice from '../../findPrice/FindPrice';

import doorTittle1 from '../../../images/plastic/doortittle1.jpeg';
import doorTittle2 from '../../../images/plastic/doortittle2.jpeg';
import doorTittle3 from '../../../images/plastic/doortittle3.jpeg';
import color1 from '../../../images/plastic/lamidoor1.jpg';
import color2 from '../../../images/plastic/lamidoor2.jpg';
import color3 from '../../../images/plastic/lamidoor3.jpg';
import color4 from '../../../images/plastic/lamidoor4.jpg';
import rehau_60 from '../../../images/plastic/rehau_60.png';
import rehau_70 from '../../../images/plastic/rehau_70.png';


export default function PlasticDoor() { 
    return( 
        <section className='plasticDoor'>

            <div className='container'>
                <div className='menu_content'>
                    <SideMenu/>

                    <div className='button_content'>
                    <h3>ПВХ двери</h3>
                    <div className='doorTittle'>
                        <img src={doorTittle1} alt='ПВХ двери'/>
                        <img src={doorTittle2} alt='ПВХ двери'/>
                        <img src={doorTittle3} alt='ПВХ двери'/>
                    </div>
                    <p>ПВХ двери используются в качестве <span>входных</span> (бОльшая прочность достигается засчет армирования); <span>балконных</span> (изготовляются в соответствии с требованиями, предъявляемыми к оконным системам, также могут оснащаться поворотно-откидным механизмом. Отличаются повышенным порогом больше 20мм для защиты от продувания) и <span>межкомнатных</span> (как и входные имеют стандартный низкий порог в 20мм высотой для удобства перемещения).</p>
                    <p>Сейчас на рынке представлено большое количество разных производителей, которые предлагают еще большее количество вариантов исполнения пластиковых окон. Однако, мы пошли иным путем: многолетний опыт работы в этой сфере позволил нам выделить несколько из наилучших на наш взгляд вариантов <span>по соотношению цена/качество.</span></p>
                    <p>В сегменте ПВХ дверей мы остановили свой выбор на REHAU 60мм и 70мм. Это те варианты, которые обеспечивают нужный уровень <span>взломостойкости, безопасности, шумо- теплоизоляции, энергосбережению и защите от сквозняков</span> по разумной цене.</p>
                    <p>Таким образом, Вам не нужно вникать во все существующие варианты, можно выбрать любой из представленных ниже - и Вы не ошибетесь!</p>

                    <h3>REHAU Дверные системы 60 мм</h3>
                    <div><img src={rehau_60} alt='door60'/></div>
                    <p>Сочетает в себе отличные показатели по <span>шумо- и теплоизоляции</span>, высокое качество профиля и элегантный дизайн.</p>
                    
                    <h4>Основные системные характеристики:</h4>
                    <ul>
                        <li>Системная глубина: 60 мм.</li>
                        <li>Количество камер: 2 (створка) / 4 (коробка).</li>
                        <li>Максимальная толщина заполнения: 33 мм.</li>
                        <li>Поверхность: гладкая и легкая в уходе.</li>
                        <li><span>Взломобезопасность</span>: до 3 класса.</li>
                        <li><span>Звукоизоляция</span>: до 4 класса.</li>
                    </ul>
                    <h4>Возможные варианты исполнения:</h4>
                    <p>Входные двери для административных, офисных и торговых зданий, а также объектов частного строительства.</p>
                    <p>Одностворчатые входные двери с открыванием внутрь и наружу, в т.ч. с глухими боковыми частями.</p>
                    <p>Двустворчатые входные двери с открыванием внутрь и наружу.</p>
                    <p>Входные двери с фрамужными частями.</p>
                    <p>Другие конструктивные варианты исполнения входных дверей.</p>

                    <h3>REHAU Дверные системы 70 мм</h3>
                    <div><img src={rehau_70} alt='door70'/></div>
                    <p>4 воздушные камеры и 2 контура уплотнений, выполненных из качественного синтетического каучука препятствуют проникновению холодного воздуха. А широкая цветовая палитра позволит вписать входные двери REHAU в любой экстерьер.</p>
                    
                    <h4>Основные системные характеристики:</h4>
                    <ul>
                    <li>Системная глубина: 70 мм.</li>
                    <li>Количество камер: 4/5</li>
                    <li><span>Приведенное сопротивление теплопередаче</span> Rопр 0,70 м²°С/Вт со стальным армированием</li>
                    <li>Материал: RAU-PVC, с использованием <span>кальций-цинковых стабилизаторов</span></li>
                    <li><span>Улучшенная теплотехника</span> за счет  4-х камерного строения профиля</li>
                    <li>Совместимость с коробками системной глубины 70 мм и типовое <span>армирование</span></li>
                    </ul>
                    
                    <p>Система дверных профилей REHAU 70 мм идеально подходит для <span>административных, офисных и торговых зданий, а также объектов частного строительства</span>.</p>
                    
                    <h3>Варианты ламинации входных групп</h3>
                    <div className='colors'>
                        <img src={color1} alt='color'/>
                        <img src={color2} alt='color'/>
                        <img src={color3} alt='color'/>
                        <img src={color4} alt='color'/>
                    </div>

                    <FindPrice/>
                    </div>
                </div>
            </div>
        </section>
    )
};