import { useState } from "react"
const useProps = () => {
    const [props, setProps] = useState('')
    const handlePropsChange = ({target}: any)=>{
        setProps(target.value)
    }

    return {
        props, handlePropsChange
    }
}
export default useProps;