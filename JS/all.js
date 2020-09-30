(function ($) {

    $(document).ready(function(){

        $('.index_p, #star').delay(300).fadeIn(2000);

// 首頁點擊

        $('#star').click(function(){
            $('#star').animate({marginRight: '10px'}, 150).delay(300).animate({marginLeft:'1000px'}, 1500);
            $('.index-content').delay(500).fadeOut(1000);
            $('#index_page').delay(1500).fadeOut(1000);
        });

// 函數

        // NAV 點擊事件
        function navClick(navId, pageId){
            $(navId).click(function(){
                $(pageId).delay(200).fadeIn(300);
                $(pageId).siblings().fadeOut(200);
                listReset(200);
            })
        }
        //
        function m_navClick(navId, pageId){
            $(navId).click(function(){
                $(pageId).fadeIn(0);
                $(pageId).siblings().fadeOut(0);
                listReset(0);
                // close
                $('#close').fadeOut(300);
                $('.m_nav_bg').fadeOut(500);
                $('#m_nav').animate({marginLeft: '-180px'}, 700);
                $('#menu_button').animate({left: '-3px'}, 700);
            });
        }

        // 重設選單樣式
        function listReset(Time){
            $('.main_p, #imgdiv').delay(Time).slideUp(0);
            $('.main_li').removeClass('main_li_click');
        }

// NAV 點擊換頁

        navClick('#nav_1', '#page1');
        m_navClick('#m_nav_1', '#page1');

        navClick('#nav_2', '#page2');
        m_navClick('#m_nav_2', '#page2');

        navClick('#nav_3', '#page3');
        m_navClick('#m_nav_3', '#page3');

        navClick('#nav_4', '#page4');
        m_navClick('#m_nav_4', '#page4');

        navClick('#nav_5', '#page5');
        m_navClick('#m_nav_5', '#page5');
        

// <li> 點擊事件

        $('.main_li').click(function(){
            $(this).toggleClass('main_li_click').parent().siblings().find('.main_li').removeClass('main_li_click');
            $(this).parent().find('p').slideToggle(500);
            $(this).parent().siblings().find('p').slideUp(500);

            $(this).parent().find('#imgdiv').fadeToggle(500);
            $(this).parent().siblings().find('#imgdiv').fadeOut(500);
        });

        // 手機目錄按鈕

        $('#menu_button').click(function(){
            $('.m_nav_bg').fadeOut(0);
            $('.m_nav_bg, #close').fadeIn(300);
            $('#m_nav').animate({marginLeft: '180px'}, 500)
            $(this).delay(200).animate({left: '-50px'}, 700);
        });

        $('#close').click(function(){
            $('#close').fadeOut(300);
            $('.m_nav_bg').fadeOut(500);
            $('#m_nav').animate({marginLeft: '-180px'}, 500);
            $('#menu_button').animate({left: '-3px'}, 700);
        });

    });

})($)