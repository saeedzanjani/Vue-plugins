<template>
<div class="nav_container">
  <nav class="navbar">
      <span class="nav_title_part1">
    {{ title }}
        <span class="nav_title_part2">{{title2}}</span>
  </span>
    <ul class="nav_items">
      <li class="nav_item">
        <router-link class="nav_link" active-class="active" exact to="/">
          <img alt="Vue logo" class="nav_icon" src="../assets/columns_gap_icon_160222.svg">
          Marketing
        </router-link>
      </li>
      <li class="nav_item">
        <router-link class="nav_link" active-class="active" to="/finance">
          <img alt="Vue logo" class="nav_icon" src="../assets/columns_gap_icon_1602.svg">
          Finance
        </router-link>
      </li>
      <li class="nav_item">
        <router-link class="nav_link" active-class="active" to="/personnel">
          <img alt="Vue logo" class="nav_icon" src="../assets/bank_bill_finance_invoice_money_payment_receipt_icon_123239.svg">
          Personnel
        </router-link>
      </li>
    </ul>
  </nav>
  <div class="main_switch">
    <span class="main_switch_checkbox_text">{{ store.state.switchTitle }}</span>
    <b-form-checkbox
        :style="checkboxStyles"
        class="main_switch_checkbox"
        switch
        size="lg"
        v-model="store.state.switchApp"
        :checked="store.state.switchApp"
        @change="store.methods.changeState"
    />
  </div>
</div>
</template>
<script>
import {
  mapState,
    mapGetters,
  mapMutations
} from "vuex";
import {inject} from "vue";

export default {
  name: "navbar-app",
  setup(){

    const store = inject('store')

    return {
      store,
    }
  },
  data: () => {
    return{
      title: "Data",
      title2: "Guard",
      toggle: false,
      navbarSwitchTitle: 'All plugins enabled'
    }
  },
  computed: {
...mapState({
  switchPlugins: state => state.plugins.switchPlugins
}),
    ...mapGetters({
      myCheck: "GetSwitchPlugins"
    }),
    checkboxStyles() {
      return{
        backgroundColor: this.store.state.switchApp ? 'rgb(97, 186, 38) !important' : 'rgb(165,0,0)',
        borderColor: 'rgb(97, 186, 38) !important',
        color: '#fff',
        width: '50px',
        height: '30px',
        marginRight: '30px'
      }
    },
  },
  methods: {
    ...mapMutations({
      updateSwitch: "SetSwitchPlugins"
    }),
  },
}
</script>

<style scoped>

.navbar{
  height: auto;
  display: flex;
  width:auto;
  flex-flow: column;
}

.nav_container{
  height: 100vh;
  width: 280px;
  background-color: rgb(225, 224, 224);
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.nav_items{
  padding: 0;
  width: 100%;
  margin-top: 30px;
}
.nav_item{
  height: 50px;
  list-style: none;
  width: 100%;
  display: flex;
  align-items: center;
}

.active{
  background-color: rgb(255, 255, 255);
  list-style: none;
  width: 100%;
  padding: 14px 0;
  border-left: 5px solid red;
}

.nav_icon{
  margin: 0 8px;
  width: 24px;
  height: 24px;
}

.nav_link{
  text-decoration: none;
  color: rgb(19, 9, 9);
  font-size: 16px;
  font-weight: 500;
}

.nav_title_part1{
  font-size: 30px;
  display: inline;
  margin-top: 10px;
  position: relative;
  width: 100%;
  margin-left: 60px;
}

.nav_title_part2{
  font-size: 30px;
  display: inline;
  margin-top: 10px;
  font-weight: 600;
  position: absolute;
  top: -8px;
}

.main_switch{
  display: flex;
  flex-flow: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 20px;
}

.main_switch_checkbox{
  margin-right: 20px;
  width: 50px;
  height: 30px;
}

@media (max-width: 440px) {
  .nav_container{
    width: 35%;
  }

  .nav_title_part1{
    font-size: 20px;
    margin-left: 20px;
  }

  .nav_title_part2{
    font-size: 20px;
  }

  .nav_link{
    font-size: 14px;
  }

  .nav_icon{
    width: 20px;
    height: 20px;
  }

  .main_switch{
    margin: 5px;
  }

  .main_switch_checkbox_text{
    font-size: 12px;
    margin-right: 10px;
  }
}

@media (max-width: 360px) {
  .nav_title_part1{
    margin-left: 5px;
  }
}
</style>
