<template>
  <div class="main_plugins">
    <span class="title_plugins">Personnel Plugins</span>
    <div class="card_container">
      <div
          v-for="(plugin, i) in [...getActivePlugins, ...getDisabledPlugins, ...getInactivePlugins]"
          :key="i"
          class="card_body"
      >
        <card-app :plugin="plugin" :active="getActivePlugins" :disabled="getDisabledPlugins" :inactive="getInactivePlugins" />
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
  name: "Personnel-app",
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
      return this.plugins?.data?.data?.tabdata?.tab3?.active?.map((key) => {
        return this.plugins?.data?.data?.plugins[key]
      })
    },
    getDisabledPlugins() {
      return this.plugins?.data?.data?.tabdata?.tab3?.disabled?.map((key) => {
        return this.plugins?.data?.data?.plugins[key]
      })
    },
    getInactivePlugins() {
      return this.plugins?.data?.data?.tabdata?.tab3?.inactive?.map((key) => {
        return this.plugins?.data?.data?.plugins[key]
      })
    },
  },
}
</script>
