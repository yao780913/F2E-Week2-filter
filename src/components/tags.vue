<template>
    <div class="tags">
        <div>
            Showing <span class="tags-count">15</span> results by ...
        </div>
        <div class="tags-list">
            <div class="tags-list-item">
                koahsiung
                <fa-icon :icon="['fas', 'times']"></fa-icon>
            </div>
            <div class="tags-list-item">
                Enterainment
                <fa-icon :icon="['fas', 'times']"></fa-icon>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../assets/helpers/_variables.scss';

//level-1
.tags{
    font-size: 24px;
    line-height: 28px;
    color: $color-black;
    .tags-count {
        color: $color-purple-light;
        font-weight: bolder;
    }
}
.tags-list{
    @include flex(flex-start);
    flex-direction: row;
    margin-top: 8px;
}

//level-2
.tags-list-item {
    position: relative;
    border: 1px solid $color-purple-light;
    color: $color-purple-light;
    border-radius: $bdrs;
    font-size: 16px;
    font-style: italic;
    font-weight: 300;
    line-height: 19px;
    padding: 8px 38px 8px 18px;
    margin-right: 8px;
    cursor: pointer;
    > .fa-times {
        position: absolute;
        right: 12px;
        top: 10px;
        width: 16px;
        height: 16px;
        padding: 1px;
        border: 1px solid $color-purple-light;
        border-radius: $bdrs;
    }
    &:hover {
        color: $color-white;
        background-color: $color-purple-light;
        > .fa-times {
            border-color: $color-white;
        }
    }
}
</style>
