$(document).ready(function(){
    
    /*---For toggling Blog Posts---*/
        function toggleRead() {
            $('#show-this-on-click').slideDown();
            $('.readless').show();
            $('.readmore').hide();
            
        }; 
        function toggleLess() {
            $('.readmore').show();
            $('#show-this-on-click').hide();
            $('.readless').hide();
        };
        $('.readmore').click(toggleRead);
        $('.readless').click(toggleLess);
    
    /*---For toggling Sidebar---*/
        function toggleLearnMore() {
            $('#learnmoretext').slideDown();
            $('.learnmore').hide();
            $('.less').show();
        };
        
        function toggleLearnLess() {
            $('#learnmoretext').hide();
            $('.learnmore').show();
            $('.less').hide();
        };
        $('.learnmore').click(toggleLearnMore);
        $('.less').click(toggleLearnLess);    
});      

       
            
            
            
            
            
        
        
        
        
        











