window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    function anim(duration = 1000) {
		let temp;
		return function(sel) {
			let start = performance.now();
			let from = window.pageYOffset || document.documentElement.scrollTop,
			to = document.querySelector(sel).getBoundingClientRect().top;
			requestAnimationFrame(function step(timestamp) {
				let progress = (timestamp - start) / duration;
				
				if(progress >= 1) {
					progress = 1;
				} else {
					temp = requestAnimationFrame(step);
				}
				window.scrollTo(0, from + to * progress | 0);
				// 1 <= progress && (progress = 1);
				// window.scrollTo(0, from + to * progress | 0);
				// 1 > progress && (temp = requestAnimationFrame(step))
			}) 
			cancelAnimationFrame(temp);
		}
	};

	function runScroll(selector, func) {
		document.querySelector(`a[href="${selector}"]`).addEventListener('click', (e) => {
			e.preventDefault();
			func(selector);
		});
	};

    let scroll = anim();
    let scrollSlow = anim(2000);

	runScroll('#last', scroll);
	runScroll('#first', scrollSlow);
});