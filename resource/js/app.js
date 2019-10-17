
// document.addEventListener('DOMContentLoaded', function () {
//     const listTab = document.querySelectorAll(".tab-slider--nav li");
//     const content = document.querySelectorAll(".tab-slider--body");

//     content.forEach(element => {
//         element.style.display = "none";
//     });
//     document.querySelectorAll(".tab-slider--body")[0].style.display = "block";

//     toggleTab(listTab, content);
// });

// const toggleTab = (listTab, content) => {
//     listTab.forEach(singleTab => {
//         singleTab.addEventListener("click", function () {
//             content.forEach(body => {
//                 body.style.display= "none";
//             });
//             let activeTab = singleTab.attributes.rel.value;
//             //cho content vao`
//             document.getElementById(activeTab).style.display = "block";            
//             if (activeTab === "sap-chieu") {
//                 document.querySelector('.tab-slider--tabs').classList.add('slide');
//             } else {
//                 document.querySelector('.tab-slider--tabs').classList.remove('slide');
//             }
//             listTab.forEach(tab => {
//                 tab.classList.remove('active');
//             });
//             this.classList.add('active');
//         })
//     });
// }

$("document").ready(function () {
    // khởi tạo slick
    initSlick();
    trailerBox();
    initSelectize();
    $('#sap-chieu').hide();
    hoverMobieBlock();
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabcontent[0].style.display = "block";
    tablinks = document.getElementsByClassName("tablinks");
    tablinks[0].classList.add('active');    

});

// ĐÓNG MỞ BOX TRAILER

function trailerBox() {
    $('.box-trailer').click(function (e) {
        e.preventDefault();
        $('.modal-box-trailer').show();
    });

    // var span = $('.close')[0];

    $('.close').click(function () {
        $('.modal-box-trailer').hide();
    })

}

function hoverMobieBlock() {
    $('.movie-block').hover(function (e) {
        // console.log($(this).find('.info-detail'));
        $(this).find('.info-detail').toggleClass('hoverHide');
        $(this).find('.movie-block-hover').toggleClass('hoverShow');
        $(this).find('.thumbnail img').toggleClass('blurImg');
    });
}

// MOVIE TAB

$(".tab-slider--nav li").click(function () {
    $('.slick-bla').slick('refresh');
    $(".tab-slider--body").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).show();
    if ($(this).attr("rel") == "sap-chieu") {
        $('.tab-slider--tabs').addClass('slide');
        $('#sap-chieu').removeClass('inactive')
        $('#sap-chieu').addClass('active')
    } else {
        $('.tab-slider--tabs').removeClass('slide');
    }
    $(".tab-slider--nav li").removeClass("active");
    $(this).addClass("active");
    hoverMobieBlock();
});

// KHỞI TẠO SLICK
function initSlick() {
    $('.slick-bla').slick({
        dots: true,
        infinite: false,
        arrow: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4
    });
    $('.carousel').slick({
        dots: false,
        arrow: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="prevCarousel"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="nextCarousel"><i class="fas fa-chevron-right"></i></button>'
    });
}

function initSelectize() {
    $('#select-beast').selectize({
        create: true,
        sortField: {
            field: 'text',
            direction: 'asc'
        },
        dropdownParent: 'body'
    });
}