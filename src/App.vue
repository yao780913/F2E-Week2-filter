<template>
  <div id="app">
    <header class="header">
      <h1>HaveFun</h1>
      <div class="searchBox">
        <fa-icon :icon="['fas','search']"></fa-icon>
        <input type="text" class="searchString" placeholder="Explore your own activities">
      </div>
    </header>
    <content class="mainContent">
      <LeftFilter></LeftFilter>
      <section class="mainContent-list">
        <router-view/>
        <!-- <List></List> -->
      </section>
      <!-- <section class="mainContent-list">
        <Content></Content>
      </section> -->
    </content>
  </div>
</template>

<script>
import LeftFilter from './components/filter'
// import Tags from './components/tags'
import List from './components/list'
import Content from './components/content'
export default {
  name: 'App',
  components: {
    LeftFilter,
    // Tags,
    List,
    Content
  }
}
</script>

<style lang="scss" scoped>
@import './assets/helpers/_variables.scss';

header.header {
  width: 100%;
  height: 92px;
  background-color: $color-purple;
  font-family: "Optima-ExtraBlack";
  color: $color-white;
  padding: 24px 78px;
  @include flex(flex-start);

  > h1 {
    font-size: 36px;
    margin-right: 150px;
  }
  > .searchBox {
    @include flex(flex-start);
    > .fa-search {
      font-size: 20px;
      transform: translateX(28px);
    }
    > input {
      padding-left: 48px;
      width: 400px;
      font-size: 20px;
      background-color: inherit;
      color: white;
      border-bottom: 1px solid $color-white;
      &::placeholder {
        color: $color-white ;
        opacity: 0.5;
        font-style: italic;
      }
    }
  }
}

content.mainContent{
  margin: 0 40px;
  // width: calc( 100% -100px );
  height: auto;
  display: flex;
  flex-direction: row;
}

section.mainContent-list {
    padding: {
        top: 24px;
        left: 42px;
    };
}
section.mainContent-content {
  width: 100%;
}
</style>
