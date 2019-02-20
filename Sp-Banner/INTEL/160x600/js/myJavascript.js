
$(document).ready(function() {

var BannerPageOne = $('.BannerPageOne>img'),
BannerPageTwo = $('.BannerPageTwo>img'),
BannerPageThree = $('.BannerPageThree>img')
BannerPageFour = $('.BannerPageFour>img'),
imageNumber=1,
clearSectionFadeOut=function(){
  $('.BannerPageWordsChange').removeClass('animated fadeOut delay-1s');
};

animateWords();
function animateWords(){
  if ((imageNumber==1) || (imageNumber==2)) {
  setInterval(clearSectionFadeOut,4500);
  BannerPageOne.attr({src:"INTEL/160x600/assets/intel_hybrid_160_copy"+imageNumber+"a.png"}).addClass('BannerPageAnimationOne animated fadeInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',imFadeout );
  BannerPageTwo.attr({src:"INTEL/160x600/assets/intel_hybrid_160_copy"+imageNumber+"b.png"}).addClass('BannerPageAnimationTwo animated fadeInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',imFadeout );
  BannerPageThree.attr({src:"INTEL/160x600/assets/intel_hybrid_160_copy"+imageNumber+"c.png"}).addClass('BannerPageAnimationThree animated fadeInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',imFadeout );
setInterval(incrementImageValue,4000);
setInterval(animateWords,4000);
}
if (imageNumber==3){
  BannerPageOne.attr({src:"INTEL/160x600/assets/intel_hybrid_160_copy"+imageNumber+"a.png"}).addClass('BannerPageAnimationOne animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',imFadeoutSecond );
  BannerPageTwo.attr({src:"INTEL/160x600/assets/intel_hybrid_160_copy"+imageNumber+"b.png"}).addClass('BannerPageAnimationTwo animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',imFadeoutSecond );
  BannerPageThree.attr({src:"INTEL/160x600/assets/intel_hybrid_160_copy"+imageNumber+"c.png"}).addClass('BannerPageAnimationThree animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',imFadeoutSecond );
  BannerPageFour.attr({src:"INTEL/160x600/assets/intel_hybrid_160_copy"+imageNumber+"d.png"}).addClass('BannerPageAnimationFour animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',imFadeoutSecond );
}
function incrementImageValue(){
  return imageNumber++;
};//incrementImageValue
};//animatedWords()

  function imFadeout(){
    $(this).removeClass('animated fadeInLeft animated fadeInRight BannerPageAnimationOne BannerPageAnimationTwo BannerPageAnimationThree BannerPageAnimationFour animated bounceIn slow animated fadeIn');
    $('.BannerPageWordsChange').addClass('animated fadeOut delay-1s').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
});
};//imFadeout
function imFadeoutSecond(){
  $(this).removeClass('animated fadeInLeft BannerPageAnimationOne BannerPageAnimationTwo BannerPageAnimationThree');
  $('.BannerPageWordsChange').addClass('animated fadeOut delay-2s').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){});
  };//imFadeoutSecond

});//$(Document).ready(function())
