Vue.component('paymentform', {
    data:function(){
        return {
            message: "PG Page",
            name:"",
            email:"",
            mobile:"",
            amount:""
        }
    },
    methods:{
        createPGLink: function(callback = null){
            const _this = this;

            const form = document.getElementById('pg-form');
            let formData = new FormData(form);
            formData.append('gateway','paytm');
            try {
                axios.post('http://havyou.com/pg',formData)

                    .then(res => {

                       console.log(res);

                    })
                    .catch(error => {
                        console.log(error);
                    })
            }catch(error){
                console.log(error)
            }
        },
    },
    template:
        `<div id="pg" class="container-fluid">
        <div class="row bg-dark">
            <div class="col-lg-12">
                <p class="text-center text-light  display-6 pt-2">{{message}}
            </div>
        </div>
        
<!--        Payment details form -->
<div class="container mt-5 shadow-lg rounded" id="pg-container">
<form class="pt-4" id="pg-form" method="post" name="pg-form" @submit.prevent="createPGLink">
  <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="row mb-4">
    <div class="col-lg-6">
      <div class="form-outline">
        <input type="text" id="name" name="UserInfo" class="form-control" v-model="name" placeholder="Customer Name"  required/>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="form-outline">
        <input type="text" id="email" name="EmailId" class="form-control" v-model="email" placeholder="Email" required />
      </div>
    </div>
  </div>
  
   <div class="row mb-4">
    <div class="col-lg-6">
      <div class="form-outline">
        <input type="text" id="mobile" name="Mobile" class="form-control" v-model="mobile" placeholder="Mobile" required />
      </div>
    </div>
    <div class="col-lg-6">
      <div class="form-outline">
        <input type="number" id="amount" name="Amount" class="form-control" v-model="amount" placeholder="Request for Amount" required />
      </div>
    </div>
  </div>
  
  <select class="form-control custom-select" id="mode" name="Mode" required>
    <option value="CC" selected>Credit Card</option>
    <option value="debit-card">Debit Card</option>  
    <option value="net-banking">Net Banking</option>
    <option value="amex">Amex</option>
    <option value="paypal">Paypal</option>
    <option value="wallets">Wallets</option>
    <option value="paytm-wallet">Paytm-wallet</option>
    <option value="upi">UPI</option>
 </select>
    
  <button type="submit" class=" mt-4 col-lg-6 btn btn-secondary btn-block">Create Paytm PG Link</button>

<!--  &lt;!&ndash; Submit button &ndash;&gt;-->
<!--<div class="row mt-4 submit-btn">-->
<!--  <button @click="createPaytmPGLink" class="col-lg-6 btn btn-secondary btn-block">Create Paytm PG Link</button>-->
<!--  <button @click="createRazorPGLink" class="col-lg-6 btn btn-secondary btn-block">Create RazorPay PG Link</button>-->
<!--</div>-->

</form>
        </div>
</div>`
});
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});