import { createApp } from "https://unpkg.com/petite-vue?module";
createApp({
  $delimiters: ["${", "}"],
  query: "",
  data: null,
  fetchData() {
    fetch(`/search?q=${this.query}`)
      .then((res) => res.text())
      .then((data) => {
        this.data = data;
      });
  },
}).mount();
