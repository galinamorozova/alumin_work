import React, {useState} from 'react';
import './barrier.scss';
import SideMenu from '../sideMenu/SideMenu';
import FindPrice from '../findPrice/FindPrice';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; 

import bravo from '../../images/barrier/bravo.jpg';
import anMotors from '../../images/barrier/ASB6000.jpg';
import anMotors1 from '../../images/barrier/ASB6000 - 1.jpeg';
import anMotors2 from '../../images/barrier/ASB6000 - 2.jpeg';
import anMotors3 from '../../images/barrier/ASB6000 - 3.jpeg';
import anMotors4 from '../../images/barrier/ASB6000 - 4.jpeg';
import bar from '../../images/barrier/bar.jpg';
import wide from '../../images/barrier/wide.jpg';
import bar2 from '../../images/barrier/bar2.jpg';
import wide2 from '../../images/barrier/wide2.jpeg';
import antivandalProtector from '../../images/barrier/antivandalProtector.jpeg';
import doorhunBarrier from '../../images/barrier/barrierDoorhun.jpeg';
import carousel from '../../images/barrier/carousel1.jpeg';
import carousel2 from '../../images/barrier/carousel2.jpeg';
import carousel3 from '../../images/barrier/carousel3.jpeg';
import carousel4 from '../../images/barrier/carousel4.jpeg';
import carousel5 from '../../images/barrier/carousel5.jpeg';
import carousel6 from '../../images/barrier/carousel6.jpeg';
import carousel7 from '../../images/barrier/carousel7.jpeg';
import carousel8 from '../../images/barrier/carousel8.jpeg';
import carousel9 from '../../images/barrier/carousel9.jpeg';

