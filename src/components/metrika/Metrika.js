import React from 'react';
import { YMInitializer } from 'react-yandex-metrika';


export default function Metrika(props) {

  
    
        return (
        
            <div>
             <YMInitializer accounts={[78753393]} options={{clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor: true}} version="2"/>
          </div>
        );
}