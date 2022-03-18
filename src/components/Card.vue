<template>
    <b-card
        class="card_wrapper"
        :style="{opacity: disabledCard ? 0.5 : 1}"
    >
      <div class="card_header_wrapper">
      <span class="cardTitle">
{{ plugin?.title }}
      </span>
        <div class="switch_card">
          <b-form-checkbox
              v-model="switchCard"
              @change="switchCardTitle"
              :style="checkboxStyles"
              switch
              :disabled="disabledCard || !store.state.switchApp"
          />
          <span
              :style="{
        color: switchCard ? 'green' : 'rgb(165,0,0)',
           fontWeight: 'bold',
           fontSize: '14px',
           marginTop: '5px'
      }"
          >{{ switchTitle }}</span>
        </div>
      </div>
      <b-card-text
          class="cardDescription"
      >{{ plugin?.description }}</b-card-text>
    </b-card>
</template>

<script>
import {mapState} from "vuex";
import {inject} from "vue";

export default {
  name: "card-app",
  setup(){
    const store = inject('store')

    return{
      store
    }
  },
  data() {
    return {
      switchCard: true,
      switchTitle: 'Allowed',
      disabledCard: false
    }
},
  props: {
    plugin: {
      type: Object
    },
    active: {
      type: Array,
    },
    disabled: {
      type: Array,
    },
    inactive: {
      type: Array,
    }
  },
  computed: {
    checkboxStyles() {
      return{
        backgroundColor: this.switchCard ? 'rgb(97, 186, 38) !important' : 'rgb(165,0,0)',
      borderColor: 'rgb(97, 186, 38) !important',
        color: '#fff',
      width: '42px',
      height: '25px',
      }
    },
    ...mapState({
      plugins: state => state.plugins.plugins,
      switchPlugins: state => state.plugins.switchPlugins
    }),
    getPlugins() {
      return [this.plugins?.data?.data?.plugins]
    }
  },
  methods: {
    switchCardTitle() {
      if(this.switchCard){
        this.switchTitle = "Allowed"
      }else{
        this.switchTitle = "Blocked"
      }
    },
    checkActive() {
      return this.active?.map((item) => {
        if(this.plugin?.title?.includes(item?.title)){
          this.switchCard = true
        }
      })
    },
    checkDisabled() {
      return this.disabled?.map((item) => {
        if(this.plugin?.title?.includes(item?.title)){
          this.disabledCard = true
        }
      })
    },
    checkInactive() {
      return this.inactive?.map((item) => {
        if(this.plugin?.title?.includes(item?.title)){
          this.switchCard = false
          this.switchTitle = "Blocked"
        }
      })
    },
  },
  created() {
    this.checkActive()
    this.checkInactive()
    this.checkDisabled()
  },
}
</script>

<style scoped>
.card_wrapper{
  width: 100%;
  border-radius: 10px;
  border-width: 3px;
  userSelect: none;
  height: 220px;
  position: relative;
}

.card_header_wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.switch_card{
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.cardDescription{
  color: gray;
  position: absolute;
  bottom: 20px;
}

@media (max-width: 540px) {

  .card_wrapper{
    height: 200px;
  }

  .cardDescription{
    font-size: 12px;
    bottom: 10px;
  }
  .cardTitle{
    font-size: 14px;
  }
}

</style>
