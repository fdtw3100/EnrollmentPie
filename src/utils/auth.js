/**
 * Created by ZhuGongpu on 16/4/21.
 */

//TODO: Dummy Implementation
var loginStorage = {};
export function login(email, pass, userType, callback) {
    if (loginStorage.token) {
        if (callback) callback(true);
        return
    }
    pretendRequest(email, pass, (res) => {
        if (res.authenticated) {
            loginStorage.userType = userType.value;
            loginStorage.token = res.token;
            if (callback) callback(true)

        } else {
            if (callback) callback(false)

        }
    })
}

export function getToken() {
    return loginStorage.token;
}

export function logout(callback) {
    delete loginStorage.token;
    if (callback) callback()
}
export function loggedIn() {

    return !!loginStorage.token;
}

export function pretendRequest(email, pass, callback) {
    setTimeout(() => {
        if (email === '' && pass === '') {
            callback({
                authenticated: true,
                token: Math.random().toString(36).substring(7)
            })
        } else {
            callback({authenticated: false})
        }
    }, 0)
}
