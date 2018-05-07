<template>
  <div class="mixin">
    <h2><span class="tag">#</span> Selectors</h2>
    <br>
    <p>Stylus, just like CSS, allows you to define properties for several selectors at once through comma separation.</p> 
    <br>
    <div class="row">
      <div class="col-md-6">
        <span class="s-head">Stylus</span>
        <pre v-highlightjs="sourcecode"><code class="css">
  h2
    font font-size Arial, sans-serif
    color $color
  p, a
    color red
  p
  a
    color red
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
    <div class="row">
      <div class="col-md-12">
        <h3>Parent Reference</h3>
        <p>The & character references the parent selector(s). In the example below our two selectors (textarea and input) both alter the color on the :hover pseudo selector.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <span class="s-head">Stylus</span>
        <pre v-highlightjs="sourcecode"><code class="css">
  textarea
  input
    color #A7A7A7
    &:hover
      color #000
        </code></pre>
      </div>
      <div class="col-md-6">
        <span class="s-head">CSS</span>
        <pre v-highlightjs="sourcecode"><code class="css">
  textarea,
  input {
    color: #a7a7a7;
  }
  textarea:hover,
  input:hover {
    color: #000;
  }
        </code></pre>
      </div>
    </div>
    <!-- 3 -->
    <div class="row">
      <div class="col-md-12">
        <h3>Partial Reference</h3>
        <p>^[N] anywhere in a selector, where N can be a number, represents a partial reference.</p>
        <p>Partial reference works similar to the parent reference, but while parent reference contains the whole selector, partial selectors contain only the first merged N levels of the nested selectors, so you could access those nesting levels individually.</p>

        <p>The ^[0] would give you the selector from the first level, the ^[1] would give you the rendered selector from the second level and so on:</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <span class="s-head">Stylus</span>
        <pre v-highlightjs="sourcecode"><code class="css">
  .foo
  &__bar
    width: 10px

    ^[0]:hover &
      width: 20px
        </code></pre>
      </div>
      <div class="col-md-6">
        <span class="s-head">CSS</span>
        <pre v-highlightjs="sourcecode"><code class="css">
.foo__bar {
width: 10px;
}
.foo:hover .foo__bar {
  width: 20px;
}
        </code></pre>
      </div>
    </div>
    <!-- 4 -->
    <div class="row">
      <div class="col-md-12">
        <h3>Initial Reference</h3>
        <p>The ~/ characters at the start of a selector can be used to point at the selector at the first nesting and could be considered as a shortcut to ^[0]. The only drawback is that you can use initial reference only at the start of a selector</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <span class="s-head">Stylus</span>
        <pre v-highlightjs="sourcecode"><code class="css">
  .block
  &__element
    ~/:hover &
      color: red
        </code></pre>
      </div>
      <div class="col-md-6">
        <span class="s-head">CSS</span>
        <pre v-highlightjs="sourcecode"><code class="css">
  .block:hover .block__element {
    color: #f00;
  }
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
