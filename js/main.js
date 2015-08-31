$( document ).ready(function() {

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.promo__wrapper').owlCarousel({
        singleItem : true,
        navigation : true,
        navigationText : false,
        slideSpeed: 1500,
        //paginationSpeed: 2500,
        rewindNav: false,
        autoPlay: true
    });

    $('.product-slider').owlCarousel({
        singleItem : true,
        navigation : true,
        navigationText : false,
        slideSpeed: 1500,
        //paginationSpeed: 2500,
        rewindNav: false,
        autoPlay: false
    });

    $('.company-slider').owlCarousel({
        singleItem : true,
        navigation : true,
        navigationText : false,
        slideSpeed: 1500,
        //paginationSpeed: 2500,
        rewindNav: false,
        autoPlay: false
    });
});

$( document ).ready(function() {

    // input

    var $inputWrap = $('.input-wrap');

    $inputWrap.each(function(){
        var $this = $(this);

        var labelW = $this.find('.input-label').css('width'),
            inputIndent = $this.find('input').css('padding-left', labelW);
    });

    var $textareaWrap = $('.textarea-wrap');

    $textareaWrap.each(function(){
        var $this = $(this);

        var labelW = $this.find('.textarea-label').css('width'),
            textareaIndent = $this.find('textarea').css('padding-left', labelW);
    });


    // Tab

    var $easyTab = $('.easy-tab'),
        $tabListItem = $easyTab.find('.tab-list_item');

        $tabListItem.on('click', function(){
            var thisIndex = $(this).index();
            console.log(thisIndex);

            $(this).addClass('active')
                   .siblings().removeClass('active');

            $(this).closest('.easy-tab').find('.tab-section')
                                        .eq(thisIndex).addClass('active')
                                        .siblings().removeClass('active');
        });





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


    $('.main-carousel .special__wrapper').owlCarousel({
        navigation : true,
        autoPlay: false,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [991,2],
        navigationText : false,
        rewindNav: false,
        itemsTablet: [767,1],
        itemsMobile : [479,1],
        items : 4,
        navigationText : false,
        slideSpeed: 1000
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


$('.save-changes').on('click', function(){
  $('.personal-data').toggleClass('form-disabled');
  return false;
});