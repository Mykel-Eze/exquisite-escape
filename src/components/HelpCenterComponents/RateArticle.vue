<template>
  <section id="rate-article">
    <div class="row">
        <div class="container">
            <div class="rate-article-wrapper">
                <span>Did this article help?</span>
                <label>
                    <input name="rate-article" type="radio" value="like"  v-model="selected" class="hidden" />
                    <span>
                        <i class="material-icons">thumb_up</i>
                    </span>
                </label>
                <label>
                    <input name="rate-article" type="radio" value="dislike"  v-model="selected" class="hidden" />
                    <span>
                        <i class="material-icons">thumb_down</i>
                    </span>
                </label>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "RateArticle",
    data() {
        return {
            likes: 0,
            dislikes: 0,
            selected: null,
        }
    },
    methods: {
        likeArticle() {
            this.likes = 1;
            this.dislikes = 0;
        },
        dislikeArticle() {
            this.likes = 0;
            this.dislikes = 1;
        },
        uncheck(type) {
            if (this.selected === type) {
                this.selected = null;
                this.likes = 0;
                this.dislikes = 0;
            }
        }
    }
}
</script>

<style scoped>
.hidden, [type="radio"]+span::before, 
[type="radio"]+span::after {
    display: none;
}
[type="radio"]+span {
    padding: 0 !important;
}
.active {
    color:var(--pry-color);
}
[type="radio"]:checked+span i {
    color:var(--pry-color);
}
[type="radio"]+span i {
    cursor: pointer;
}
</style>