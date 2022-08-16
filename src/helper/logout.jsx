const DeteleToken = () => {
    window.localStorage.removeItem('loginData');
    window.location.href = '/login'
}

export default DeteleToken;