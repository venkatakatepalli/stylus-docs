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
