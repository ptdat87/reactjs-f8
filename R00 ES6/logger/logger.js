import {TYPE_Log,TYPE_WARN,TYPE_ERROR} from '../constants.js'

function logger(log, type = TYPE_Log){
    console[type](log); 
}

export default logger;