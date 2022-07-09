import React from 'react'
import './style.css'
import { withStyles } from '@material-ui/core/styles'
import { Radio } from '@material-ui/core'

function RadioButton(){
    const CustomRadio = withStyles({
        root: {
            color: '#FFD3CA',
            '&$checked': {
             color: "#eb8f7a",
            },

        },
        checked: {},
    })((props) => <Radio color="default" {...props} />)
    
    return (    
        <div className='radioOptions'>
            <div>
            <CustomRadio />
            <span>Todos</span>
            </div>
            <div>
            <CustomRadio />
            <span>Prioridade</span>
            </div>
            <div>
            <CustomRadio />
            <span>Prioridade</span>
            </div>
    
          
     </div>
    
        
        )
    }
export default RadioButton;

