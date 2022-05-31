// Table of Content
// var _page = function () {

//     scroll = function () {

//     };
//     loadMore = function () {

//     };
//     init = function () {
//         scroll();
//         loadMore();
//     }
//     return init();
// };
// $(function () {
//     "use strict";
//     _page();
// });

jQuery(document).ready(function($) {

    "user strict";
    //Init 
    _page();

});


var _page = function() {

    init = function() {
        //0. Menu
        // initMenu();
        //1. Favorte 
        initFavorite();
        //2. Filter
        initProductFilter();
        //3. Slider
        initSlider();
        //4.Load more
        // initLoadMore();
    };
    // initMenu = function() {
    //     var mainSlider = $('.main_slider');
    //     var hamburger = $('.hamburger_container');
    //     var menu = $('.hamburger_menu');
    //     var menuActive = false;
    //     var hamburgerClose = $('.hamburger_close');
    //     var fsOverlay = $('.fs_menu_overlay');

    //     if (hamburger.length) {
    //         hamburger.on('click', function() {
    //             if (!menuActive) {
    //                 openMenu(menu);
    //             }
    //             menu.css("background-color", "red");
    //             fsOverlay.css('pointer-events', 'auto');
    //             if ($('.menu_item').length) {
    //                 var items = document.getElementsByClassName('menu_item');
    //                 console.log(items);
    //                 for (let i = 0; i < items.length; i++) {
    //                     var has = items[i].classList.contains("has-children");
    //                     console.log(has);
    //                     if (items[i].classList.contains("has-children")) {
    //                         items[i].onclick = function() {
    //                             this.classList.toggle("active");
    //                             var panel = this.children[1];
    //                             if (panel.style.maxHeight) {
    //                                 panel.style.maxHeight = null;
    //                             } else {
    //                                 panel.style.maxHeight = panel.scrollHeight + "px";
    //                             }
    //                         }
    //                     }
    //                 }
    //             }

    //             //1 Show togger navbar

    //         });



    //     }


    // };

    initFavorite = function() {
        if ($('.favorite').length) {

            var favs = $('.favorite');

            favs.each(function() {
                var fav = $(this);
                var active = false;
                if (fav.hasClass('active')) {
                    active = true;
                }
                fav.on('click', function() {
                    if (active) {
                        fav.removeClass('active');
                        active = false;
                    } else {
                        fav.addClass('active');
                        active = true;
                    }
                });
            });
        }
    };

    initProductFilter = function() {
        if ($('.grid_sorting_button').length) {
            $('.grid_sorting_button').on('click', function() {
                $('.grid_sorting_button.active').removeClass('active');
                $(this).addClass('active');

                var selector = $(this).attr('data-filter');
                console.log("Filter: ", selector);
                //Use https://isotope.metafizzy.co/
                // $('.product-grid').isotope({
                //     filter: selector,
                //     animationOptions: {
                //         duration: 750,
                //         easing: 'linear',
                //         queue: false
                //     }
                // });
                return false;
            });
        }
    };

    initSlider = function() {

        if ($('.product_slider_container').length) {

            var slider1 = $('.product_slider');
            slider1.owlCarousel({
                loop: false,
                dots: false,
                nav: false,
                responsive: {
                    0: { items: 1 },
                    480: { items: 2 },
                    768: { items: 3 },
                    991: { items: 4 },
                    1280: { items: 5 },
                    1440: { items: 6 },
                }
            });

            if ($('.product_slider_nav_left').length) {
                $('.product_slider_nav_left').on('click', function() {
                    slider1.trigger('prev.owl.carousel');
                });
            }

            if ($('.product_slider_nav_right').length) {
                $('.product_slider_nav_right').on('click', function() {
                    slider1.trigger('next.owl.carousel');
                });
            }
        }

    };

    initLoadMore = function() {

        //pageSize
        // $(".product-grid .product-item").slice(0, 5).show();

        // $("#loadmore").on("click", function() {
        //     $(".product-grid .product-item:hidden").slice(0, 2).slideDown();
        //     if ($(".product-grid .product-item:hidden").length == 0) {
        //         $("#loadmore").fadeOut("slow");
        //     }
        // });


        //B1. Hiển thị tổng 5 cái trên tổng số item
        // var start = 0;
        // var pageSize = 5;

        // var items = $('.product-grid .product-item');
        // $(items).slice(start, pageSize).show().css("display", "block");
        //Xử lý sự kiện load More
        //B1.lấy tổng số lượng item sp
        //B2.Khi nhấn buton loadMore, tăng thêm 5 đơn vị
        //B3. Hiển thị button showLess
        //B4. Nếu nhấn button loadMore, không còn item sp thì sẽ show message, ngược lại vẫn tăng thêm 5 đơn vị sản phẩm
        //B5. Nếu nhấn button showLess, trừ 5 đơn vị sản phẩm, nếu sản phẩm hiển thị bằng 5 thì ẩn nút showLess.
        // $('#loadmore').on('click', function() {
        //     //B1. Tổng số Item
        //     let sumItem = $('.product-grid .product-item').length;
        //     let value = (sumItem - (pageSize + pageSize));
        //     console.log(value);
        //     let checkItem = (sumItem - (pageSize + pageSize)) >= 0 ? true : false;
        //     //nếu bằng true, còn sản phẩm để show
        //     if (checkItem) {

        //         //B2.
        //         $(items).slice(pageSize, (pageSize + 5)).show().css("display", "block");
        //         //B3. show showless
        //         $('#showLess').css("display", "block");   
        //     } else {
        //     //ngược lại, hiển thị thông báo hết sản phẩm để show
        //         alert('Không còn sản phẩm để hiển thị');
        //     }


        // });

        // //
        // $('#showLess').on('click', function() {

        // });
        // $('#loadmore').on('click', function() {
        //     var length = $('.product-grid .product-item').length;
        //     if (length > 5) {

        //         const elementList = [...document.querySelectorAll('.product-grid .product-item')];
        //         console.log(elementList);
        //         for (let i = 5; i <= length; i++)
        //         {
        //             if (elementList[i]) {
        //                // console.log('block');
        //             //    elementList[i].style.display = 'block';
        //             }
        //         }

        //     } else {
        //         console.log(length);
        //     }

        // });
        // var pageSize = 5;
        // var length = $('.product-grid .product-item').length;
        //  $('.product-grid .product-item:lt('+pageSize+')').show();

        // $('.product-grid .product-item:lt('+pageSize+')').show("quickly", function(){
        //     const elementList = [...document.querySelectorAll('.product-grid .product-item')];
        //     for (let i = 0; i <= pageSize; i++)
        //         {
        //             if (elementList[i]) {
        //                // console.log('block');
        //                elementList[i].style.display = 'block';
        //             }
        //         }
        // });


    };


    return init();
};
//Template literals, generic list