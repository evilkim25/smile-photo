// 判斷在哪一頁，改變導覽列的背景顏色
$(function() {
    var currentUri = window.location.pathname;

    $('a[href="' + currentUri + '"]').parent().addClass('active');
});