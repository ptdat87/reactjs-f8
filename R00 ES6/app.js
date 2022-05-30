import logger from './logger/index.js'
import * as constants from './constants.js' // Used alias, and constants module have not any default export

logger(constants)
logger('Testing message...',constants.TYPE_WARN)