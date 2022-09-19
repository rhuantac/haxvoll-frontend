<template>
  <div class="bg-grey-700">
    <h3
      class="
        mb-4
        font-semibold
        text-gray-900
        dark:text-white
        text-center text-lg
      "
    >
      Haxvoll Ranking
    </h3>
    <div class="flex justify-center items-center">
      <div class="bg-gray-200 rounded-lg">
        <div class="inline-flex rounded-lg">
          <input
            type="radio"
            v-model="sortType"
            name="sortType"
            value="games"
            id="games"
            hidden
          />
          <label
            for="games"
            class="
              radio
              text-center
              self-center
              py-2
              px-4
              rounded-lg
              cursor-pointer
              hover:opacity-75
            "
            >Games played</label
          >
        </div>
        <div class="inline-flex rounded-lg">
          <input
            type="radio"
            v-model="sortType"
            name="sortType"
            value="wins"
            id="wins"
            hidden
          />
          <label
            for="wins"
            class="
              radio
              text-center
              self-center
              py-2
              px-4
              rounded-lg
              cursor-pointer
              hover:opacity-75
            "
            >Wins</label
          >
        </div>
        <div class="inline-flex rounded-lg">
          <input
            type="radio"
            v-model="sortType"
            checked
            name="sortType"
            id="goals"
            value="goals"
            hidden
          />
          <label
            for="goals"
            class="
              radio
              text-center
              self-center
              py-2
              px-4
              rounded-lg
              cursor-pointer
              hover:opacity-75
            "
            >Top goals</label
          >
        </div>
        <div class="inline-flex rounded-lg">
          <input
            type="radio"
            v-model="sortType"
            name="sortType"
            id="assists"
            value="assists"
            hidden
          />
          <label
            for="assists"
            class="
              radio
              text-center
              self-center
              py-2
              px-4
              rounded-lg
              cursor-pointer
              hover:opacity-75
            "
            >Top assists</label
          >
        </div>
        <div class="inline-flex rounded-lg">
          <input
            type="radio"
            v-model="sortType"
            name="sortType"
            id="gk"
            value="gk"
            hidden
          />
          <label
            for="gk"
            class="
              radio
              text-center
              self-center
              py-2
              px-4
              rounded-lg
              cursor-pointer
              hover:opacity-75
            "
            >GK Games</label
          >
        </div>
        <div class="inline-flex rounded-lg">
          <input
            type="radio"
            v-model="sortType"
            name="sortType"
            id="cs"
            value="cs"
            hidden
          />
          <label
            for="cs"
            class="
              radio
              text-center
              self-center
              py-2
              px-4
              rounded-lg
              cursor-pointer
              hover:opacity-75
            "
            >Top CS</label
          >
        </div>
        <div class="inline-flex rounded-lg">
          <input
            type="radio"
            v-model="sortType"
            name="sortType"
            id="wr"
            value="wr"
            hidden
          />
          <label
            for="wr"
            class="
              radio
              text-center
              self-center
              py-2
              px-4
              rounded-lg
              cursor-pointer
              hover:opacity-75
            "
            >Top WR</label
          >
        </div>
      </div>
    </div>

    <div class="font-sans shadow-sm overflow-hidden my-5">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="
            text-lg text-gray-700
            uppercase
            bg-gray-50
            dark:bg-gray-700 dark:text-gray-400
          "
        >
          <th scope="col" class="py-3 px-6">#</th>
          <th scope="col" class="py-3 px-6">👕</th>
          <th
            scope="col"
            :class="{ 'bg-gray-200': sortType === 'games' }"
            class="py-3 px-6"
          >
            🎮
          </th>
          <th
            scope="col"
            :class="{ 'bg-gray-200': sortType === 'wins' }"
            class="py-3 px-6"
          >
            🏆
          </th>
          <th
            scope="col"
            :class="{ 'bg-gray-200': sortType === 'goals' }"
            class="py-3 px-6"
          >
            ⚽
          </th>
          <th
            scope="col"
            :class="{ 'bg-gray-200': sortType === 'assists' }"
            class="py-3 px-6"
          >
            🥾
          </th>
          <th
            scope="col"
            :class="{ 'bg-gray-200': sortType === 'gk' }"
            class="py-3 px-6"
          >
            🧤
          </th>
          <th
            scope="col"
            :class="{ 'bg-gray-200': sortType === 'cs' }"
            class="py-3 px-6"
          >
            🛡️
          </th>
          <th
            scope="col"
            :class="{ 'bg-gray-200': sortType === 'wr' }"
            class="py-3 px-6 text-base"
          >
            Winrate
          </th>
        </thead>
        <tbody>
          <tr
            class="
              text-lg
              bg-white
              border-b
              dark:bg-gray-800 dark:border-gray-700
            "
            :key="player.name"
            v-for="(player, index) in players"
          >
            <td class="py-4 px-6">{{ index + 1 }}</td>
            <td class="py-4 px-6">{{ player.name }}</td>
            <td
              :class="{ 'bg-gray-100': sortType === 'games' }"
              class="py-4 px-6"
            >
              {{ player.games }}
            </td>
            <td
              :class="{ 'bg-gray-100': sortType === 'wins' }"
              class="py-4 px-6"
            >
              {{ player.wins }}
            </td>
            <td
              :class="{ 'bg-gray-100': sortType === 'goals' }"
              class="py-4 px-6"
            >
              {{ player.goals }}
            </td>
            <td
              :class="{ 'bg-gray-100': sortType === 'assists' }"
              class="py-4 px-6"
            >
              {{ player.assists }}
            </td>
            <td :class="{ 'bg-gray-100': sortType === 'gk' }" class="py-4 px-6">
              {{ player.gk }}
            </td>
            <td :class="{ 'bg-gray-100': sortType === 'cs' }" class="py-4 px-6">
              {{ player.cs }}
            </td>
            <td :class="{ 'bg-gray-100': sortType === 'wr' }" class="py-4 px-6">
              {{ player.wr }}%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  data() {
    return {
      loading: false,
      players: [],
      sortType: "goals",
      goalFields: [
        { key: "ranking", label: "Ranking" },
        { key: "value", label: "Nome" },
        { key: "score", label: "Gols" },
      ],
      goals: [],
      winFields: [
        { key: "ranking", label: "Ranking" },
        { key: "value", label: "Nome" },
        { key: "score", label: "Vitórias" },
        { key: "wr", label: "WR%" },
      ],
      wins: [],
      gameFields: [
        { key: "ranking", label: "Ranking" },
        { key: "value", label: "Nome" },
        { key: "score", label: "Nº de partidas" },
      ],
      games: [],
      assistsFields: [
        { key: "ranking", label: "Ranking" },
        { key: "value", label: "Nome" },
        { key: "score", label: "Assistências" },
      ],
      assists: [],
      gkFields: [
        { key: "ranking", label: "Ranking" },
        { key: "value", label: "Nome" },
        { key: "score", label: "Partidas como GK" },
        { key: "score_cs", label: "CS" },
      ],
      gk: [],
    };
  },
  async mounted() {
    this.loading = true;
    let result = await axios.get("https://haxball-backend.herokuapp.com/stats");
    this.goals = result.data.goals;
    this.wins = result.data.wins;
    this.games = result.data.games;
    this.assists = result.data.assists;
    this.gk = result.data.gk || [];
    this.cs = result.data.cs || [];
    console.log(result);
    this.loading = false;

    this.players = this.games.map((games) => {
      const wins = this.wins.find((p) => p.value === games.value) || {};
      const goals = this.goals.find((p) => p.value === games.value) || {};
      const assists = this.assists.find((p) => p.value === games.value) || {};
      const gk = this.gk.find((p) => p.value === games.value) || {};
      const cs = this.cs.find((p) => p.value === games.value) || {};
      console.log("WINS AND GAMES", wins, games);
      let wr = ((100 * wins.score) / games.score).toPrecision(3);
      if (isNaN(wr)) {
        wr = 0;
      }
      return {
        name: games.value,
        games: games.score || 0,
        wins: wins.score || 0,
        goals: goals.score || 0,
        assists: assists.score || 0,
        gk: gk.score || 0,
        cs: cs.score || 0,
        wr: wr,
      };
    });
    this.sortFields("goals");
  },

  watch: {
    sortType(newValue) {
      this.sortFields(newValue);
    },
  },
  methods: {
    sortFields(sortType) {
      switch (sortType) {
        case "games":
          this.players.sort((a, b) => b.games - a.games);
          break;
        case "wins":
          this.players.sort((a, b) => b.wins - a.wins);
          break;
        case "goals":
          this.players.sort((a, b) => b.goals - a.goals);
          break;
        case "assists":
          this.players.sort((a, b) => b.assists - a.assists);
          break;
        case "gk":
          this.players.sort((a, b) => b.gk - a.gk);
          break;
        case "cs":
          this.players.sort((a, b) => b.cs - a.cs);
          break;
        case "wr":
          this.players.sort((a, b) => b.wr - a.wr);
          break;
      }
    },
  },
};
</script>

<style>
input:checked ~ .radio {
  color: white;
  background-color: rgb(0, 162, 255);
}
</style>
