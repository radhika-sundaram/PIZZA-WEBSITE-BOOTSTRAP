/*! 
    Created on : Dec 15, 2016, 4:23:30 PM
    Author     : Vinay Kumar (vinay@incaendo.com)
!*/
var top_scroll=0;
$(document).ready(function(){
  //$(".vertical-box div div.row p").addClass("hide");
   var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
    
//  console.log(isMobile); 
    if (isMobile.Windows()) {
        $('.get-app').each(function () {
            var oldUrl = $(this).attr("href"); // Get current url
            var newUrl = oldUrl.replace("#", "https://play.google.com/store/apps/details?id=com.Dominos&hl=en"); // Create new url
            $(this).attr("href", newUrl);
        });
    };
    if (isMobile.Android()) {
        $('.get-app').each(function () {
            var oldUrl = $(this).attr("href"); // Get current url
            var newUrl = oldUrl.replace("#", "https://play.google.com/store/apps/details?id=com.Dominos&hl=en"); // Create new url
            $(this).attr("href", newUrl);
        });
    };
    if (isMobile.iOS()) {
        $('.get-app').each(function () {
            var oldUrl = $(this).attr("href"); // Get current url
            var newUrl = oldUrl.replace("#", "https://itunes.apple.com/in/app/dominos-pizza-india/id523106486?mt=8"); // Create new url
            $(this).attr("href", newUrl);
        });
    };
    
    $('.close-pop').click(function(){
        $(this).parent().slideUp();
        $('body > .main-wrapper').css({"margin-top":"120px"});
    });
  beautify();
   $(".vertical-box div.row:first-child a p:not(:empty)").addClass("normal-para");
   $(".vertical-box div.row:first-child a p:empty").css("display","none");
   $("#date_of_birth").focus(function(){
       $(this).parent().parent(".dob-box").addClass("input--filled");
   });
   $("#anniversary").focus(function(){
       $(this).parent().parent(".anniversary-box").addClass("input--filled");
   });
   $("#city").focus(function(){
       $(".restaurant-box").addClass("input--filled"); 
   });
   $(".close").click(function(){
    $(this).parents("#corpbox").css({"opacity":"0","visibility":"hidden"});
    $('#homepage-video').attr('src', '');
  });
   
    $(".menu-btn").click(function(){
        if($("body").hasClass("noScroll")){
           $("body").removeClass("noScroll"); 
        }else{
           $("body").addClass("noScroll"); 
        }
    });
      $("#shadow-box").click(function(){
           $("body").removeClass("noScroll"); 
      });
      
    $(".close-btn").click(function(){
           $("body").removeClass("noScroll"); 
    });
    $( window).resize(function () {
        var width = $(window).width();
        if (width > 767) {
            $(".menu-scroll li").removeClass("hidden-xs")

        };
    });
    
    
    $(window).scroll(700, function () {
            top_scroll = $(this).scrollTop();
            if (top_scroll > 10) {
                $(".pg-header").addClass("navbar-fixed-top").css({"padding": "0 18px 0 15px"}).animate();
                $(".sub-tree").fadeOut("fast");
            }
            else {

                $(".pg-header").addClass("navbar-static-top");
                $("header").removeClass("navbar-fixed-top");
                $(".sub-tree").fadeIn("fast");
            }
        });
        
//    $(".carousel-inner").swiperight(function () {
//      $(this).parent().carousel('prev');
//    });
//    $(".carousel-inner").swipeleft(function () {
//        $(this).parent().carousel('next');
//    });
        $('.storeSorting a').click(function(e) {
            $('.storeSorting a').removeClass('active');
            $(this).addClass('active');
        });
    });

    function openNav() {
        document.getElementById("side-menu").style.width = "70%";
        document.getElementById("shadow-box").style.width = "100%";
        
    }

    function closeNav() {
        document.getElementById("side-menu").style.width = "0";
        document.getElementById("shadow-box").style.width = "0";
         }
    function resetTextForm(obj) {
      $(obj).each (function(){
       this.reset();
    });
}
function beautify() {
  if (!String.prototype.trim) {
      (function () {
          // Make sure we trim BOM and NBSP
          var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          String.prototype.trim = function () {
              return this.replace(rtrim, '');
          };
      })();
  }
  [].slice.call(document.querySelectorAll('.input__field')).forEach(function (inputEl) {
        // in case the input is already filled..
  if (inputEl.value.trim() !== '') {
      classie.add(inputEl.parentNode, 'input--filled');
  }
        // events:
  inputEl.addEventListener('focus', onInputFocus);
  inputEl.addEventListener('blur', onInputBlur);
    });
  function onInputFocus(ev) {
      classie.add(ev.target.parentNode, 'input--filled');
  }
  function onInputBlur(ev) {
      if (ev.target.value.trim() === '') {
          classie.remove(ev.target.parentNode, 'input--filled');
      }
  }
}

function setMessage(obj, msg) {
    $(obj).addClass('error');
    $('.alert.alert-info').html(msg);
    $('.alert.alert-info').show();
    hideSuccessMsg();
}

function removeMessage(obj) {
    $(obj).removeClass('error');
    $('.alert.alert-info').hide();
}

function scrollUp() {
    $("html, body").animate({scrollTop: 0}, 1000);
    return false;
}
function hideSuccessMsg() {
    setTimeout(function() {
        $(".alert.alert-info").fadeOut(1600, 'linear');
    }, 6000);
}
function reloadCaptcha () {
    document.getElementById('captcha').src='/captcha?'+Math.random();
    return false;
}

function getUrlVars(url) {
    var vars = [], hash;
    var urlStr = '';
    if (url == '' || url == null || url == undefined ) {
        urlStr = window.location.href;
    } else {
        urlStr = url;
    }
    var start = urlStr.indexOf('?');
    if(start>0){
        var hashes = urlStr.slice( start + 1).split('&');
        for(var i = 0; i < hashes.length; i++){	
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
    }
    return vars;
}

