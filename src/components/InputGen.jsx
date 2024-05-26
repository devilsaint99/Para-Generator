import { useEffect, useRef } from "react"
import { useRecoilState,  useSetRecoilState } from "recoil"
import { contentState, words } from "../atoms"
import { textGenF } from "../textGenF"
import { inputSchema } from "../inputValidation"

export function InputGen(){
    const inputRef = useRef()
    const [wordsC,setWordsC] = useRecoilState(words)
    const setContent = useSetRecoilState(contentState)

    useEffect(()=>{
        inputRef.current.focus()
    },[])

    const handleInputChange = (e) => {
        setWordsC(e.target.value)
        
    }
    
    const handleClick = () => {
        const validate = inputSchema.safeParse(Number(wordsC))
        console.log(validate)
        if(validate.success){
            const con = textGenF(parseInt(wordsC))
            setContent(con)
        }
        else{
            console.error("Wrong input")
        }
        
    }

    return(
        <div className='input-gen'>
            <input type="text" placeholder="Enter Number of Words" value={wordsC} ref={inputRef} onChange={handleInputChange} >
            </input>
            <button onClick={handleClick}>
                Generate
            </button>
        </div>
    )
}