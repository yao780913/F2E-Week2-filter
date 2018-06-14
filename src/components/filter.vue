<template>
    <section class="filter">
        <div class="filter-group">
            <h3>Location</h3>
            <select name="locations" id="locations" class="filter-group-selectLocations">
                <option value="Taiwan">Taiwan</option>
                <option value="Koahsiung">Koahsiung</option>
            </select>
        </div>
        <div class="filter-group">
            <h3>Date</h3>
            <div class="filter-group-selectDates">
                <span>from</span>
                <input type="text" class="inputDates">
            </div>
            <div class="filter-group-selectDates">
                <span>to</span>
                <input type="text" class="inputDates">
            </div>
        </div>
        <div class="filter-group">
            <h3>Categories</h3>
            <div class="filter-group-ckbList">
                <label class="ckb">ALL
                    <input type="checkbox">
                    <span class="mark"></span>
                </label>
                <label class="ckb">Enterainment
                    <input type="checkbox">
                    <span class="mark"></span>
                </label>

                <label class="ckb">Food
                    <input type="checkbox">
                    <span class="mark"></span>
                </label>
                <label class="ckb">Learning
                    <input type="checkbox">
                    <span class="mark"></span>
                </label>
                <label class="ckb">Outdoors
                    <input type="checkbox">
                    <span class="mark"></span>
                </label>
            </div>

        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../assets/all.scss';
@import '../assets/helpers/_variables.scss';

// level-1
section.filter {
    height: auto;
    width: 300px;
    background-color: $color-grey-1;
}

// level-2
div.filter-group{
    background-color: $color-grey-2;
    padding: 24px 40px;
    > h3 {
        margin: 0;
        padding: 0;
        font-size: 20px;
        line-height: 24px;
        font-family: 'Roboto-Bold';
        font-weight: bold;
        margin-bottom: 24px;
    }
    &:nth-child(1){
        h3{
            margin-bottom: 15px;
        }
    }
    &:not(:nth-child(3)) {
        border-bottom: 1px solid $color-grey-3;
    }
}

//level-3
.filter-group-selectLocations {
    width: 220px;
    height: 40px;
    line-height: 40px;
    margin-top: 15px;
    padding: 12px 8px;
    font-size: 16px;
}
.filter-group-selectDates {
    margin: 4px;
    @include flex();

    > span {
        @include flex(flex-end);
        flex: 35px;
    }
    > .inputDates {
        margin-left: 12px;
        @include flex();
        width: 170px;
        height: 40px;
        padding: 10px;
        font-size: 16px;
    }
}

.filter-group-ckbList{
    @include flex(flex-start);
    flex-direction: column;
}

//checkbox style
.ckb{
    display: block;
    position: relative;
    width: 100%;
    padding-left: 25px;
    font-size: 16px;
    margin-bottom: 8px;
    cursor: pointer;
    user-select: none;
    input {
        position: absolute;
        opacity: 0;
        // cursor: pointer;
        &:checked ~.mark {
            background-color: $color-purple;
        }
    }
    .mark {
        position: absolute;
        top: 0;
        left: 0;
        height: 16px;
        width: 16px;
        background-color: $color-white;
        &:after {
            content: "";
            position: absolute;
            display: none;

            // 勾勾
            left: 5px;
            top: 2px;
            width: 4px;
            height: 8px;
            border: solid $color-white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
        }
    }
    input:checked ~ .mark:after {
        display: block;
    }
    &:hover input ~.mark {
        background-color: $color-purple;
    }
}
</style>