export default function Barrier() {

    const [activeTab, setActiveTab] = useState(1);

    const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src={carousel} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel2} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel3} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel4} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel5} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel6} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel7} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel8} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
    <img src={carousel9} onDragStart={handleDragStart} role="presentation" alt='' className='carousel_item'/>,
  ];

  const Gallery = () => {
    return (
        <div className='carousel'>
            <AliceCarousel mouseTracking items={items}/>
        </div>
    );}
    
    return( 
        <section className='barrier'>
            <div className='container'>

                <div className='menu_content'>
                    <SideMenu/>

                    <div className='button_content'>
                    <h5>Шлагбаум + доставка + установка от 60 тыс. руб.</h5>
                    <h5>ВЫБЕРИТЕ БРЕНД:</h5>
                        <div className='buttonWrapper'>
                            <button autoFocus={true} onSelectCapture={true}  onClick={() => setActiveTab(1)}>alutech</button>
                            <button onClick={() => setActiveTab(2)}>anMotors</button>
                            <button onClick={() => setActiveTab(3)}>nice</button>
                            <button onClick={() => setActiveTab(4)}>doorhan</button>
                        </div>
                        {activeTab === 1 && 
                            <div className='content'>
                                <h3>шлагбаумы alutech</h3>
                                <h3>Шлагбаум BRAVO BV-5</h3>
                                <div className='bravoFeatures'>
                                    <img src={bravo} alt='BRAVO BV-5'/>
                                    <div>
                                        <p>Эффективная длина стрелы от 4 м до 6 м, интенсивность - 250 цикл/ч, крутящий момент - 230 Нм, мощность - 100 Вт, степень защиты - IP54, память - 250 пультов, рабочий ресурс - 1 000 000 циклов.</p>
                                        <p><span>Комплект поставки</span>: тумба с подсветкой, встроенный блок управления, пульт (2 шт.), монтажный набор, ключ разблокировки (2 шт.), стрела (прямоугольная), крепление стрелы, демпфер (от 4 м до 6 м), заглушка стрелы (1 шт.), руководство по монтажу и эксплуатации.</p>
                                    </div>
                                </div>
                                
                                <h4>Технические характеристики</h4>
                                <div className='bravoCharacteristics'>
                                    <p>Максимальный крутящий момент, Н⋅м</p>
                                    <p>230</p>
                                    <p>Эффективная длина рейки, м</p>
                                    <p>3-5 (опционально до 6 м)</p>
                                    <p>Питание</p>
                                    <p>230 В (±10%) / 50 Гц</p>
                                    <p>Максимальная потребляемая мощность, Вт</p>
                                    <p>100</p>
                                    <p>Максимальная потребляемая мощность в режиме ожидания,Вт</p>
                                    <p>10</p>
                                    <p>Интенсивность использования, циклов/ч</p>
                                    <p>250</p>
                                    <p>Максимальное время открытия, с</p>
                                    <p>6</p>
                                    <p>Номинальное напряжение электродвигателя, В</p>
                                    <p>24</p>
                                    <p>Радиоуправление</p>
                                    <p>433,92 ± 0,075 МГц / динамический код / максимум 250 пультов</p>
                                    <p>Класс защиты</p>
                                    <p>I</p>
                                    <p>Степень защиты</p>
                                    <p>IP54</p>
                                    <p>Диапазон рабочих температур</p>
                                    <p>-30ºС…+65ºС</p>
                                    <p>Масса шлагбаума (брутто), кг</p>
                                    <p>60</p>
                                </div>
                                <FindPrice/>

                            </div>
                        }
                        {activeTab === 2 && 
                            <div className='content'>
                                <h3>шлагбаумы an-motors</h3>
                                <h3>Шлагбаум AN-Motors ASB6000</h3>
                                <div className='anMotors'>
                                    <img src={anMotors} alt='Шлагбаум AN-Motors ASB6000'/>
                                    <div>
                                        <p>Модель ASB6000 – универсальный автоматический шлагбаум торговой марки AN-Motors предназначен для перекрытия проезда от 3-х до 6-ти метров. Популярность данной модели обуславливается встроенным мотором-редуктором высокой мощности и интенсивности использования.</p>
                                        <p><span>Комплект поставки:</span> Тумба шлагбаума; встраиваемый блок управления с радиоприемником; пульт дистанционного управления (2шт); руководство по монтажу и эксплуатации; монтажный набор согласно руководству.</p>
                                    </div>
                                </div>
                                <h4>Варианты поставки:</h4>
                                <ul>
                                    <li>с комплектом прямоугольной стрелы длиной 4,3 метра</li>
                                    <li>с комплектом прямоугольной стрелы длиной 5,3 метра</li>
                                    <li>с комплектом прямоугольной стрелы длиной 6,3 метра</li>
                                    <li>с комплектом круглой стрелы длиной 6,3 метра</li>
                                </ul>

                           

                                <h3>Преимущества</h3>
                                <div className='plusesBarrier'>
                                    <div>
                                    <h4>Высокая интенсивность использования</h4>
                                    <p>Подходит для организации проезда с высокой интенсивностью движения</p>
                                    </div>
                                    <div>
                                    <h4>Ручная механическая разблокировка</h4>
                                    <p>Перемещение стрелы вручную в случае отсутствия электроэнергии</p>
                                    </div>
                                    <div>
                                    <h4>Внешний блок управления</h4>
                                    <p>Возможность внешней установки блока управления для регулирования проезда, например с пункта охраны</p>
                                    </div>
                                    <div>
                                    <h4>Самоблокирующийся редуктор</h4>
                                    <p>Предотвращение несанкционированного открытия ворот</p>
                                    </div>
                                    <div><img src={anMotors3} alt='Шлагбаум AN-Motors ASB6000'/></div>
                                    <div>
                                    <h4>Бесконтактные (магнитные) выключатели конечных положений</h4>
                                    <h4>Дополнительные (электромеханические) защитные конечные выключатели</h4>
                                    <p>Надежная и точная остановка стрелы шлагбаума в конечном положении</p>
                                    </div>
                                    <div>
                                    <h4>Оснащение рейки шлагбаума амортизирующим демпфером</h4>
                                    <p>Предотвращение возможного ущерба от контакта рейки с машиной или человеком</p>
                                    </div>
                                    <div>
                                    <h4>Возможность подключения дополнительных устройств безопасности (фотоэлементов, сигнальных ламп)</h4>
                                    <p>Обеспечение дополнительной безопасности эксплуатации шлагбаума</p>
                                    </div>
                                    <div><img src={anMotors2} alt='Шлагбаум AN-Motors ASB6000'/></div>
                                    <div><img src={anMotors1} alt='Шлагбаум AN-Motors ASB6000'/></div>
                                    <div>
                                    <h4>Прочный стальной корпус и исполнение всех внутренних движущихся частей из стали</h4>
                                    <p>Обеспечение повышенного ресурса эксплуатации и надежная защита механизма от повреждений и воздействия среды</p>
                                    </div>
                                    <div>
                                    <h4>Балансировочные пружины в комплекте</h4>
                                    <p>Возможность балансировки стрелы длиной от 3 до 6 м</p>
                                    </div>
                                    <div>
                                    <h4>Настройка времени паузы до автоматического закрытия</h4>
                                    <p>Отсутствие необходимости подавать дополнительную команду на закрытие</p>
                                    </div>
                                    <div>
                                    <h4>Возможность подключения устройств управления и контроля доступа (радиокодовой клавиатуры), организации светофорного регулирования</h4>
                                    <p>Расширение функциональности шлагбаума</p>
                                    </div>
                                    <div><img src={anMotors4} alt='Шлагбаум AN-Motors ASB6000'/></div>
                                </div>
                            
                            
                                <h3>Технические характеристики:</h3>
                                <div className='anMotorsCharacteristics'>
                                    <p>Питание от электросети</p>
                                    <p>≈230В / 50 Гц</p>
                                    <p>Крутящий момент</p>
                                    <p>200 Нм</p>
                                    <p>Максимальное время открытия / закрытия</p>
                                    <p>6 с</p>
                                    <p>Эффективная ширина проезда</p>
                                    <p>3-6 м</p>
                                    <p>Степень защиты оболочки</p>
                                    <p>IP44</p>
                                    <p>Интенсивность работы</p>
                                    <p>70%</p>
                                </div>
                                <FindPrice/>
                            </div>
                        }
                        {activeTab === 3 && 
                            <div className='content'>
                                <h3>Шлагбаумы NICE</h3>
                                <p>Итальянская компания NICE, спеуиализирующаяся на производстве автоматики, представляет шлагбаумы 2х серий <span>BAR</span> и <span>WIDE</span>.</p>

                            <div className='niceBarrier'>
                                <div>
                                    <img src={bar} alt='BAR'/>
                                    <p> <span>BAR</span> - это электромеханические шлагбаумы премиального сегмента. Представлены следующими <span>5 видами</span>:</p>
                                    <ul>
                                        <li>S4BAR</li>
                                        <li>M3BAR</li>
                                        <li>M5BAR</li>
                                        <li>M7BAR</li>
                                        <li>L9BAR</li>
                                    </ul>
                                </div>
                                <div>
                                    <img src={wide} alt='WIDE'/>
                                    <p><span>WIDE</span> - базовое решение в электромеханических шлагбаумах. Представлены следующими <span>3 видами</span>:</p>
                                    <ul>
                                        <li>WIDES</li>
                                        <li>WIDEM</li>
                                        <li> WIDEL</li>
                                    </ul>
                                </div>
                            </div>
                            <h3>Серия BAR Nice</h3>
                            <p>Размеры перекрываемого проезда от 3 до 9 метров</p>
                            <div className='barBarrier'>
                                <img src={bar2} alt='BAR'/>
                                <div>
                                    <h4>Функциональный для пользователя:</h4>
                                    <ul>
                                        <li>•	Двойная технология обнаружения препятствий;</li>
                                        <li>•	Режим энергосбережения;</li>
                                        <li>•	Возможность регулировки скорости и усилия двигателя;</li>
                                        <li>•	Программируемое время автоматического закрытия;</li>
                                        <li>•	Плавность хода стрелы благодаря наличию энкодера;</li>
                                        <li>•	Регулируемые ускорение и замедление в начале и конце маневра;</li>
                                        <li>•	Автоматическое закрытие после срабатывания фотоэлементов;</li>
                                        <li>•	Резервное питание от аккумуляторной батареи PS224, устанавливаемой внутри корпуса тумбы шлагбаума (опция);</li>
                                        <li>•	Простая синхронизация работы двух шлагбаумов.</li>
                                        <li>•	Возможность подключения проблесковой лампы, фотоэлементов безопасности</li>
                                    </ul>
                                </div>
                            </div>
                            <h4>Технические характеристики</h4>
                            <div className='barCharacteristics'>
                                <p>Питание</p>
                                <p>230 Вольт пер.тока</p>
                                <p>Питание двигателя</p>
                                <p>24 Вольт пост. тока</p>
                                <p>Номинальный ток</p>
                                <p>1 A</p>
                                <p>Мощность</p>
                                <p>300Ватт</p>
                                <p>Время открытия</p>
                                <p>От 4 до 10 сек</p>
                                <p>Интенсивность</p>
                                <p>От 100 до 200 циклов в час</p>
                                <p>Класс защиты</p>
                                <p>44 IP</p>
                                <p>Температура</p>
                                <p>-20 / +50 °C мин/макс</p>
                            </div>
                            <h3>Серия WIDE Nice</h3>
                            <p>Размеры перекрываемого проезда от 3 до 7 метров</p>
                            <div className='wideBarrier'>
                                <img src={wide2} alt='WIDE'/>
                                <div>
                                    <h4>Функциональный для пользователя:</h4>
                                    <ul>
                                        <li>•	Программируемое время автоматического закрытия;</li>
                                        <li>•	Автоматическое закрытие после срабатывания фотоэлементов;</li>
                                        <li>•	Резервное питание от аккумуляторной батареи PS324, устанавливаемой внутри корпуса тумбы шлагбаума (опция);</li>
                                        <li>•	Возможность установки проблесковой лампы и фотоэлементов внутри корпуса шлагбаума.</li>
                                    </ul>
                                </div>
                            </div>
                            <h4>Технические характеристики</h4>
                            <div className='wideCharacteristics'>
                                <p>Питание</p>
                                <p>230 Вольт пер.тока</p>
                                <p>Питание двигателя</p>
                                <p>24 Вольт пост. тока</p>
                                <p>Номинальный ток</p>
                                <p>1.3 - 1.5 A</p>
                                <p>Мощность</p>
                                <p>300Ватт</p>
                                <p>Время открытия</p>
                                <p>От 4 до 7 сек</p>
                                <p>Интенсивность</p>
                                <p>От 100 до 200 циклов в час</p>
                                <p>Класс защиты</p>
                                <p>44 IP</p>
                                <p>Температура</p>
                                <p>-20 / +50 °C мин/макс</p>
                            </div>

                            <FindPrice/>

                            </div>
                        }
                        {activeTab === 4 && 
                            <div className='content'>
                            <h3>шлагбаумы doorhan</h3>
                                <h3>АНТИВАНДАЛЬНЫЙ ШЛАГБАУМ BARRIER PROTECTOR</h3>
                                <div className='antivandalProtector'>
                                    <img src={antivandalProtector} alt='АНТИВАНДАЛЬНЫЙ ШЛАГБАУМ BARRIER PROTECTOR'/>
                                    <ul>
                                        <li>Стальной антивандальный корпус надежно защищает механизмы шлагбаума от противоправных действий, механических повреждений и воздействий окружающей среды.</li>
                                        <li>Усиленная стрела, сваренная из стальных профилей, перемещается в горизонтальном положении и не имеет уязвимых мест.</li>
                                        <li>В качестве крепежных элементов конструкции использованы метизы антивандального исполнения, особенностью которых является невозможность демонтажа обычными инструментами и приемами.</li>
                                        <li>широкий диапозон размеров: длина стрелы от 3 до 6 м</li>
                                        <li>защита от несанкционированной разблокировки - приводы и корпус оснащены замком</li>
                                        <li>Дополнительно можно укомплектовать: Wi-Fi и  GSM модулями, фотоэлементами, проблесковой лампой, радиокодовой клавиатурой.</li>
                                    </ul>
                                </div>
                                <h4>Технические характеристики</h4>
                                <div className='barrierProCharacteristics'>
                                    <p>ПАРАМЕТР</p>
                                    <p>ЗНАЧЕНИЕ</p>
                                    <p>Длина стрелы, м</p>
                                    <p>3; 3,5; 4; 4,5; 5; 5,5; 6</p>
                                    <p>Напряжение питания, В</p>
                                    <p>220</p>
                                    <p>Мощность, Вт</p>
                                    <p>130</p>
                                    <p>Диапазон рабочих температур, °С</p>
                                    <p>-20...+50</p>
                                    <p>Скорость открывания, м/мин</p>
                                    <p>9</p>
                                    <p>Класс защиты IP</p>
                                    <p>IP54</p>
                                </div>
                                

                                <h3>ШЛАГБАУМ BARRIER-PRO и PRO-RPD</h3>
                                <img src={doorhunBarrier} alt='BARRIER-PRO'/>
                                <h4>Технические характеристики</h4>
                                <div className='barrierProCharacteristics'>
                                    <p>ПАРАМЕТР</p>
                                    <p>ЗНАЧЕНИЕ</p>
                                    <p>Длина стрелы, м</p>
                                    <p>3*; 4; 5; 6 (* Barrier PRO-RPD)</p>
                                    <p>Напряжение питания, В</p>
                                    <p>220–240</p>
                                    <p>Мощность, Вт</p>
                                    <p>300</p>
                                    <p>Диапазон рабочих температур, °С</p>
                                    <p>-40...+55</p>
                                    <p>Максимальное время открывания/закрывания, сек</p>
                                    <p>6/2* (* Barrier PRO-RPD)</p>
                                    <p>Класс защиты IP</p>
                                    <p>54</p>
                                    <p>Интенсивность использования, %</p>
                                    <p>70</p>
                                </div>
                                <p>Дополнительно можно укомплектовать: Wi-Fi и  GSM модулями, фотоэлементами, проблесковой лампой, радиокодовой клавиатурой.</p>
                                <FindPrice/>
                            </div>
                        }

                        <h3>наши объекты</h3>
                        <Gallery/>
                        <h5>ВЫБЕРИТЕ БРЕНД:</h5>
                        <div className='buttonWrapper'>
                            <button onClick={() => setActiveTab(1)}>alutech</button>
                            <button onClick={() => setActiveTab(2)}>anMotors</button>
                            <button onClick={() => setActiveTab(3)}>nice</button>
                            <button onClick={() => setActiveTab(4)}>doorhan</button>
                        </div>
                    </div>
                    

                </div>
            </div>
        </section>
    );
}