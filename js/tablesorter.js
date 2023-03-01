(function($) {
  'use strict';
  $(function() {
    if ($('#sortable-table-1').length) {
      $('#sortable-table-1').tablesort();
    }
    if ($('#sortable-table-2').length) {
      $('#sortable-table-2').tablesort();
    }
  });
  $("#allbtn").click(function(){
    $(this).addClass("transaction-active");
    $("#successbtn, #pendingbtn, #failedbtn").removeClass("transaction-active");
    $("#all").removeClass("transaction-table-hide");
    $("#all").addClass("transaction-table-display, transaction-active");
    $("#successful, #pending, #failed").addClass("transaction-table-hide");
  });
  $("#successbtn").click(function(){
    $(this).addClass("transaction-active");
    $("#allbtn, #pendingbtn, #failedbtn").removeClass("transaction-active");
    $("#successful").removeClass("transaction-table-hide");
    $("#successful").addClass("transaction-table-display");
    $("#all, #pending, #failed").addClass("transaction-table-hide");
  });
  $("#pendingbtn").click(function(){
    $(this).addClass("transaction-active");
    $("#allbtn, #successbtn, #failedbtn").removeClass("transaction-active");
    $("#pending").removeClass("transaction-table-hide");
    $("#pending").addClass("transaction-table-display");
    $("#all, #successful, #failed").addClass("transaction-table-hide");
  });
  $("#failedbtn").click(function(){
    $(this).addClass("transaction-active");
    $("#allbtn, #successbtn, #pendingbtn").removeClass("transaction-active");
    $("#failed").removeClass("transaction-table-hide");
    $("#failed").addClass("transaction-table-display");
    $("#all, #successful, #pending").addClass("transaction-table-hide");
  });
})(jQuery);