<template>
  <svg v-on="$listeners" @click="openModal" :index="i">
    <use :href="href.startsWith('#') ? href : `#${href}`" />
  </svg>
</template>
<script>
import { url } from "@/constants.js";
import EventBus from "@/EventBus";

export default {
  name: "BaseIcon",
  props: {
    href: {
      type: String,
      required: true,
    },
    i: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    modal: {
      text1: "",
      text2: "",
      title: "",
      symbol: "nameIcon",
    },
    i: "i",
  }),
  methods: {
    openModal() {
      EventBus.$emit("open", {
        component: "BaseModal",
        content: this.modal,
      });
    },
  },
  created() {
    fetch(`${url}/query/how_use`, {
      method: "GET",
    })
      .then((Response) => Response.json())
      .then((data) => {
        this.modal = {
          text1: data[this.i].text_1,
          text2: data[this.i].text_2,
          title: data[this.i].title,
          symbol: data[this.i].symbol,
        };
      })
      .catch((error) => console.log(error));
  },
};
</script>
