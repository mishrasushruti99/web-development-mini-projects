<?php
/**
 * Custome Template for one page stye
 */

get_header(); ?>
<?php
	global $more;
	$more = 0;
?>

	<div id="primary" class="content-area lander-page">
		<main id="main" class="site-main" role="main">

			<section id="testimonials">
				<div class="indent">
					<?php
						$args = array(
							'posts_per_page' => 3,
							'orderby' => 'rand',
							'category_name' => 'Testimonial' //testimonials
						);

						$query = new WP_Query( $args );
						// The Loop
						if ( $query->have_posts() ) {
							echo '<ul class="testimonials">';
							while ( $query->have_posts() ) {
								$query->the_post();
								$more = 0;
								echo '<li class="clear">';
								echo '<figure class="testimonial-thumb">';
								the_post_thumbnail('testimonial-mug');
								echo '</figure>';
								echo '<aside class="testimonial-text">';
								echo '<h3 class="testimonial-name">' . get_the_title() . '</h3>';
								echo '<div class="testimonial-excerpt">';
								//the_content('');
								the_excerpt();
								echo '</div>';
								echo '</aside>';
								echo '</li>';
							}
							echo '</ul>';
						}

						/* Restore original Post Data */
						wp_reset_postdata();
				?>
				</div>
			</section>
			<section id="services">
				<div class="indent">
					<?php
					$query = new WP_Query( 'pagename=services' );
					$services_id = $query->queried_object->ID;

					// The Loop
					if ( $query->have_posts() ) {
						while ( $query->have_posts() ) {
							$query->the_post();
							$more = 0;
							echo '<h2 class="section-title">' . get_the_title() . '</h2>';
							echo '<div class="entry-content">';
							the_content('');
							echo '</div>';
						}
					}

					/* Restore original Post Data */
					wp_reset_postdata();

					$args = array(
						'post_type' => 'page',
						'post_parent' => $services_id
					);
					$services_query = new WP_Query( $args );

					// The Loop
					if ( $services_query->have_posts() ) {

						echo '<ul class="services-list">';
						while ( $services_query->have_posts() ) {
							$services_query->the_post();
							$more = 0;
							echo '<li class="clear">';
							echo '<a href="' . get_permalink() . '" title="Learn more about ' . get_the_title() . '">';
							echo '<h3 class="services-title">' . get_the_title() . '</h3>';
							echo '</a>';
							echo '<div class="services-lede">';

							the_content('Read more');
							echo '</div>';
							echo '</li>';
						}
						echo '</ul>';
					}

					/* Restore original Post Data */
					wp_reset_postdata();
				?>
				</div>
			</section>

			<section id="meet">
				<div class="indent">
					<?php
					$query = new WP_Query( 'pagename=about-us' );
					// The Loop
					if ( $query->have_posts() ) {
						while ( $query->have_posts() ) {
							$query->the_post();
							echo '<h2 class="section-title">' . get_the_title() . '</h2>';
							echo '<div class="entry-content">';
							the_content();
							echo '</div>';
						}
					}



					/* Restore original Post Data */
					wp_reset_postdata();
					?>
				</div>
			</section>

			<section id="contact">
				<div class="indent">
					<?php
					$query = new WP_Query( 'pagename=contact' );
					// The Loop
					if ( $query->have_posts() ) {
						while ( $query->have_posts() ) {
							$query->the_post();
							echo '<h2 class="section-title">' . get_the_title() . '</h2>';
							echo '<div class="entry-content">';
							the_content();
							echo '</div>';
						}
					}

					/* Restore original Post Data */
					wp_reset_postdata();
					?>
				</div>
			</section>

			<section id="call-to-action">
				<div class="indent">
				<?php
					$query = new WP_query('pagename=call-to-action');
					// the loop
					if($query->have_posts()){
						while($query->have_posts()){
							$query->the_post();
							echo '<div class="entry-content">';
							the_content();
							echo '</div>';
						}
					}
					wp_reset_postdata();
				?>
				</div>
			</section>
		</main><!-- #main -->
	</div><!-- #primary -->


<?php get_footer(); ?>
