<template>
  <div :class="{ 'page-comic--sp': isSmartPhone }" class="page-comic">
    <h1 class="page-comic__heading">漫符絵本</h1>
    <div class="page-comic__catch page-comic-catch">
      キャラクターに漫符を入力するとストーリーが動的に変化するインタラクティブなデジタル絵本システム
      <br><a class="page-comic-catch__link text-link" href="http://yukiakai.github.io/Comic-Symbols/" target="_blank">ここから遊べます<span class="icon icon-arrow-right"></span></a>
    </div>
    <img class="page-comic__img" src="@/assets/img/comic-symbols.png" alt="漫符絵本" width="372" height="248">
    <h2 class="page-comic__sub-heading">概要</h2>
    <div class="page-comic__detail">
      提示された数種類の漫符の中からユーザが漫符を選択し、キャラクターに入力することでその漫符に適した感情や動作を表出させる。さらに、漫符が付与可能な位置を指定して、同じ種類の漫符であっても付与する位置によって表現を変化させることもできる。こうしたキャラクターの感情や動作の変化に応じて異なるストーリーを提示することができる。
    </div>
    <h2 class="page-comic__sub-heading">開発言語</h2>
    <div class="page-comic__detail">
      Processing.js
    </div>
    <div class="page-comic__description page-comic-description">
      <h2 class="page-comic-description__heading">漫符とは…</h2>
      <div class="page-comic-description__detail description-detail">
        漫符とは、感情や様態を表現するコミック特有の記号表現であり、感情や状態を視覚的に表現する目的で主に利用されている（e.g. 汗マーク, 怒りマーク ect...）。これらはキャラクターの表情に付与することでその感情をより明確に示したり、強調したりすることができる。さらに、後ろ姿や吹き出しの中に漫符を描くだけでも対象の心情が理解できるため、表情が描かれていなくても対象のコマ内のキャラクターの立ち位置やシーンの状況などが把握できるようになる。
        <br><a href="https://dl.mtstlab.org/papers/195/" class="description-detail__link text-link">執筆した漫符に関する研究論文<span class="icon icon-arrow-right"></span></a>
      </div>
      <img class="page-comic-description__img" src="@/assets/img/bebber.png" alt="bebberくん">
    </div>
    <router-link to="/" class="page-comic__top-link text-link"><span class="icon icon-arrow-left"></span>PAGE TOP</router-link>
  </div>
</template>

<script>
import layoutMixin from '@/mixins/layout'
export default {
  name: 'ComicSymbols',
  mixins: [layoutMixin]
}
</script>

<style lang="scss" scoped>
.page-comic {
  $this: &;
  width: 990px;
  min-height: 350px;
  padding: 30px;
  margin: 0 auto;
  .icon {
    background-size: 100%;
  }
  &__heading,
  &__sub-heading {
    margin-bottom: 20px;
    font-weight: bold;
  }
  &__heading {
    font-size: 30px;
  }
  &__sub-heading {
    margin: 30px 0 10px;
    font-size: 18px;
  }
  &__img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 30px auto;
  }
  .page-comic-catch,
  .description-detail {
    &__link {
      display: inline-flex;
      align-items: center;
      margin-top: 10px;
      font-size: 18px;
      font-weight: normal;
      .icon {
        width: 18px;
        height: 18px;
        margin-left: 6px;
        background-image: url("../../../assets/svg/icon-arrow-right.svg");
      }
    }
  }
  .page-comic-catch {
    font-size: 18px;
    font-weight: bold;
  }
  .page-comic-description {
    padding: 20px;
    margin-top: 30px;
    background: #eee;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
    &__heading {
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: bold;
    }
    &__img {
      display: block;
      max-width: 100%;
      margin: 30px auto 0;
    }
  }
  &__top-link {
    display: inline-flex;
    align-items: center;
    margin-top: 40px;
    .icon {
      width: 16px;
      height: 16px;
      margin-right: 6px;
      background-image: url("../../../assets/svg/icon-arrow-left.svg");
    }
  }
  &--sp {
    width: auto;
    padding: 20px;
    #{$this}__heading {
      font-size: 24px;
    }
    .page-comic-catch,
    .description-detail {
      &__link {
        font-size: 16px;
        @media screen and (max-width: 320px) {
          font-size: 14px;
        }
        .icon {
          @media screen and (max-width: 320px) {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
    .page-comic-catch {
      font-size: 16px;
    }
  }
}
</style>
