// Import component global ở đây
import Vue from "vue"; // Vì nó là phầm mở rộng lên k có vue, muốn sd phải import vào

import EventAlert from "@/components/Alerts/EventAlert.vue";

Vue.component("EventAlert", EventAlert);
