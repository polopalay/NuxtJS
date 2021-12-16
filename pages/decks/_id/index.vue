<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck: {{ $route.params.id }} learn english by sky alber</h3>
        <div class="tools">
          <button class="btn btn_success">Start now</button>
          <button class="btn btn_primary">Create card</button>
        </div>
        <hr class="divide" />
        <div class="r">
          <div class="c_3">
            <div class="cards">
              <div class="card">
                <div class="front-card">
                  <img
                    src="https://coin68.com/wp-content/uploads/2021/09/shop.com-bitpay-bitcoin.jpeg"
                    alt="Thmbnail card"
                  />
                </div>
                <div class="back-card"></div>
              </div>
            </div>
          </div>
          <div class="c_3">
            <div class="cards">
              <div class="card">
                <div class="front-card">
                  <img
                    src="https://coin68.com/wp-content/uploads/2021/09/shop.com-bitpay-bitcoin.jpeg"
                    alt="Thmbnail card"
                  />
                </div>
                <div class="back-card"></div>
              </div>
            </div>
          </div>
          <div class="c_3">
            <div class="cards">
              <div class="card">
                <div class="front-card">
                  <img
                    src="https://coin68.com/wp-content/uploads/2021/09/shop.com-bitpay-bitcoin.jpeg"
                    alt="Thmbnail card"
                  />
                </div>
                <div class="back-card"></div>
              </div>
            </div>
          </div>
          <div class="c_3">
            <div class="cards">
              <div class="card">
                <div class="front-card">
                  <img
                    src="https://coin68.com/wp-content/uploads/2021/09/shop.com-bitpay-bitcoin.jpeg"
                    alt="Thmbnail card"
                  />
                </div>
                <div class="back-card"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  /* async */ validate({ params }) {
    //context
    // console.log(context)

    // nhớ phải return trả về
    return /^[0-9]$/.test(params.id); //(^) từ đầu. ($) đến cuối. [0-9] chỉ nhập số. {9,12} nhập từ 9-12 ký tự
    // return /^[0-9]{9,12}$/.test(params.id)
  },
};
</script>

<style lang="scss">
section {
  padding-top: 3rem;
  .card {
    padding: 1rem;
    img {
      width: 60%;
    }
  }
  .divide {
    margin: 2rem 0;
  }
}
</style>