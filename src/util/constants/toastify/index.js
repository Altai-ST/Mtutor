import { toast } from "react-toastify"

export const successToastify = (text) =>{
    return toast.success(text)
}

export const errorToastify = (text) =>{
    return toast.error(text)
}