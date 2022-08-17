<template>
  <div class="mt-16 text-color">
    <div class="container mx-auto">
      <div
        class="flex items-center flex-wrap justify-between p-7"
        :class="[isDark ? 'text-gray-900' : 'text-color-gray-900']"
      >
        <div class="w-1/6 search">
          <label for="" class="font-semibold">Search</label>
          <div
            class="w-full mt-2 rounded-lg border-100"
            :class="[isDark ? 'bg-100' : 'bg-blue-200']"
          >
            <span
              class="search-icon text-gray-500 text-xs"
              :class="[isDark ? 'bg-100' : 'bg-blue-200']"
            >
              <fa icon="magnifying-glass" />
            </span>
            <input
              type="text"
              class="w-full text-gray-500 rounded-lg focus:outline-none search-input"
              :class="[isDark ? 'bg-100' : '']"
            />
          </div>
        </div>
        <div class="w-1/6">
          <label for="" class="font-semibold">Genres</label>
          <div class="select-box mt-2">
            <div
              @click="handleToggleSelect"
              v-html="selectOptionvalue"
              class="selected"
              :class="[
                isDark ? 'bg-100 text-gray-500' : 'bg-white text-gray-600',
              ]"
            >
              Any
            </div>
            <div
              :class="{ active: toggleSelect }"
              class="options-container text-gray-500 bg-white"
            >
              <div
                v-for="(item, index) in listArr"
                :key="index"
                @click="handleSelectOption(item.title)"
                class="option"
              >
                <input type="radio" class="radio" id="" name="category" />
                <label for="automobiles">{{ item.title }}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/6">
          <label for="" class="font-semibold">Year</label>
          <div class="select-box mt-2">
            <div
              @click="handleToggleSelect"
              v-html="selectOptionvalue"
              class="selected"
              :class="[
                isDark ? 'bg-100 text-gray-500' : 'bg-white text-gray-600',
              ]"
            >
              Any
            </div>
            <div
              :class="{ active: toggleSelect }"
              class="options-container text-gray-500 bg-white"
            >
              <div
                v-for="(item, index) in listArr"
                :key="index"
                @click="handleSelectOption(item.title)"
                class="option"
              >
                <input type="radio" class="radio" id="" name="category" />
                <label for="automobiles">{{ item.title }}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/6">
          <label for="" class="font-semibold">Season</label>
          <div class="select-box mt-2">
            <div
              @click="handleToggleSelect"
              v-html="selectOptionvalue"
              class="selected"
              :class="[
                isDark ? 'bg-100 text-gray-500' : 'bg-white text-gray-600',
              ]"
            >
              Any
            </div>
            <div
              :class="{ active: toggleSelect }"
              class="options-container text-gray-500 bg-white"
            >
              <div
                v-for="(item, index) in listArr"
                :key="index"
                @click="handleSelectOption(item.title)"
                class="option"
              >
                <input type="radio" class="radio" id="" name="category" />
                <label for="automobiles">{{ item.title }}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/6">
          <label for="" class="font-semibold">Format</label>
          <div class="select-box mt-2">
            <div
              @click="handleToggleSelect"
              v-html="selectOptionvalue"
              class="selected"
              :class="[
                isDark ? 'bg-100 text-gray-500' : 'bg-white text-gray-600',
              ]"
            >
              Any
            </div>
            <div
              :class="{ active: toggleSelect }"
              class="options-container text-gray-500 bg-white"
            >
              <div
                v-for="(item, index) in listArr"
                :key="index"
                @click="handleSelectOption(item.title)"
                class="option"
              >
                <input type="radio" class="radio" id="" name="category" />
                <label for="automobiles">{{ item.title }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    toggleSelect: false,
    selectOptionvalue: "Any",
    listArr: [
      {
        id: 1,
        title: "Automobiles",
      },
      {
        id: 2,
        title: "Film & Animation",
      },
      {
        id: 3,
        title: "Science & Technology",
      },
      {
        id: 4,
        title: "Art",
      },
      {
        id: 5,
        title: "Music",
      },
      {
        id: 6,
        title: "Sport",
      },
    ],
  }),
  methods: {
    handleToggleSelect() {
      this.toggleSelect = !this.toggleSelect;
    },
    handleSelectOption(value) {
      this.selectOptionvalue = value;
      this.toggleSelect = !this.toggleSelect;
    },
  },
  computed: {
    ...mapState(["isDark"]),
  },
};
</script>

<style scoped>
.search {
  position: relative;
}
.search-icon {
  position: absolute;
  top: 65%;
  left: 8%;
}
.search-input {
  padding: 7px 20px 7px 40px;
}
.select-box {
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
}

.select-box .options-container {
  max-height: 0;
  width: 100%;
  opacity: 0;
  transition: all 0.4s;
  border-radius: 8px;
  overflow: hidden;
  order: 1;
  position: absolute;
  top: 100%;
}

.select-box .selected {
  margin: 0px;
}

.selected {
  border-radius: 8px;
  margin-bottom: 8px;
  position: relative;

  order: 0;
}

.selected::after {
  content: "";
  background: url("../static/img/arrow-down.svg");
  background-size: contain;
  background-repeat: no-repeat;
  color: rgb(139, 160, 178);

  position: absolute;
  height: 100%;
  width: 26px;
  right: 10px;
  top: 4px;

  transition: all 0.4s;
}

.select-box .options-container.active {
  max-height: 240px;
  opacity: 1;
  overflow-y: scroll;
  z-index: 50;
}

.select-box .options-container.active + .selected::after {
  transform: rotateX(180deg);
  top: -6px;
}

.select-box .options-container::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.select-box .options-container::-webkit-scrollbar-thumb {
  background: #525861;
  border-radius: 5px;
}

.select-box .option,
.selected {
  padding: 8px 28px 8px 18px;
  cursor: pointer;
  margin: 10px 8px;
  border-radius: 8px;
}

.select-box .option:hover {
  background-color: rgb(11, 22, 34);
  color: rgb(61, 180, 242);
}

.select-box label {
  cursor: pointer;
}

.select-box .option .radio {
  display: none;
}

.search-icon > svg {
  background-color: white;
  display: block;
  color: rgb(139, 160, 178);
}
</style>
