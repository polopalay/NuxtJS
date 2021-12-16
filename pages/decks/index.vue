<template>
    <div>
        <div class="ct">
            <h3>List of your decks:</h3>
            <ul class="desks-list">
                <li>
                    <nuxt-link class="deck" to="/decks/1">
                        <div class="card deck-card">
                            <img src="https://academy.binance.com/_next/image?url=https%3A%2F%2Fimage.binance.vision%2Fuploads-original%2F0ee9d7d59d424a7c8bd7d70c86070beb.png&w=1920&q=80" alt="Thumbnail card">
                            <div class="card-body">
                                <h3>Title card</h3>
                                <p>Description card</p>
                            </div>
                        </div>
                    </nuxt-link>
                    
                </li>
                <li>
                    <nuxt-link class="deck" to="/decks/1">
                        <div class="card deck-card">
                            <img src="https://academy.binance.com/_next/image?url=https%3A%2F%2Fimage.binance.vision%2Fuploads-original%2F0ee9d7d59d424a7c8bd7d70c86070beb.png&w=1920&q=80" alt="Thumbnail card">
                            <div class="card-body">
                                <h3>Title card</h3>
                                <p>Description card</p>
                            </div>
                        </div>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link class="deck" to="/decks/2">
                        <div class="card deck-card">
                            <img src="https://academy.binance.com/_next/image?url=https%3A%2F%2Fimage.binance.vision%2Fuploads-original%2F0ee9d7d59d424a7c8bd7d70c86070beb.png&w=1920&q=80" alt="Thumbnail card">
                            <div class="card-body">
                                <h3>Title card</h3>
                                <p>Description card</p>
                            </div>
                        </div>
                    </nuxt-link>
                    
                </li>
            </ul>
            <!-- <input class="form_controler" type="text" id="text" v-model="deckID" placeholder="Please enter deckID">
            <button class="btn btn-success" @click="showDeck">Go to Deck</button> -->
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                deckID : '1'
            }
        },
        methods: {
            showDeck() {
                // this.$router.push('/decks/' + this.deckID)
                this.$router.push(`decks/${this.deckID}`)
            }
        }
    }
</script>

<style lang="scss">
    .desks-list {
        .deck {
            display: block;
        }
        li {
            margin-bottom: 1rem;
            &:last-child {
                margin-bottom: 0;
            }
        }
        .deck-card {
            display: flex;
            flex-direction: row;
            height: 250px;
            img {
                width: 250px;
                height: auto;
            }
        }
    }
</style>