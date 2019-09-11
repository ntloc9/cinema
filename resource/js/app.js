
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
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('#sap-chieu').hide();

});

$('.movie-block .thumbnail img').hover(function () {
    console.log("1");
    $('.movie-block .thumbnail .hover button').toggleClass('activeHover');
});

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
});

