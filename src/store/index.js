import Vuex from 'vuex';
import Vue from 'vue';
import shop from '@/api/shop';

Vue.use(Vuex);

export default new Vuex.Store({
    state: { // equivilant to "data" in a self-contained vue component
        products: []
    },

    getters: {  // equivilant to "computed properties" in a self-contained vue component
        availableProducts(state, getters) {
            return state.products.filter(product => product.inventory > 0)
        }
    },
    actions: {
        fetchProducts({commit}) {
            return new Promise((resolve, reject) => {
                shop.getProducts(products => {
                    commit('setProducts', products);
                    resolve();
                    //call the mutation within store to do the updating, instead of directly doing it
                    // mutations must be "commited to" via the store.commit method; a mutation is committed
                    // store.commit('mutationName', parameterIfRequired);
                });
            });
        },
        // addToCart(context, product) {
        //     if (product.inventory > 0){
        //         context.commit('pushProductToCart', product);
        //     } else {
        //         alert('Sorry, we are out of ' + product + '!');
        //     }
        // }
    },
    mutations: {
        setProducts(state, products) {
            // update products
            state.products = products
        }
    },
})

/*

A Vue app without vuex has three parts:

state (data)

view (template)

actions (methods)

*/