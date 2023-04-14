import Vue from 'vue'
import Vuex from 'vuex' // 引入 vuex
import axios from 'axios'
import qs from 'qs'
import Cookies from 'js-cookie'
Vue.use(Vuex) // 使用 vuex

export default new Vuex.Store({
  state: {
    baseURL: process.env.NODE_ENV === 'development' ? '/api' : '', // development

    userInfo: JSON.parse(window.localStorage.getItem('userInfo')) || {},
  },
  mutations: {

  },
  actions: {
    setCookie({ state }, data) {
      Cookies.set('token', data)
    },
    login({ state, dispatch }, data) {
      state.userInfo = data
      window.localStorage.setItem('userInfo', JSON.stringify(data))
      dispatch('setCookie', 'Bearer ' + data.token)
    },
    logout({ state, dispatch }) {
      console.log('logout')
      // dispatch('post', {
      //   url: 'administrator/logout/'
      // })
      state.userInfo = {}
      window.localStorage.removeItem('userInfo')
      Cookies.remove('token')
    },
    // 3种请求方式
    post({ state }, data) { // post请求
      const url = data.url
      delete data.url
      // data = qs.stringify(data)
      // console.log(data)
      return new Promise((resolve, reject) => {
        axios({
          url: state.baseURL + url, // 请求地址
          method: 'post', // post或者get
          headers: {// 请求头部
            'AUTHORIZATION': Cookies.get('token') || '',
            'Content-Type': 'application/json'
          },
          data: data
        }).then(res => {
          if (res.data.token) {
            resolve(res.data)
          } else {
            reject(new Error(res.data))
          }
        }).catch(error => {
          console.log(error)
          reject(new Error(error))
        })
      })
    },
    cancel({ state }, data) {
      const url = data.url
      delete data.url
      data = qs.stringify(data)
      return new Promise((resolve, reject) => {
        axios({
          url: state.baseURL + url, // 请求地址
          method: 'delete', // post或者get
          headers: {// 请求头部
            'AUTHORIZATION': Cookies.get('token') || ''
          },
          data: data
        }).then(res => {
          resolve(res.data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    put({ state }, data) {
      const url = data.url
      delete data.url
      data = qs.stringify(data)
      // console.log(data)
      return new Promise((resolve, reject) => {
        axios({
          url: state.baseURL + url, // 请求地址
          method: 'put', // post或者get
          headers: {// 请求头部
            'AUTHORIZATION': Cookies.get('token') || '',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: data
        }).then(res => {
          resolve(res.data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    get({ state }, data) { // get请求
      const url = data.url
      delete data.url
      return new Promise((resolve, reject) => {
        axios({
          url: state.baseURL + url, // 请求地址
          method: 'get', // post或者get
          headers: {// 请求头部
            'AUTHORIZATION': Cookies.get('token') || ''
          },
          params: data
        }).then(res => {
          resolve(res.data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    uploadFile({ state }, data) { // 上传文件方法
      const url = data.url
      return new Promise((resolve, reject) => {
        axios.post(state.baseURL + url, data.param, {
          headers: {
            'AUTHORIZATION': Cookies.get('token') || '',
            'Content-Type': 'multipart/form-data'
          }
        }).then(res => {
          resolve(res.data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  getters: {

  }
})
