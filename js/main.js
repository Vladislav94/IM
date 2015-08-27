$( document ).ready(function() {
    $('.promo__wrapper').owlCarousel({
        singleItem : true,
        navigation : true,
        navigationText : false,
        slideSpeed: 1500,
        //paginationSpeed: 2500,
        rewindNav: false,
        autoPlay: true
    });
});

$( document ).ready(function() {
    $('.promo-next__product').owlCarousel({
        singleItem : true,
        navigation : false,
        autoPlay: true,
        slideSpeed: 1000
        //paginationSpeed: 1500
        //touchDrag: false
    });
    var owlTabs = $('.special__tabs-content').owlCarousel({
        singleItem : true,
        navigation : false,
        slideSpeed: 0,
        rewindSpeed: 0,
        addClassActive: true,
        rewindNav: false
    }).data('owlCarousel');

    $(document).on('click', '.special__tab', function (){
        $('.special__tab').removeClass('active-t');
        $(this).addClass('active-t');
        var indexT = $('.active-t').index();
        var indexS = $('.special .active').index();

        owlTabs.jumpTo(indexT);
        console.log(indexT);
        console.log(indexS);

        function dd(){
            if (indexT == 0){
                $('.special__more').text('все скидки');
                return false;
            }
            if (indexT == 1){
                $('.special__more').text('все спецпредложения');
                return false;
            }
            if (indexT == 2){
                $('.special__more').text('все новинки');
                return false;
            }
        } dd();



    });


    $('.special__wrapper').owlCarousel({
        navigation : false,
        //navigationText : false,
        autoPlay: true,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [991,2],
        itemsTablet: [767,1],
        itemsMobile : [479,1],
        items : 4

    });


});

//$(document).on('click', '.special__tab', function (){
//    $('.special__tab').removeClass('active-t');
//    $(this).addClass('active-t');
//    var indexT = $('.active-t').index();
//    if(indexT == 0){}
//    if(indexT == 0){}
//    if(indexT == 0){}
//});

$(document).on('click', 'a[href="#"]', function (){
    return false;
});


$('.header__nav-right').hover(
    function() {
        $( this ).addClass('header__nav-right--hover')
    }, function() {
        $( this ).removeClass('header__nav-right--hover')
    }
);

$(document).on('click', '.v-down__1', function (){
    $('.header-dr').text('РУБ');
    $('.v-o').show();
    $(this).hide();
});

$(document).on('click', '.v-down__2', function (){
    $('.header-dr').text('EUR');
    $('.v-o').show();
    $(this).hide();
});

$(document).on('click', '.v-down__3', function (){
    $('.header-dr').text('USD');
    $('.v-o').show();
    $(this).hide();
});