<template>
  <div class="hello">
    <div class="img-block">
      <img src="../assets/Capture.jpg" height="100px" alt="">
    </div>
    <h3>EXPRESSIVE, DYNAMIC, ROBUST CSS</h3>
    <p>Stylus is a node based CSS preprocessor. it is to remove Braces, colon, semicolon to make code stylish. and provide variabe, mixins and more to reduce the code.</p>
    <br>
    <h3>Syntax and Extension</h3>
    Stylus is a css preprocessor file which have the extension of '.styl'. when we compile the .styl file it produce a '.css' file as a output css
    <br><br>
    <h2><span class="tag">#</span> Installation</h2>
    <p>Installing stylus is very easy once you have <b>Nodejs</b>. So get the binaries for your platform and make sure that they also include npm, Node's package manager</p>
    <p>Now, type in your terminal:</p>
    <div class="npm-support">
      <pre v-highlightjs="sourcecode"><code class="css">
      $ npm install stylus-loader stylus --save 
      </code></pre>
      <p>Or add the dependencies to package.json</p>
      <pre v-highlightjs="sourcecode"><code class="css">
  {
    "stylus": "^0.54.5",
    "stylus-loader": "^2.3.1"
  }
      </code></pre>
      
      <h3>Usage</h3>
       <pre v-highlightjs="sourcecode"><code class="css">
  body
    text-align: center

    img
      max-width: 101px
      margin: 12px
       </code></pre>
    </div>
    <br>
    <h3>Features : </h3>
    <ul>
      <li>Optional colons</li>
      <li>Optional semicolon</li>
      <li>Optional Braces</li>
    </ul>
    <br>
    <br>
    <h2>Using External Stylus in a block level</h2>
    <p>To use the external stylus file ina block level we need to use <b>@import</b></p>
    <br>
    <h3 class="x-head">Usage of @import in a Component</h3>
    <p>place the below code in style block</p>
    <pre v-highlightjs="sourcecode"><code class="css">
      @import './index.styl'
    </code></pre>
    <br>
    <pre v-highlightjs="sourcecode"><code class="css">
    //index.styl
    
    .s-block .txt1
      color green

    .s-block .txt2
      color blue

    .s-block .txt3
      color red
    </code></pre>
    <p><b>Example:</b></p>
    <div class="s-block">
      <p class="txt1">i am green</p>
      <p class="txt2">i am blue</p>
      <p class="txt3">i am red</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import './css/index.styl'
</style>
