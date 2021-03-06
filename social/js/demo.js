/*!
 * Contact Buttons Plugin Demo 0.1.0
 * https://github.com/joege/contact-buttons-plugin
 *
 * Copyright 2015, José Gonçalves
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

// Google Fonts
WebFontConfig = {
  google: { families: [ 'Lato:400,700,300:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

// Initialize Share-Buttons
$.contactButtons({
  effect  : 'slide-on-scroll',
  buttons : {
    'facebook':   { class: 'facebook', use: true, link: 'https://www.facebook.com/SolarGard-Oman-991541297578607', extras: 'target="_blank"' },
    'twitter':    { class: 'twitter',use:true,link: 'https://twitter.com/solargard_oman', extras: 'target="_blank"' },
    'youtube':    { class: 'youtube',      use: false, link: 'https://www.youtube.com/channel/UC6Z0hiDQqg7jALvTPRPdy9g', icon: 'youtube', extras: 'target="_blank"', title: 'Visit YouTube Channel'  },
    'googleplus': { class: 'gplus',      use: true, link: 'https://plus.google.com/108529877498298749354', icon: 'google-plus', extras: 'target="_blank"' , title: 'Visit on Google Plus'  },
    'instagram': { class: 'instagram',      use: true, link: 'https://www.instagram.com/solargard_oman', icon: 'instagram', extras: 'target="_blank"' , title: 'Follow on Instagram'  },


    'phone':      { class: 'phone separated',    use: true, link: '+96898311010',  title:'+96898311010' },
    'email':      { class: 'email',    use: true, link: 'sales@solargardoman.com' }
  }
});
