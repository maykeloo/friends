<template>
  <Container v-if="friends.length < 1">
    <TitleName>
      Add friends first.
    </TitleName>
  </Container>

  <Container v-else v-for="(friend, index) in friends" :key='index'> 
      <TitleName>
          {{friend.name}}
      </TitleName>
      <DetailsBtn @click="setDet(index)">
          <span v-if="friend.details === false">Show</span> <span v-else>Hide</span> Details
      </DetailsBtn>
      <MoreInfoContainer v-if="friend.details">
      <DetailsContainer>
          <Info>Phone:</Info> {{friend.phone}}
      </DetailsContainer>
      <DetailsContainer>
          <Info>E-mail:</Info> {{friend.mail}}
      </DetailsContainer>
      <DeleteBtn @click="remove(index)">
          Delete Friend
      </DeleteBtn>
      </MoreInfoContainer>
  </Container>
</template>

<script>
import { Container, TitleName, DetailsBtn, DetailsContainer, Info, DeleteBtn } from "./personElements";

export default {
  name: "Person",
  props: ['friends', 'setDet', 'delete'],
  components: {
    Container,
    TitleName,
    DetailsBtn,
    DetailsContainer,
    Info,
    DeleteBtn
  },
  methods: {
    remove(index) {
      this.delete(index)
    }
  }
};
</script>
