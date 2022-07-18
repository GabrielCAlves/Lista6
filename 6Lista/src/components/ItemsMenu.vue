<script>
import router from '../router'

export default {
    components: {
        router
    },
    data() {
        return {
            items: [
                {id: 1, simbol: "bi bi-house-door", item: "Home", route: "/home"},
                {id: 2, simbol: "bi bi-hash", item: "Explore", route: "#"},
                {id: 3, simbol: "bi bi-bell", item: "Notifications", route: "#"},
                {id: 4, simbol: "bi bi-envelope", item: "Mensages", route: "#"},
                {id: 5, simbol: "bi bi-bookmark", item: "Bookmarks", route: "#"},
                {id: 6, simbol: "bi bi-list-task", item: "Lists", route: "#"},
                {id: 7, simbol: "bi bi-person-fill", item: "Profile", route: "/profile"},
                {id: 8, simbol: "bi bi-three-dots", item: "More", route: "#"},
            ]
        }
    }
}
</script>

<template>
    <ul>
        <img src="https://github.com/GabrielCAlves/DSW-Lista3/blob/main/tiziu.png?raw=true" width="45" height="60">
                
        <li v-for="(iten, id) in items" v-bind:key="id"><i class={{iten.simbol}}></i><a href={{iten.route}} class="link-dark">{{iten.item}}</a></li>
        
    </ul>
</template>