a_tags = document.querySelectorAll('.navbbar a')

for(var i=0;i<a_tags.length;i++)
{    
    a_tags[i].addEventListener('click', function(e) {
        for(var j=0;j<a_tags.length;j++){
            if( i != j){
                a_tags[j].classList.remove('active');
            }
        }
        this.classList.add('active');
    });
}