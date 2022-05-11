
export default function authHeader() {
    return { Authorization: 'Bearer ' + process.env.REACT_APP_OPENAI_KEY };
}
