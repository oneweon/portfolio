/// <reference path="./jquery.d.ts" />

scrollMove($(window).scrollTop());

if($(window).scrollTop() >= $('section').height()){
    // $('header li').css('color', 'black');
    $('header li span').addClass('black');
};

$('header').on('mousewheel', function(e, delta){
    let i = Math.floor($(window).scrollTop() / $('.wrap section').height());
    if(delta < 0 && i < $('.wrap section').length){
        $('html, body').stop().animate({
            'scrollTop': (i+1) * $('section').height()
        }, 500, ()=>{
            $('header li span').addClass('black');
        });
        $('.bar .now').stop().animate({
            'height': (i+1)*50 + 50
        }, 500);
    }else if(delta > 0 && i > 0){
        $('html, body').stop().animate({
            'scrollTop': (i-1)*$('section').height()
        }, 500, ()=>{
            if(i == 1){
                $('header li span').removeClass('black');
            }
        });
        $('.bar .now').stop().animate({
            'height': (i-1)*50 + 50
        }, 500);
    };
})

$('.wrap section').on('mousewheel', function(e, delta){
    let i = Math.floor($(window).scrollTop() / $('.wrap section').height());
    // console.log($(window).scrollTop());
    // console.log(delta);
    if(delta < 0 && i < $('.wrap section').length){
        // console.log($(this).index());
        // let i = $(this).index();
        $('html, body').stop().animate({
            // 'scrollTop': (i+1)*919
            'scrollTop': (i+1) * $('section').height()
        }, 500, ()=>{
            // $('header li').css('color', 'black');
            $('header li span').addClass('black');
        });
        $('.bar .now').stop().animate({
            'height': (i+1)*50 + 50
        }, 500);
    }else if(delta > 0 && i > 0){
        $('html, body').stop().animate({
            'scrollTop': (i-1)*$('section').height()
        }, 500, ()=>{
            if(i == 1){
                $('header li span').removeClass('black');
            }
        });
        $('.bar .now').stop().animate({
            'height': (i-1)*50 + 50
        }, 500);
    };
});

function scrollMove(scroll){
    $('.bar .now').css('height', (scroll / $('section').height()) * 50 + 50);
};

$(document).on('mousemove', (e)=>{
    let pos = {
        'left': e.pageX - 50,
        'top': e.pageY - 50
    };
    $('.cursor').css(pos);
});

$(document).on('mousemove', (e)=>{
    let mouseX = e.clientX - window.innerWidth/2
    let mouseY = e.clientY - window.innerHeight/2

    // console.log(`${mouseX} ${mouseY}`);

    $('.home img:nth-of-type(1)').animate({
        'left': - 150 + (-e.pageX / 100),
        'top': - 50 + (-e.pageY / 100),
    }, 10);
    $('.home img:nth-of-type(2)').animate({
        'right': -50 + (-e.pageX / 100),
        'bottom': 50 + (-e.pageY / 100),
    }, 10);
    $('.home img:nth-of-type(3)').animate({
        'left': (-e.pageX / 100),
        'bottom': -150 + (-e.pageY / 100),
    }, 10);
});

$('header span').on('click', function(){
    // console.log($(this).parent().index());
    let i = $(this).parent().index();

    $('html, body').stop().animate({
        'scrollTop': (i+1) * $('section').height()
    }, 500, ()=>{
        $('header span').addClass('black');
    });
    $('.bar .now').stop().animate({
        'height': (i+1)*50 + 50
    }, 500);
});

$('.works li').on('click', function(){
    $('.popbg').show();
    $('.pop').show();
});

$('.close, .popbg').on('click', function(){
    $('.popbg').hide();
    $('.pop').hide();
});

letterMove();

function letterMove(){
    let i = 0;
    setInterval(() => {
        if(i < $('.content span').length){
            // $('.content span').eq(i).animate({top: 0}, 500, 'easeOutBounce');
            $('.content span').eq(i).animate({opacity: 0});
            $('.content span').eq(i-1).animate({opacity: 1});
            i++;
        }else{
            // $('.content span').animate({top: '-20px'});
            // $('.content span').animate({opacity: 1});
            i = 0;
        };
    }, 100);
};

let str = $('.email h3').text().trim();
$('.email h3').text('');

for(let i = 0; i < str.length; i++){
    let span = $('<span>').text(str[i]);
    $('.email h3').append(span);
}

let cnt = 0;
setInterval(() => {
    $('.contact svg').animate({'scale':'1.3'}, ()=>{
        $('.contact svg').animate({'scale':'1'});
    });
}, 1000);
setInterval(() => {
    if(cnt < str.length){
        $('.email span').eq(cnt).animate({'top':'-20px'}, 60, ()=>{
            $('.email span').animate({'top':'0px'}, 40);
        });
        cnt++;
    }else{
        cnt=0;
    }
}, 110);