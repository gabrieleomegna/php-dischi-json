const { createApp } = Vue;

createApp({
  data() {
    return {
        apiUrl: './server.php',
        discList: []
    }
  },
  methods: {
    getDiscList () {
        axios.get(this.apiUrl).then((response) => {
            this.discList = response.data;
            console.log(response.data)
        });
    }
  },
  created () {
    this.getDiscList();
  }
}).mount('#app')