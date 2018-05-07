<template>
  <div class="mixin">
    <h2><span class="tag">#</span> Variables</h2>
    <br>
    <p>We may assign expressions to variables and use them throughout our stylesheet</p>
    <br>
    <div class="row">
      <div class="col-md-6">
        <span class="s-head">Stylus</span>
        <pre v-highlightjs="sourcecode"><code class="css">
          font-size = 10px
          $color = red

          h2
            font font-size Arial, sans-serif
            color $color
          p
            color $color
        </code></pre>
      </div>
      <div class="col-md-6">
        <span class="s-head">CSS</span>
        <pre v-highlightjs="sourcecode"><code class="css">
         h2 {
           font: 10px Arial, sans-serif;
            color: red;
         }
         p {
           color: red;
         }
        </code></pre>
      </div>
    </div>
    <br><br>
    <h2>Property Lookup</h2>
    <br>
    <p>Another cool feature unique to Stylus is the ability to reference properties defined without assigning their values to variables. A great example of this is the logic required for vertically and horizontally center an element</p>
    <br>
    <div class="row">
      <div class="col-md-6">
        <span class="s-head">Stylus</span>
        <pre v-highlightjs="sourcecode"><code class="css">
  #logo
   position: absolute
   top: 50%
   left: 50%
   width: w = 150px
   height: h = 80px
   margin-left: -(w / 2)
   margin-top: -(h / 2)
        </code></pre>
      </div>
      <div class="col-md-6">
        <span class="s-head">CSS</span>
        <pre v-highlightjs="sourcecode"><code class="css">
  #logo
   position: absolute
   top: 50%
   left: 50%
   width: 150px
   height: 80px
   margin-left: 75px
   margin-top: 40px
        </code></pre>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-6">
        <span class="s-head">Stylus</span>
        <pre v-highlightjs="sourcecode"><code class="css">
  #logo
   position: absolute
   top: 50%
   left: 50%
   width: 150px
   height: 80px
   margin-left: -(@width / 2)
   margin-top: -(@height / 2)
        </code></pre>
      </div>
      <div class="col-md-6">
        <span class="s-head">CSS</span>
        <pre v-highlightjs="sourcecode"><code class="css">
  #logo
   position: absolute
   top: 50%
   left: 50%
   width: 150px
   height: 80px
   margin-left: 75px
   margin-top: 40px
        </code></pre>
      </div>
    </div>
    <!-- <h3>Example</h3>
    <div class="row">
      <div class="col-md-6">
        <p class="s-head">Code</p>
        <textarea min-wid th="100%" rows="10" class="javascript" v-model="example" style="min-width:100%;"></textarea>
      </div>
      <div class="col-md-6">
        <p class="s-head">Result</p>
        <div v-html="example">
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      example: '<div>Hello World</div>'
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
