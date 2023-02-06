import axios from 'axios';

const socialApi = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
})

export const usersAsync = {
  getUsers: () => {
    return socialApi.get('users')
      .then((res) => res.data)
  }
}

export const authAsync = {
  checkMe: () => {
    return socialApi.get('auth/me')
      .then((res) => res.data)
  },
  login: (email, password, rememberMe, captcha) => {
    return socialApi.post('auth/login', {
      email: email,
      password: password,
      rememberMe: rememberMe,
      captcha: captcha
    }).then((res) => res.data)
  },
  logout: () => {
    return socialApi.post('auth/logout')
      .then((res) => res.data)
  }
}

export const profileAsync = {
  getMyProfile: (id) => {
    return socialApi.get(`profile/${id}`)
      .then((res) => res.data)
  },
  updateMyProfile: (myProfile) => {
    return socialApi.put('profile', {
      aboutMe: myProfile.aboutMe,
      contacts: {
        facebook: myProfile.contacts.facebook,
        github: myProfile.contacts.github,
        instagram: myProfile.contacts.instagram,
        mainLink: myProfile.contacts.mainLink,
        twitter:  myProfile.contacts.twitter,
        vk: null,
        website: myProfile.contacts.website,
        youtube: myProfile.contacts.youtube,
      },
      lookingForAJob: myProfile.lookingForAJob,
      lookingForAJobDescription: myProfile.lookingForAJobDescription,
      fullName: myProfile.fullName,
    })
      .then((res) => res.data);
  }
}

export const securityAsync = {
  getCaptchaUrl: () => {
    return socialApi.get(`security/get-captcha-url`)
      .then((res) => res.data)
  }
}