import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm =({onInputChange,OnButtonSubmit,onButtonDelete})=>{
    return(
        <div>
            <p className='f3'>
                {'this magic rain will detect faces in your pictures git it a try.'}
            </p>
            <div className='center'>
                <div className='form  center pa4 br3 shadow-5'>
                    <input  className='f4 pa2 w-70 center' type='text'  onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple ml2' onClick={OnButtonSubmit}>detect</button>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple ml2' onClick={onButtonDelete}>delete</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;