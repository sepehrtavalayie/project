import React from 'react';

const FaceRecognition = ({imageurl}) =>{
    return(
        <div>
           <div className='center ma'>
               <div className='absolute mt2'>
                     <img alt='face' src={imageurl} width='500px' height='auto'/>
               </div>
           </div>
        </div>
    )
}
export default FaceRecognition;