<template>
    <div id="List">
        <Tags></Tags>
        <div class="list-view">
            <div class="list-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_2nqm0H20gpO-Pf9BsBwuAYt3McWcb-6rFs37i244h71Lyrnkg" alt="dogs">
            </div>
            <div class="list-info">
                <h4>Kogi Cosby sweater.</h4>
                <p>
                    Where does it come from?
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
                <div class="list-info-row1">
                    <span class="list-info-host">
                        Ethan Foster
                    </span>
                    <span class="list-info-tags">
                        Entertainment
                    </span>
                </div>
                <div class="list-info-row2">
                    <span class="list-info-loc">
                        <fa-icon :icon="['fas', 'map-marker-alt']"></fa-icon>
                        Kaohsiung City
                    </span>
                    <span class="list-info-dates">
                        <fa-icon :icon="['far', 'calendar-alt']"></fa-icon>
                        2018/5/24 - 2018/5/31
                    </span>
                </div>
            </div>
        </div>
        <div class="list-view">
            <div class="list-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_2nqm0H20gpO-Pf9BsBwuAYt3McWcb-6rFs37i244h71Lyrnkg" alt="dogs">
            </div>
            <div class="list-info">
                <h4>Kogi Cosby sweater.</h4>
                <p>
                    Where does it come from?
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
                <div class="list-info-row1">
                    <span class="list-info-host">
                        Ethan Foster
                    </span>
                    <span class="list-info-tags">
                        Entertainment
                    </span>
                </div>
                <div class="list-info-row2">
                    <span class="list-info-loc">
                        <fa-icon :icon="['fas', 'map-marker-alt']"></fa-icon>
                        Kaohsiung City
                    </span>
                    <span class="list-info-dates">
                        <fa-icon :icon="['far', 'calendar-alt']"></fa-icon>
                        2018/5/24 - 2018/5/31
                    </span>
                </div>
            </div>
        </div>
        <div class="list-view">
            <div class="list-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_2nqm0H20gpO-Pf9BsBwuAYt3McWcb-6rFs37i244h71Lyrnkg" alt="dogs">
            </div>
            <div class="list-info">
                <h4>Kogi Cosby sweater.</h4>
                <p>
                    Where does it come from?
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
                <div class="list-info-row1">
                    <span class="list-info-host">
                        Ethan Foster
                    </span>
                    <span class="list-info-tags">
                        Entertainment
                    </span>
                </div>
                <div class="list-info-row2">
                    <span class="list-info-loc">
                        <fa-icon :icon="['fas', 'map-marker-alt']"></fa-icon>
                        Kaohsiung City
                    </span>
                    <span class="list-info-dates">
                        <fa-icon :icon="['far', 'calendar-alt']"></fa-icon>
                        2018/5/24 - 2018/5/31
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Tags from '../components/tags.vue'
export default {
    name: 'List',
    components: {
        Tags
    }
}
</script>

<style lang='scss' scoped>
@import '../assets/helpers/_variables.scss';

// level-1
div.list-view {
    @include flex(flex-start, flex-start);
    margin-top: 24px;
    width: 100%;
    height: 220px;
    &:hover {
        cursor: pointer;
        box-shadow: 0 0 20px 2px #afafaf;
    }
}

// level-2
.list-img {
    > img {
        width: 220px;
        height: 220px;
    }
}
.list-info {
    padding: 24px 20px;
    height: 100%;
    background-color: $color-white;
    > h4 {
        color: $color-purple-light;
        font-size: 24px;
        width: 100%;
        margin: 0;
        margin-bottom: 16px;
    }
    > p {
        display: block;
        font-size: 16px;
        line-height: 25px;
        margin: 0;
        width: 100%;
        height: 50px;
        overflow: hidden;
        margin-bottom: 16px;
    }
    > .list-info-row1 {
        margin-bottom: 16px;
    }

}

// level-3
.list-info-host {
    font-weight: bolder;
    font-size: 16px;
    margin-right: 20px;
}
.list-info-tags {
    padding: 3px 16px;
    border: 1px solid ;
    border-radius: $bdrs;
    color: $color-white;
    background-color: $color-grey-3;
    font-style: italic;
}
.list-info-loc,
.list-info-dates {
    color: $color-grey-4;
    margin-right: 20px;
    font-size: 16px;
    > svg {
        color: $color-black;
        margin-right: 6px;
    }
}
</style>
