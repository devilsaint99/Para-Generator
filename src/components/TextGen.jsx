import { useRecoilValue } from "recoil"
import { textGenF } from "../textGenF"
import { contentState } from "../atoms"

export function TextGen(){
    const content = useRecoilValue(contentState)
    console.log(content)
    return(
        <div className="text-gen">
            {content}
        </div>
    )
}