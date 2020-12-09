# smooth_scroll
# To use smooth scrolling of your page
add in HTML file trigger <a href='#someId'>Go to id</a> and element with id='someId'; 
in .js file call function runScroll('#someId', scroll);
Animation duration by default is 1 second.
To set another animation time create new variable and assing value anim(animation duration in ms)
For example let scrollSlow = anim(2000);
