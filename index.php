<?php
/**
 * Plugin Name:       Dev Blog: Command Palette API
 * Plugin URI:        https://developer.wordpress.org/news/
 * Description:       Showcases examples of adding static commands via the Command Palette API.
 * Version:           1.0.0
 * Requires at least: 6.4
 * Requires PHP:      7.4
 * Author:            WordPress Developer Blog
 * Author URI:        https://developer.wordpress.org/news/
 * Text Domain:       dev-blog
 */

add_action( 'enqueue_block_editor_assets', 'devblog_command_api_editor_assets' );

function devblog_command_api_editor_assets() {
	$asset_file = trailingslashit( __DIR__ ) . 'build/index.asset.php';

	if ( file_exists( $asset_file ) ) {
		$asset = include $asset_file;

		wp_enqueue_script(
			'devblog-command-api',
			trailingslashit( plugin_dir_url( __FILE__ ) ) . 'build/index.js',
			$asset['dependencies'],
			$asset['version'],
			true
		);
	}
}
