import { AppProps } from './../types/types'

export const initialState: AppProps = {
    compiler: "TypeScript",
    framework: "React"
}

export default function appReducer(state = initialState) {
    return state
}