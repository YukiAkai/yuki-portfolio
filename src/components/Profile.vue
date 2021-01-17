<template>
  <div :class="{ 'page-profile--sp': isSmartPhone }" class="page-profile">
    <h1 class="page-profile__heading"><i class="icon icon-profile"></i>Profile</h1>
    <div class="profile-block">
      <img class="profile-block__img" src="../assets/img/profile_yuki.png" alt="Yuki Akai">
      <div class="profile-block__text profile-block-text">
        <p class="profile-block-text__name">Yuki Akai</p>
        <p class="profile-block-text__detail">
          マークアップエンジニアの端くれ
          <br>
          CSS書くのが好き。マイクロインタラクションに興味あり。
        </p>
      </div>
    </div>
    <div class="skill-block">
      <h2 class="skill-block__heading"><i class="icon icon-pc"></i>Skill</h2>
      <div class="skill-block__inner">
        <div class="contents-skill">
          <h3 class="contents-skill__heading"><i class="icon icon-code"></i>Design / Cording</h3>
          <ul class="contents-skill__list contents-skill-list">
            <li class="contents-skill-list__item">HTML5</li>
            <li class="contents-skill-list__item">CSS3</li>
            <li class="contents-skill-list__item">Sass（SCSS）</li>
          </ul>
        </div>
        <div class="contents-skill">
          <h3 class="contents-skill__heading"><i class="icon icon-code"></i>Frontend</h3>
          <ul class="contents-skill__list contents-skill-list">
            <li class="contents-skill-list__item">JavaScript</li>
            <li class="contents-skill-list__item">Vue.js</li>
            <li class="contents-skill-list__item">ECT</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import layoutMixin from '../mixins/layout'
export default {
  name: 'Profile',
  mixins: [layoutMixin]
}
</script>

<style lang="scss" scoped>
.page-profile {
  width: 990px;
  min-height: 350px;
  padding: 30px;
  margin: 0 auto;
  .icon {
    margin-right: 10px;
    background-size: 100%;
  }
  &__heading {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 35px;
    font-weight: bold;
    .icon-profile {
      width: 35px;
      height: 35px;
      background-image: url("../assets/svg/icon-profile.svg");
    }
  }
  .skill-block,
  .contents-skill {
    &__heading {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
  }
  .profile-block {
    display: flex;
    align-items: center;
    justify-content: center;
    .profile-block-text {
      margin-left: 20px;
      &__name {
        font-size: 30px;
        font-weight: bold;
      }
      &__detail {
        margin-top: 20px;
        line-height: 1.5;
      }
    }
  }
  .skill-block {
    margin-top: 40px;
    &__heading {
      margin-bottom: 20px;
      font-size: 30px;
      .icon-pc {
        width: 30px;
        height: 30px;
        background-image: url("../assets/svg/icon-pc.svg");
      }
    }
    &__inner {
      display: flex;
    }
    .contents-skill {
      flex: 1;
      padding: 20px;
      background: #eee;
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
      &__heading {
        margin-bottom: 20px;
        font-size: 25px;
        .icon-code {
          width: 25px;
          height: 25px;
          background-image: url("../assets/svg/icon-code.svg");
        }
      }
      .contents-skill-list {
        $skill: ".contents-skill-list";
        &__item {
          font-size: 18px;
          &:before {
            margin-right: 5px;
            font-size: 14px;
            vertical-align: text-bottom;
            content: "■";
          }
          &+#{$skill}__item {
            margin-top: 10px;
          }
        }
      }
      & + .contents-skill {
        margin-left: 20px;
      }
    }
  }
  &--sp {
    width: auto;
    padding: 20px;
    .profile-block,
    .skill-block__inner {
      flex-direction: column;
    }
    .profile-block {
      .profile-block-text {
        margin-top: 20px;
        margin-left: 0;
        &__name {
          text-align: center;
        }
      }
    }
    .skill-block {
      .contents-skill {
        & + .contents-skill {
          margin-top: 20px;
          margin-left: 0;
        }
      }
    }
  }
}
</style>
