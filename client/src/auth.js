import Axios from 'axios'
import router from '@/router'

export default {
  user: { authenticated: false },

  authenticate (context, credentials, redirect) {
    Axios.post('https://aqueous-retreat-19121.herokuapp.com/api/login', credentials)
        .then(({data}) => {
          context.$cookie.set('token', data.token, '1D')
          context.validLogin = true
          this.user.authenticated = true
          router.push(redirect)
          window.location.replace(redirect)
        });
  },

  signup (context, credentials, redirect) {
    Axios.post('https://aqueous-retreat-19121.herokuapp.com/api/signup', credentials)
        .then(() => {
          context.validSignUp = true

          this.authenticate(context, credentials, redirect)
          router.push(redirect)
        });
  },

  signout (context, redirect) {
    context.$cookie.delete('token')
    context.$cookie.delete('user_id')
    this.user.authenticated = false

    window.location.replace(redirect)
  },

  checkAuthentication () {
    const token = document.cookie
    this.user.authenticated = !!token
  },

  isAuthenticated() {
    if(document.cookie) return true;
    return false;
  },

  getAuthenticationHeader (context) {
    return `Bearer ${context.$cookie.get('token')}`
  }
}