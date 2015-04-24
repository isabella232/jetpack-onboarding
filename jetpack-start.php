<?php
/**
 * Plugin Name: Jetpack Start
 * Plugin URI: https://github.com/automattic/jetpack-start
 * Description: Jetpack Start Wizard.
 * Version: 0.1
 */

defined( 'JETPACK_START_BASE_DIR' )         or define( 'JETPACK_START_BASE_DIR', dirname( __FILE__ ) );
defined( 'JETPACK_START_BASE_URL' )         or define( 'JETPACK_START_BASE_URL', plugins_url( 'jetpack-start', dirname( __FILE__ ) ) );
defined( 'JETPACK_STEP_AUTO_REDIRECT' )     or define( 'JETPACK_STEP_AUTO_REDIRECT', true );
defined( 'JETPACK_STEP_AUTO_REDIRECT_SRC' ) or define( 'JETPACK_STEP_AUTO_REDIRECT_SRC', 'custom_src' );


function jps_start() {
	if (current_user_can_for_blog( get_current_blog_id(), 'switch_themes' ) ) {
		require_once( plugin_dir_path( __FILE__ ) . 'class.jetpack-start-welcome-panel.php' );
		Jetpack_Start_Welcome_Panel::init();
	}
}

add_action( 'init',  'jps_start' );

