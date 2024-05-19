import { useState } from "react"

export const useApiCall = (callback) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async (...args) => {
        try {
            setIsLoading(true)
            setError('')
            const result = await callback(...args)
            return result;
        } catch (error) {
            setIsLoading(false)
            error.response ? setError(error.response.data) : setError("Unknown error");
        } finally {
            setIsLoading(false)
        }
    }

    return[fetching, isLoading, error]
}