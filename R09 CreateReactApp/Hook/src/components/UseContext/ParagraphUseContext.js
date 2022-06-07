import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function ParagraphUseContext() {
    const context = useContext(ThemeContext)

    return (<div>
        <p className={context.theme}>
            Context provides a way to pass data through the component tree without having to pass props down manual at every level
        </p>
    </div>)
};

export default (ParagraphUseContext);