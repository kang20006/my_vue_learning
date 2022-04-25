<template>
    <!-- .prevent can prevent the refresh page default event -->
    <form @submit.prevent="handleSubmit">
        <label>Email:</label>
        <input type="email" required v-model="email">
        <label>Password:</label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error">{{passwordError}}</div>
        <label>Role:</label>
        <select v-model="role">
            <option value="develop er">Web Developer</option>
            <option value="designer">Web Designer</option>
        </select>
        <div class="terms">
            <input type="checkbox" v-model="terms" required>
            <label>Accept terms and conditions</label>
        </div>
        <div>
            <input type="checkbox" value="shaun" v-model="names">
            <label>Shaun</label>
        </div>
        <div>
            <input type="checkbox" value="yoshi" v-model="names">
            <label>Yoshi</label>
        </div>
        <div>
            <input type="checkbox" value="mario" v-model="names">
            <label>Mario</label>
        </div>
        <label>Skills: </label>
        <!-- press enter to trigger function -->
        <input type="text" v-model="tempSkill" @keyup.enter="addSkill">
        <!-- give each skill a unique key  -->
        <div v-for="skill in skills" :key="skill" class="pill">
            <span @click="deleteSkill(skill)">{{skill}}</span>

        </div>
        <div class="submit">
            <button>Submit Form</button>
        </div>
    </form>
    <!-- another way -->
    <p>Email:{{email}}</p>
    <p>Password:{{password}}</p>
    <p>Role:{{role}}</p>
    <p>Terms:{{terms}}</p>
    <p>Names:{{names}}</p>
</template>

<script>
export default {
    data(){
        return{
            // two properties tracking two input
            // one way
            email:'',
            password:'',
            role: '',
            terms: false,
            names: [],
            tempSkill:'',
            skills:[],
            passwordError:''
        }
    },
    methods:{
       addSkill(e){
           console.log(e)
        //    if the user press , and the tempSkill has value
           if (e.key==='Enter' && this.tempSkill){
            // if this.tempSkill not in the skill then add it
            if(!this.skills.includes(this.tempSkill)) {
                //    add to the skill array
               this.skills.push(this.tempSkill)
            }
               this.tempSkill=''
           }
       },
        deleteSkill(skill){
            // filter function cycle through each item in the array, if we return true for an item in the array then we keep the item else remove the item
            this.skills=this.skills.filter((item)=>{
                return skill !== item
            })
        },
        handleSubmit(){
            // validate password
            // if > 5 then '' if it is false then after :
            this.passwordError=this.password.length > 5 ? '' : 'Password must be at least 6 chars long'
            if(!this.passwordError){
                console.log('email:',this.email)
                console.log('password:',this.password)
                console.log('role:',this.role)
                console.log('skills:',this.skills)
                console.log('terms accepted:',this.terms)
            }
        }
    }
}
</script>

<style>
form{
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;

}
label{
    color:#aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: bold;
    font-weight: bold;
}
input,select{
    display: block;
    padding:10px 6px ;
    width: 100%;
    box-sizing: border-box;
    border:none;
    border-bottom: 1px solid #ddd;
    color:#555;
}
input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position:relative;
    top:2px;
}
.pill{
    display:inline-block;
    margin:20px 10px 0 0;
    padding: 6px 12px;
    border-radius: 20px;
    font-size:12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
button{
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.submit{
    text-align: center;
}
.error{
    color:#ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;

}

</style>