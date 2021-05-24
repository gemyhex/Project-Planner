import Plans from "../../../data/db.js"


const state = {
    projects: Plans
};
const mutations = {

};
const actions = {

};
const getters = {
    getPlans(){
        return state.projects
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}