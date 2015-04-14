(function($){

   numpad = {
           
       /* When I click a number it gets added to #result
       adding more than 1 number gets concatenated */             
       generateDisplayNumber: function(){         
           
       },       
        
       initialise: function(){
           
           var instance = this;
           
           //Cache Selectors
           instance.selectors = {};
           instance.selectors.numpad = $('#numpad');
           instance.selectors.clearData = $('#clear');
           instance.selectors.numberDigits = instance.selectors.numpad.children('.num');
           instance.selectors.submit = $('#enter');
           
           //Flags
           instance.flags = {};
           
           //Click Handlers
           instance.selectors.numberDigits.on('fastclick', function(e){
            
            //Get clicked data-id
            var clickedNumber = $(this).data('id');
            
            instance.generateDisplayNumber();
            e.preventDefault();                   
           });
           
       } // .initialise       
    } // .numpad
    
    
    numpad.initialise();
    
}(jQuery));
    
    
    $(document).ready(function(){
       
        var total = 0;
        var arr = [];
        
        //Testing
        $('#numpad').children('.num').on('fastclick', function(e){
         
         var clickedNumber = $(this).data('id');
         arr.push(clickedNumber);
            
            console.log( arr.join('') );
         
            
         $('#result').html(arr.join(''));
         
        
         e.preventDefault();
        });
        
        
    });