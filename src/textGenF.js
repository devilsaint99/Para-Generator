export function textGenF(iter){
    const words= ["hello", "you", "me", "let's", "fight","walk", "how", "run"]
    let random = ""
    let para = ""
    while(iter){
        random = Math.floor(Math.random() * words.length)
        const word = words[random]
        para = para === ""? para+word: para+" "+word
        iter-=1
    }
    return para
}