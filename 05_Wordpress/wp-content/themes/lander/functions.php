<?php
/**
 * function file for Lander slide
 */

 function lander_scripts(){
	 if (is_front_page()){
		wp_enqueue_style('lander-style.css', get_stylesheet_directory_uri() . '/lander-style.css');
    wp_enqueue_script( 'lander_scripts', get_stylesheet_directory_uri() . '/js/lander_scripts.js', array('jquery'), '20160209', false);

	 }
 }

 function exclude_testimonials( $query ) {
    if ( !$query->is_category('Testimonial') && $query->is_main_query() ) {
        $query->set( 'cat', '-4' ); // category id
    }
}
add_action( 'pre_get_posts', 'exclude_testimonials' );

 add_action('wp_enqueue_scripts', 'lander_scripts');

 add_image_size('testimonial-mug', 253, 253, true);
