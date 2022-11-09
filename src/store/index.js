import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    orderList: [null, "small", 0, 0, "", {"샷": 0, "시럽": 0, "컵 홀더": 0,},],    
    menuList: [
      {
        title: "민트 콜드 브루",
        price: 3000,
        selected: false,
        image: "https://image.istarbucks.co.kr/upload/store/skuimg/2022/10/[9200000004312]_20221005145029134.jpg"
      },
      {
        title: "나이트로 콜드 브루",
        price: 4500,
        selected: false,
        image: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg"
      },
      {
        title: "돌체 콜드 브루",
        price: 4000,
        selected: false,
        image: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg"
      },
    ],
    sizeList: [
      {
        name:"small",
        price: 0,
        selected: true,
      },
      {
        name: "medium",
        price: 700,
        selected: false,
      },
      {
        name: "large",
        price: 900,
        selected: false,
      },
    ],
    optionList: [
      {
        type:"샷",
        price: 50,
        count: 0,
      },
      {
        type: "시럽",
        price: 100,
        count: 0,
      },
      {
        type: "컵 홀더",
        price: 20,
        count: 0,
      },
    ],
  },
  getters: {
    totalOrderCount (state) {
      return state.cart.length
    },
    totalOrderPrice (state) {
      let totalPrice = 0
      state.cart.forEach((menu) => {
        totalPrice += (menu[2] + menu[3]) + (menu[5]["샷"] * state.optionList[0].price) + (menu[5]["시럽"] * state.optionList[1].price) + (menu[5]["컵 홀더"] * state.optionList[2].price)
      })
      return totalPrice
    },
  },
  mutations: {
    UPDATE_OPTION_LIST (state, dispatchData) {
      state.optionList.map((option) => {
        if (option.type === dispatchData.option.type) {
          if (dispatchData.whichMethod === "increaseMethod") {
            option.count += 1
          } else if (option.count > 0) {
            option.count -= 1
          }
        }
      })
    },
    ADD_ORDER (state) {
      if (state.orderList[0]) {
        state.orderList[5]["샷"] = state.optionList[0].count
        state.orderList[5]["시럽"] = state.optionList[1].count
        state.orderList[5]["컵 홀더"] = state.optionList[2].count
        state.cart.push(state.orderList.slice(0))
        console.log(state.cart)
      } else {
        window.alert("메뉴를 선택해주세요")
      }
    },
    PICK_MENU (state, pickedMenu) {
      state.menuList.map((menu) => {
        if (menu.title === pickedMenu.title) {
          menu.selected = true
          state.orderList[0] = menu.title
          state.orderList[2] = menu.price
          state.orderList[4] = menu.image
        } else {
          menu.selected = false
        }
      })
    },
    PICK_SIZE (state, pickedSize) {
      state.sizeList.map((size) => {
        if (size.name === pickedSize.name) {
          size.selected = true
          state.orderList[1] = size.name
          state.orderList[3] = size.price
        } else {
          size.selected = false
        }
      })
    }

  },
  actions: {
    updateOptionList(context, dispatchData) {
      context.commit("UPDATE_OPTION_LIST", dispatchData)
    },
    addOrder(context) {
      context.commit("ADD_ORDER")
    },
    pickMenu(context, pickedMenu) {
      context.commit("PICK_MENU", pickedMenu)
    },
    pickSize(context, pickedSize) {
      context.commit("PICK_SIZE", pickedSize)
    },
  },
  modules: {
  }
})