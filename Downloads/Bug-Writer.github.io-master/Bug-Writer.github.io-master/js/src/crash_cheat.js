<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/images/head.png");
         document.title = '给我回来｜LYY\'s blog';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/images/head.png");
         document.title = '啊回来了｜LYY\'s blog' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 1800);
     }
 });
