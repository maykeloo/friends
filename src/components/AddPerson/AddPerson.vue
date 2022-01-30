<template>
  <Container>
    <Title> Add Friend </Title>
    <Label>
      <Detail> Name </Detail>
      <input type="text" ref="nameRef"/>
    </Label>
    <Label>
      <Detail> Phone </Detail>
      <input type="text" ref="phoneRef"/>
    </Label>
    <Label>
      <Detail> E-mail </Detail>
      <input type="text" ref="mailRef"/>
    </Label>
    <AddBtn @click="addUser">Add user</AddBtn>
  </Container>
</template>

<script>
import { Container, Title, Label, Detail, AddBtn } from "./addPersonElements";

export default {
  name: "AddPerson",
  props: ['add'],
  components: {
    Container,
    Title,
    Label,
    Detail,
    AddBtn
  },
  methods: {
      addUser() {
               this.add(this.$refs.nameRef.value, this.$refs.phoneRef.value, this.$refs.mailRef.value);
      }
  }
};
</script>

<style scoped>
    input {
        width: 70%;
        outline: none;
        border: 0;
        padding: 10px;
        border-radius: 5px;
    }
</style>
