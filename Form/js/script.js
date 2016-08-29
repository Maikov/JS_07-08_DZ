$(function () {
    
    var inputs = $('fieldset input');
    var tips;

    $(inputs).hover(
        function () {

            $('.tips').remove();
            tips = $(this).attr('title');
            $(this).removeAttr('title');
            $('<p class=' + 'tips'+ '>' + tips + '</p>').insertAfter(this);
        },

        function () {
     
            $(this).attr('title', tips);
            $('.tips').remove();
    });


     $(inputs).keyup(
     function (event) {
         if (event.which == 9) {
         $('.tips').remove();
         tips = $(this).attr('title');
         $(this).removeAttr('title');
         $('<p class=' + 'tips'+ '>' + tips + '</p>').insertAfter(this);
         
        }
     }),

     function () {

       $(this).attr('title', tips);
       $('.tips').remove();
          
 	 }

    $('.help').on('click', function () {
     
            $('.tips').remove();
            inputs.each(function () {
            tips = $(this).attr('title');
            $('<p class=' + 'tips' + '>' + tips + '</p>').insertAfter(this);
        });
    });
});