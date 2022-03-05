export const SPIN_ANS="SPIN_ANS"

export const SPIN_BUTTONS="SPIN_BUTTONS"

export const SPIN_CLEAR="SPIN_CLEAR"

export const SPIN_BACKSPACE="SPIN_BACKSPACE"

export const loadButtons=(number)=>{
    return {
        type:SPIN_BUTTONS,
        payload:number
    }
}

export const loadAns=(number)=>{
    console.log(number);
    return {
        type:SPIN_ANS,
        payload:number
    }
}

export const loadClear=(number)=>{
    return {
        type:SPIN_CLEAR,
        payload:number
    }
}

export const loadBackspace=(number)=>{
    return {
        type:SPIN_BACKSPACE,
        payload:number
    }
}

