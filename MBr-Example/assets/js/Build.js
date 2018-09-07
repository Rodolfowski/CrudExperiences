$(function() {
  var effects = 'animated sideInRight'
  var effectsEnd = 'animationend oAnimationEnd mozAnimationEnd WerbkitAnimationEnd'

$('Menssagem-Contato').click(function() {
$(this).addClass(effects).one(effectsEnd,function() {
$(this).removeClass(effects)

});
});
});
