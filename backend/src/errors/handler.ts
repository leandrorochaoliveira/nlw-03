import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup'

interface ValidationErrors {
    [key: string]: string[]
}

const erroHandler: ErrorRequestHandler = (error, request, response, next) => {
    if (error instanceof ValidationError) {
        let erros: ValidationErrors = {}

        error.inner.forEach(err=> {
            erros[err.path] = err.errors
        })

        return response.status(400).json({message: 'Validation Erros', erros})
    }
    console.log(error)
    return response.status(500).json({message: 'Internal Server Error'})
}

export default erroHandler