import Vue from 'vue';

export default {
  getUserMenu() {
    return Vue.http.get("/api/menu");
  }
}
