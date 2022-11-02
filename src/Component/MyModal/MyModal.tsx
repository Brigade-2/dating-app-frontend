import React, {FC} from "react";
import classes from "./MyModal.module.css";

interface props {
    children?: React.ReactNode,
    modalActive: boolean,
    setModalActive: (active: boolean) => void
}

const MyModal = ({children, modalActive, setModalActive}:props) => {
    let classVisible = [classes.myModal]


    if(modalActive) {
        classVisible.push(classes.activeModal)
    }


    return(
        <div className={classVisible.join(' ')} onClick={() => setModalActive(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal