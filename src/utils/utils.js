import { showErrorToast } from "./toast"

export const handleAxiosError = (error) => {

    // console.log('error', error.request)
    // console.log('error2', error.response)
    console.log('error3', error.message)
    // console.log('error4', error.config)

    showErrorToast('Error', 'An error occurred while processing your request.')


    if(error.response){
        const { data, status } = error.response;


    } else if (error.request){
    } else {
    }
}