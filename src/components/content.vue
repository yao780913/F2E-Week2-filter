<template>
<div>
    <div class="content-header">
        <span class="last-level">Explore</span>
        <i>/</i>
        <span class="now-level">Kogi Cosby sweater ethical</span>
    </div>
    <div class="content-view">
        <img class="content-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_2nqm0H20gpO-Pf9BsBwuAYt3McWcb-6rFs37i244h71Lyrnkg" alt="dogs">
        <div class="content-info">
            <h4>Kogi Cosby sweater.</h4>
            <div class="content-info-row">
                <span class="content-info-host">
                    Ethan Foster
                </span>
                <span class="content-info-tags">
                    Entertainment
                </span>
            </div>
            <div class="content-info-row">
                <span class="content-info-loc">
                    <fa-icon :icon="['fas', 'map-marker-alt']"></fa-icon>
                    Kaohsiung City
                </span>
                <span class="content-info-dates">
                    <fa-icon :icon="['far', 'calendar-alt']"></fa-icon>
                    2018/5/24 - 2018/5/31
                </span>
            </div>
            <p>
                Where does it come from?
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
        </div>
    </div>
</div>
</template>
<script>
export default {
}
</script>

<style lang='scss' scoped>
@import '../assets/helpers/_variables.scss';

// header
.content-header {
    background-color: $color-grey-2;
    font-size: 16px;
    padding: 12px 16px;
    line-height: 19px;
    margin-bottom: 24px;
    .last-level {
        color: $color-purple-light;
    }
    > i {
        color: $color-grey-4;
        margin: 0 4px;
    }
    .now-level {
        color: $color-grey-4;
    }
}

// content - level - 1
.content-img {
    width: 100%;
    height: 350px;
}
.content-info {
    padding: 24px 66px;
    > h4 {
        color: $color-purple-light;
        font-size: 36px;
        width: 100%;
        margin: 0;
        margin-bottom: 16px;
    }
    > .content-info-row {
        margin-bottom: 24px;
    }
    > p {
        line-height: 24px;
    }
}

// content - level - 2
.content-info-host {
    font-weight: bolder;
    font-size: 16px;
    margin-right: 20px;
    
}
.content-info-tags {
    padding: 3px 16px;
    border: 1px solid ;
    border-radius: $bdrs;
    color: $color-white;
    background-color: $color-grey-3;
    font-style: italic;
    > svg {
        color: $color-black;
    }
}
.content-info-loc,
.content-info-dates {
    color: $color-grey-4;
    margin-right: 20px;
    font-size: 16px;
    > svg {
        color: $color-black;
        margin-right: 6px;
    }
}
</style>
