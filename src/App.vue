<template>
  <ThemeProvider>
    <div class="content">
      <Header />
      <AddPerson :add="addUser" />
      <Person :friends="friends" :setDet="setDetails" :delete="deleteUser"/>
    </div>
  </ThemeProvider>
</template>

<script>
import { ThemeProvider } from "vue3-styled-components";

import Header from "./components/Header/Header";
import Person from "./components/Person/Person";
import AddPerson from "./components/AddPerson/AddPerson.vue";

export default {
  name: "App",
  components: {
    ThemeProvider,
    Header,
    Person,
    AddPerson,
  },
  data() {
    return {
      friends: [],
    };
  },
  methods: {
    setDetails(index) {
      this.friends[index].details = !this.friends[index].details;
    },
    addUser(name, phone, mail) {
      this.friends = [
        ...this.friends,
        { name: name, phone: phone, mail: mail, details: false },
      ];
    },

    deleteUser(index) {
      let friendsList = [...this.friends];
      friendsList.splice(index, 1);
      this.friends = friendsList;
    }
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
}
</style>
