$(document).ready(function(){	
	$(".sign_up_btn").click(function(){
        $("#sign_up").addClass("block_bx")
        $("#login").removeClass("block_bx");
    });
    $(".login_btn").click(function(){
        $("#sign_up").removeClass("block_bx");
        $("#login").addClass("block_bx")
    });
// tab add class active start js
    $( '.tab_btn li' ).on( 'click', function() {
            $( this ).parent().find( 'li.active' ).removeClass( 'active' );
            $( this ).addClass( 'active' );
      });

});

