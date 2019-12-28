$('.intro-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 500,
	fade: true,
	dots: true,
	arrows: false,
	asNavFor: '.slider-preview'
});
$('.slider-preview').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.intro-slider',
	arrows: true,

	prevArrow:
		'<button type="button" class="slider-preview__button preview-prev">&#xf177;</button>',
	nextArrow:
		'<button type="button" class="slider-preview__button preview-next">&#xf178;</button>'
});
$('.travel-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	prevArrow:
		'<button type="button" class="travel-slider__button travel-prev">&larr;</button>',
	nextArrow:
		'<button type="button" class="travel-slider__button travel-next">&rarr;</button>'
});
