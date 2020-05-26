// $(document).ready(function(){
//     $("#sidebarCollapse").on('click',function(){
//     $("#sidebar").toggleClass('active');
//     });
// });

var gtt = document.querySelector('.GoToTop')
window.onscroll = function(){

    var nowScrollTop_safari = document.body.scrollTop
    var nowScrollTop_google = document.documentElement.scrollTop
    
    if(nowScrollTop_safari > 100  || nowScrollTop_google >100){
        gtt.classList.add('active')
    }else{
        gtt.classList.remove('active')
    }
}


gtt.onclick = function(){
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
}