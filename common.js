$(document).ready(function(){
    $('.js-open-invitation').on("click", function () {
        $('.js-invitation').addClass('is-hide');
        $('.js-invitation-detail').addClass('is-show');
    });

    $('.js-close-invitation').on("click", function () {
        $('.js-invitation').removeClass('is-hide');
        $('.js-invitation-detail').removeClass('is-show');
    });
});