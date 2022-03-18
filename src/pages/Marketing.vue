<template>
  <div class="main_plugins">
    <span class="title_plugins">Marketing Plugins</span>
    <div class="card_container">
      <div
          v-for="(plugin, i) in [...getActivePlugins, ...getDisabledPlugins, ...getInactivePlugins]"
          :key="i"
          class="card_body">
        <card-app
            :plugin="plugin"
                  :active="getActivePlugins"
                  :disabled="getDisabledPlugins"
                  :inactive="getInactivePlugins" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
import {
  mapState
} from "vuex";
export default {
  name: "Marketing-app",
  data() {
    return {
    }
  },
  components: {
    'card-app': Card
  },
  beforeCreate() {
    this.$store.dispatch("plugins/GetPluginsFromServer")
  },
  computed: {
    ...mapState({
      plugins: state => state.plugins.plugins,
    }),
    getPlugins() {
      return this.active?.map((key) => {
        return this.plugins?.data?.data?.plugins[key]
      })
    },
    getActivePlugins() {
      return this.plugins?.data?.data?.tabdata?.tab1?.active?.map((key) => {
        return this.plugins?.data?.data?.plugins[key]
      })
    },
    getDisabledPlugins() {
      return this.plugins?.data?.data?.tabdata?.tab1?.disabled?.map((key) => {
        return this.plugins?.data?.data?.plugins[key]
      })
    },
    getInactivePlugins() {
      return this.plugins?.data?.data?.tabdata?.tab1?.inactive?.map((key) => {
        return this.plugins?.data?.data?.plugins[key]
      })
    },
  },
}
</script>

<style>
.main_plugins{
  display: flex;
  flex-flow: column;
  width: 83%;
  height: 100vh;
  padding: 40px;
  overflow-y: auto;
}

.card_container{
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
}

.card_body{
  width: 29%;
  margin: 20px;
}

.title_plugins{
  margin: 0 0 20px 20px;
  color: #010164;
  font-size: 18px;
}

@media (max-width: 1260px) {
  .card_body{
    width: 44%;
    margin: 20px;
  }
}

@media (max-width: 990px) {
  .card_body{
    width: 90%;
    margin: 20px;
  }
}
@media (max-width: 540px) {
  .main_plugins{
    padding: 20px;
  }

  .card_body{
    width: 100%;
    margin: 0 0 10px 0;
  }
}
</style>
