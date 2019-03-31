import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
const state = {
    position : {},
    userName:''
};

const mutations ={
    setPosition(state,val){
        state.position = val;
    },
    setUserinfo(state,val){
        state.userName = val;
    }
};
const actions = {
    setPosition(state,val){
        state.commit('setPosition',val)
    }
};

export default new vuex.Store({
    state,
    mutations,
    actions
});

