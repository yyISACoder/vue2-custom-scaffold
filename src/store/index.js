import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  //strict: true, //在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到
  state: {
    welcomeTxt: '欢迎使用Carl的Vue2脚手架😉'
  },
  mutations: {
    changeWelcomeTxt(state, payload) {
      state.welcomeTxt = payload
    }
  }
})

export default store
