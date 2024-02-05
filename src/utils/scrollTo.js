import { useEffect } from "react";
import { useLocation } from "react-router-dom"

const ScrollTo = () => {
    const {pathname} =useLocation();

    useEffect( () => {
        window.scrollTo(0,0);
    },[pathname])
    // 페이지가 바뀌는거 감지해서 맨 위로 올려준다.

    return null; 
}

export default ScrollTo