<template>
  <div class="div">
   <form v-if="!registrationPassed" class="sign-up" @submit.prevent="checkForm">
    <div class="form_group">
      <label for="login">Login :</label><br>
      <input
        id="login"
        class="form-control"
        :class="$v.form.login.$error ? 'is-invalid' : ''"
        v-model.trim="form.login"
      >
      <p v-if="$v.form.login.$dirty && !$v.form.login.required" class="invalid-feedback">
        Login is required
      </p>
      <p v-if="$v.form.login.$dirty && !$v.form.login.minLength" class="invalid-feedback">
        Please enter minimum 5 symbols
      </p>

    </div>
     <div class="form-group">
       <label for="login">Email:</label>
       <input
           id="email"
           type="email"
           class="form-control"
           :class="$v.form.email.$error ? 'is-invalid' : ''"
           v-model.trim="form.email"
       >
       <p v-if="$v.form.login.$dirty && !$v.form.email.required" class="invalid-feedback">
         Email is required
       </p>
       <p v-if="$v.form.login.$dirty && !$v.form.email.email" class="invalid-feedback">
         Invalid Email
       </p>
     </div>
     <div class="form-group">
       <label for="login">Password:</label>
       <input
           id="password"
           type="password"
           class="form-control"
           :class="$v.form.password.$error ? 'is-invalid' : ''"
           v-model.trim="form.password"
       >
       <p v-if="$v.form.login.$dirty && !$v.form.password.required" class="invalid-feedback">
         Password is required
       </p>
     </div>

           <div class="form_group">
            <label for="country">Country :</label><br>
             <select id="country" class="form-control select" v-model="form.country">
               <option
                v-for="(country, index) in countries"
                :value="country.value"
                :key="index"
               > {{country.label}}
               </option>
             </select>
          </div>
             <div class="form-group">
               <label for="themes">Themes:</label>
               <select
                   id="themes"
                   class="form-control"
                   :class="$v.form.favoriteThemes.$error ? 'is-invalid' : ''"
                   v-model="form.favoriteThemes" multiple
               >
                 <option
                     v-for="(theme, index) in themes"
                     :value="theme.value"
                     :key="index"
                 >
                   {{ theme.label }}
                 </option>
               </select>
               <p v-if="$v.form.favoriteThemes.$dirty && !$v.form.favoriteThemes.maxCount" class="invalid-feedback">
                 No more than 3 topics
               </p>
             </div>


               <div class="form-group form-check">
                 <input type="checkbox" class="form-check-input" id="notification" v-model="form.agreementForNotes">
                 <label class="form-check-label" for="notification">New notifications</label>
               </div>

                  <div class="form-group form-check">
                   <input
                       type="checkbox"
                       class="form-check-input"
                       id="agreeWithRules"
                       v-model="form.agreeWithRules"
                   >
                   <label class="form-check-label" :class="$v.form.agreeWithRules.$error ? 'is-invalid' : ''" for="agreeWithRules">Agree with rules</label>
                   <p v-if="$v.form.agreeWithRules.$dirty && !$v.form.agreeWithRules.mustBeTrue" class="invalid-feedback">
                     Read rules!
                   </p>
                 </div>

                    <div class="flex">
                      <div class="form-check">
                        <label class="form-check-label" for="male"> Male </label>
                        <input type="radio" id="male" value="male" name="exampleRadios" class="form-check-input" v-model="form.gender">
                      </div>
                    </div>
                      <div class="flex">
                        <div class="form-check">
                          <label class="form-check-label"  for="female"> Female </label>
                          <input type="radio" id="female" value="female" name="exampleRadios" class="form-check-input" v-model="form.gender">
                        </div>
                      </div>
     <button type="submit" class="btn btn-primary">Save</button>
   </form>
  <div v-else>
    <h1>
      {{`${form.login},Congratulations you have successfully registered`}}
    </h1>
  </div>
  </div>
</template>
<!--trim-y heracnuma probelnery-->
<script>

import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data(){
    return{
      registrationPassed: false,
      form: {
        login: '',
        email: '',
        password: '',
        country: 'Armenia',
        agreementForNotes: false,
        agreeWithRules: false,
        favoriteThemes: ['IT'],
        gender: 'male',
      },
      countries: [
        {
          label: "Armenia",
          value: "Armenia"
        },
        {
          label: "Usa",
          value: "Usa"
        },
        {
          label: "Germany",
          value: "Germany"
        }
      ],
      themes: [
        {
          label: "Tecnologies",
          value: "IT"
        },
        {
          label: "Finance",
          value: "Finance"
        },
        {
          label: "Sport",
          value: "Football"
        },
        {
          label: "Art",
          value: "Painting"
        }
      ]
    }
  },
  validations: {
    form:{
        login: { required, minLength: minLength(5)},
        email: { required, email },
        password: { required },
        agreeWithRules: {
          mustBeTrue(value) {
            return value
          }
        },
        favoriteThemes: {
            maxCount(value) {
              return value.length <= 3
            }
        },
    }
  },
  methods: {
    checkForm() {
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        this.registrationPassed= true
      }
    }
  }

}
</script>


<style lang="scss" scoped>
.div{
  margin-left: 10px;
}
.form-control {
  width: 400px;
}
.form-check {
  margin-right: 10px;
  display: inherit;
}
button {
  margin-top: 15px;
}
</style>



