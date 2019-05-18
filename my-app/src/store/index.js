import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        test: 'vuex test is indeed working.',
        allGraphicTees: [],
        allHats: [],
        allClothes: [],
        carouselItems: [],
        comingSoon: [{status: "empty", description: "Coming soon!"}],
        url: "PLACEHOLDER"
    },
    mutations: {
        SET_TEST(state, test_Value) {
            state.test = test_Value;
        },
        ADD_TEES(state, tee) {
            var teeAlreadyIn = false;
            for (let i = 0; i < state.allGraphicTees.length; i++) {
                if (tee.id == state.allGraphicTees[i].id) {
                    teeAlreadyIn = true;
                }
            }
            if (teeAlreadyIn === false) {
                state.allGraphicTees.push(tee); // add tee to list of all tees unless it is already in that list
                state.allClothes.push(tee); // add tee to list of all clothes unless it is already in that list
                if (tee.carousel === true) { state.carouselItems.push(tee); } //add tee to carousel if it belongs there (this data is stored in firebase)
                // eslint-disable-next-line no-console
                console.log("Added Item: ", state.allGraphicTees[state.allGraphicTees.length - 1].name);
            }
            else {
                // eslint-disable-next-line no-console
                console.log("Tee is already in.");
            }
        },

        ADD_HATS(state, hat) {
            var hatAlreadyIn = false;
            for (let i = 0; i < state.allHats.length; i++) {
                if (hat.id == state.allHats[i].id) {
                    hatAlreadyIn = true;
                }
            }
            if (hatAlreadyIn === false) {
                state.allHats.push(hat); // add tee to list of all tees unless it is already in that list
                state.allClothes.push(hat); // add hat to list of all clothes unless it is already in that list
                if (hat.carousel === true) { state.carouselItems.push(hat); } //add tee to carousel if it belongs there (this data is stored in firebase)
                // eslint-disable-next-line no-console
                console.log("Added Item: ", state.allHats[state.allHats.length - 1].name);
            }
            else {
                // eslint-disable-next-line no-console
                console.log("Hat is already in.");
            }
        },

        REMOVE_TEES(state, index) {
            var tees_holder = [];
            for (let i = 0; i < state.allGraphicTees.length; i++) {
                if (i !== index) {
                    tees_holder.push(state.allGraphicTees[i]);
                }
            }
            // eslint-disable-next-line no-console
            console.log("Removed Item: ", state.allGraphicTees[index].name);
            state.allGraphicTees = tees_holder;
        },

        UPDATE_TEES(state, index) {
            var tees_holder = [];
            for (let i = 0; i < state.allGraphicTees.length; i++) {
                if (i !== index) {
                    tees_holder.push(state.allGraphicTees[i]);
                }
            }
            // eslint-disable-next-line no-console
            console.log("Changed Item: ", state.allGraphicTees[index].name);
            state.allGraphicTees = tees_holder;
        },

        SET_API(state, url) {
            state.url = url;
        }

    },
    actions: {
        fetchTest(context, test_val) {
            context.commit('SET_TEST', test_val);
        },

        CLOTHES_ADDER(context, article) {
            if (article.type === "Graphic Tee") {
                context.commit('ADD_TEES', article);
            }
            else if (article.type === "Hat") {
                // eslint-disable-next-line no-console
                console.log("hat was added:" + article.name);
                context.commit('ADD_HATS', article);
            }
            
        },

        TEE_REMOVER(context, index) {
            context.commit('REMOVE_TEES', index);
        },

        TEE_UPDATER(context, index) {
            context.commit('UPDATE_TEES', index);
        },

        API_ADDER(context, url) {
            //context.commit('UPDATE_TEES', url);
        }

    },
    getters: {
        GET_TEST(state) {
            return state.test;
        },
        GET_TEES(state) {
            return state.allGraphicTees;
        },
        GET_TEES_LENGTH(state) {
            return state.allGraphicTees.length;
        },
        GET_CAROUSEL_ITEMS(state) {
            return state.carouselItems;
        },
        GET_CAROUSEL_LENGTH(state) {
            return state.carouselItems.length;
        },

        GET_API(state) {

            return state.url;
        },

        GET_CONTENT: (state) => (type) => {
            if (type === "tees") {
                return state.allGraphicTees;
            }
            else if (type === "hats") {
                return state.allHats;
            }
            else {
                return state.comingSoon;
            }
        },

        GET_ITEM_BY_ID: (state) => (id) => {
            for (let i = 0; i < state.allClothes.length; i++) {
                if (id === state.allClothes[i].id) {
                    return state.allClothes[i];
                }
            }
        },

    }
})