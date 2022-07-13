import { useState } from "react"
const useLab = () => {

    const [lab, setLabs] = useState('')
    const handleLabChange = ({target}: any)=>{
      setLabs(target.value)
    }
    
    return {
        lab, handleLabChange
    }
}

export default useLab;