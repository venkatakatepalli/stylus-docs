<template>
  <div class="mixin">
    <h2><span class="tag">#</span> Operators</h2>
    <br>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit saepe quo blanditiis quos quis natus sunt, porro possimus necessitatibus eaque nisi! Soluta dicta explicabo consectetur debitis accusamus, eveniet consequuntur voluptates.</p>
    <br>
    <div class="row">
      <div class="col-md-6">
        <span class="s-head">Stylus</span>
        <pre v-highlightjs="sourcecode"><code class="css">
   .
  []
  ! ~ + -
  is defined
  ** * / %
  + -
  ... ..
  <= >= < >
  in
  == is != is not isnt
  is a
  && and || or
  ?:
  = := ?= += -= *= /= %=
  not
  if unless
        </code></pre>
      </div>
    </div>
    <!-- second -->
      <h2>Usage</h2>
    <br>
    <div class="row">
      <div class="col-md-6">
        <pre v-highlightjs="sourcecode"><code class="css">
  //unary operators

  !0
  // => true

  !!0
  // => false

  !1
  // => false

  !!5px
  // => true

  -5px
  // => -5px

  --5px
  // => 5px

  not true
  // => false

  not not true
  // => true
        </code></pre>
      </div>
      <div class="col-md-6">
        <pre v-highlightjs="sourcecode"><code class="css">
  //Arthemetic operators
  
  15px - 5px
  // => 10px

  5 - 2
  // => 3

  5in - 50mm
  // => 3.031in

  5s - 1000ms
  // => 4s

  20mm + 4in
  // => 121.6mm

  "foo " + "bar"
  // => "foo bar"

  "num " + 15
  // => "num 15"
        </code></pre>
      </div>
    </div>
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
