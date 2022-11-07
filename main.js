vue.Component('product', {
  template: `
  <div class="product">
        <div class="product-image">
          <img v-bind:src="image" />
        </div>

        <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>

          <ul>
            <li v-for="detail in details">{{detail}}</li>
          </ul>

          <div
            class="color-box"
            v-for="(variant, index) in variants"
            :key="variant.variantId"
            :style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProduct(index)"
          ></div>

          <button
            @click="addToCart"
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }"
          >
            Add to Cart
          </button>
          <div class="cart">
            <p>Cart ({{cart}})</p>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
    product: 'Socks',
    selectedVariant: 0,
    cart: 0,
    brand: 'Vue Practice',
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 1,
        variantColor: 'green',
        variantImage: './assets/vmSocks-green.jpeg', 
        variantQuantity: 100
      },
      {
        variantId: 2,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue.jpeg',
        variantQuantity: 0
      }
    ],
  },
  methods: {
    addToCart(){
        this.cart += 1
    },
    updateProduct: function(index) {
        this.selectedVariant = index
    }  
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image(){
      return this.variants[this.selectedVariant].variantImage  
    },
    inStock(){
      return this.variants[this.selectedVariant].variantQuantity
    }}

}})

var app = new Vue({
  el: '#app'
})
