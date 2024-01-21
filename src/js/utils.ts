export const genheaders = () => {
    const seshkey = localStorage.getItem('seshkey');
    const email = localStorage.getItem('email');
    const headers = {
        'Content-Type': 'application/json',
        'seshkey': seshkey,
        'email': email
    }
    return headers;
}