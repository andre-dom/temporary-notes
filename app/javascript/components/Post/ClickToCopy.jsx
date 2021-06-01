import React, {useState, Fragment, useRef} from 'react'
import { Button, Overlay, Tooltip } from  'react-bootstrap'

const ClickToCopy = () => {

    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <Fragment>
            <Button ref={target} className="border-0 p-0" variant="link" onClick={() => {navigator.clipboard.writeText(window.location.href); setShow(!show)}}>
                Copy Link
            </Button>
            <Overlay rootClose onHide={() => {setShow(!show)}} target={target.current} show={show} placement="top">
                <Tooltip>
                    Copied
                </Tooltip>
            </Overlay>
        </Fragment>
    )
}

export default ClickToCopy