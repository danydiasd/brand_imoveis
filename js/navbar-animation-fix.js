$('#collapse-navbar').on(' shown.bs.collapse', function(){
       $('.dase-banner-top').css('transform', 'translate(-50%, 10%)'); 
});
$('#collapse-navbar').on('hidden.bs.collapse', function(){
    $('.dase-banner-top').css('transform', 'translate(-50%,-50%)'); 
});