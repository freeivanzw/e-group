import axios from 'axios';

const socialApi = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
})

export const usersAsync = {
  getUsers: (pageNumber, pageSize = 16) => {
    return socialApi.get('users', {
      params: {
        count: pageSize,
        page: pageNumber,
      }
    }).then((res) => res.data)
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
  getProfile: (id) => {
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
  },
  getUserStatus: (id) => {
    return socialApi.get(`profile/status/${id}`)
      .then((res) => res.data)
  },
  updateMyStatus: (status) => {
    return socialApi.put('profile/status', {status})
      .then((res) => res.data)
  },
  updatePhoto: (formData) => {
    return socialApi.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => res.data)
  }
}

export const securityAsync = {
  getCaptchaUrl: () => {
    return socialApi.get(`security/get-captcha-url`)
      .then((res) => res.data)
  }
}

export const followAsync = {
  followUser: (id) => {
    return socialApi.post(`follow/${id}`).then((res) => res.data)
  },
  unfollowUser: (id) => {
    return socialApi.delete(`follow/${id}`).then((res) => res.data)
  }
}