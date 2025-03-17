<template>
  <div :class="{ 'page-profile--sp': isSmartPhone }" class="page-profile">
    <h1 class="page-profile__heading"><span class="icon icon-profile"></span>Profile</h1>
    <div class="profile-block">
      <img class="profile-block__img" src="@/assets/img/profile_yuki.png" alt="Yuki Takata（Akai）">
      <div class="profile-block__text profile-block-text">
        <p class="profile-block-text__name">Yuki Takata（Akai）</p>
        <p class="profile-block-text__detail">
          マークアップエンジニアの端くれ。
          <br>
          CSS書くのが好き。マイクロインタラクションに興味あり。
          <br>
          最近はAtomic Designについて勉強中。
        </p>
      </div>
    </div>
    <div class="sns-block">
      <a target="_blank" href="https://twitter.com/626_ace" class="sns-block__logo">
        <img src="../../assets/svg/logo-twitter.svg" alt="Twitter" width="50" height="50">
      </a>
      <a target="_blank" href="https://www.facebook.com/profile.php?id=100005509020635" class="sns-block__logo">
        <img src="../../assets/svg/logo-facebook.svg" alt="Facebook" width="50" height="50">
      </a>
      <a target="_blank" href="https://github.com/YukiAkai" class="sns-block__logo">
        <img src="../../assets/svg/logo-github.svg" alt="GitHub" width="50" height="50">
      </a>
    </div>
    <div class="skill-block">
      <h2 class="skill-block__heading"><span class="icon icon-pc"></span>Skill</h2>
      <div class="skill-block__inner">
        <div class="contents-skill">
          <h3 class="contents-skill__heading"><span class="icon icon-code"></span>Design / Coding</h3>
          <p class="contents-skill__detail">基本的なことは一通りできます。</p>
          <ul class="contents-skill__list contents-skill-list">
            <li class="contents-skill-list__item">HTML5</li>
            <li class="contents-skill-list__item">CSS3</li>
            <li class="contents-skill-list__item">Sass（SCSS）</li>
          </ul>
        </div>
        <div class="contents-skill">
          <h3 class="contents-skill__heading"><span class="icon icon-js"></span>Frontend</h3>
          <p class="contents-skill__detail">最近はVue.jsを使用して開発することが多いです。このサイトもVue.jsで作っています。</p>
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
import layoutMixin from '@/mixins/layout'
export default {
  name: 'Profile',
  mixins: [layoutMixin]
}
</script>

<style lang="scss" scoped>
.page-profile {
  $this: &;
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
    .icon {
      width: 35px;
      height: 35px;
      background-image: url("../../assets/svg/icon-profile.svg");
    }
  }
  .profile-block {
    display: flex;
    align-items: center;
    justify-content: center;
    .profile-block-text {
      margin-left: 20px;
      &__name {
        margin-bottom: 20px;
        font-size: 30px;
        font-weight: bold;
      }
      &__detail {
        line-height: 1.5;
      }
    }
  }
  .sns-block,
  .skill-block {
    margin-top: 40px;
  }
  .sns-block {
    $sns: ".sns-block";
    display: flex;
    justify-content: center;
    &__logo {
      &+#{$sns}__logo {
        margin-left: 20px;
      }
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
  .skill-block {
    &__heading {
      margin-bottom: 20px;
      font-size: 30px;
      .icon {
        width: 30px;
        height: 30px;
        background-image: url("../../assets/svg/icon-pc.svg");
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
        font-size: 24px;
        .icon {
          height: 24px;
          &.icon-code {
            width: 24px;
            background-image: url("../../assets/svg/icon-code.svg");
          }
          &.icon-js {
            width: 22px;
            background-image: url("../../assets/svg/icon-js.svg");
          }
        }
      }
      &__detail {
        margin: 20px 0;
        font-size: 16px;
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
    #{$this}__heading {
      font-size: 30px;
      .icon {
        width: 30px;
        height: 30px;
      }
    }
    .profile-block,
    .skill-block__inner {
      flex-direction: column;
    }
    .profile-block {
      .profile-block-text {
        margin-left: 0;
        &__name {
          margin: 15px 0;
          font-size: 25px;
          text-align: center;
        }
      }
    }
    .skill-block {
      &__heading {
        font-size: 24px;
        .icon {
          width: 24px;
          height: 24px;
        }
      }
      .contents-skill {
        &__heading {
          font-size: 20px;
          .icon {
            height: 20px;
            &.icon-code {
              width: 20px;
            }
            &.icon-js {
              width: 18px;
            }
          }
        }
        & + .contents-skill {
          margin-top: 20px;
          margin-left: 0;
        }
      }
    }
  }
}
</style>
