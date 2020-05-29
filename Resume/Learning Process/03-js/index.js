var gtt = document.querySelector('.GoToTop')
    window.onscroll = function(){

    var nowScrollTop_safari = document.body.scrollTop
    var nowScrollTop_google = document.documentElement.scrollTop
        
        if(nowScrollTop_safari > 200  || nowScrollTop_google >200){
            gtt.classList.add('active')
        }else{
            gtt.classList.remove('active')
        }
    }


    gtt.onclick = function(){
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
}