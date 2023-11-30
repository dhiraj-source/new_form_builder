
import Button from '@mui/material/Button'

const ButtonsContained = ({text,col}) => {
    return (
        <div className='demo-space-x'>
            <Button variant='contained' href='#' color={col}>
                {text}
            </Button>
        </div>
    )
}

export default ButtonsContained
