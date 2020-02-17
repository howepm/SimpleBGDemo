generateFireflies = (target = '#fireFlies') ->
  i = 0
  while i < 14
    $(target).append '<div class="firefly"></div>'
    i++

generateFireflies()
