<?php
/**
 * Plugin Name:       Dev Blog: Command Palette API
 * Plugin URI:        https://developer.wordpress.org/news/
 * Description:       Testing the Command Palette API.
 * Version:           1.0.0
 * Requires at least: 6.4
 * Requires PHP:      7.4
 * Author:            WordPress Developer Blog
 * Author URI:        https://developer.wordpress.org/news/
 * Text Domain:       devblog
 */

namespace DevBlog\CommandPaletteAPI;

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\editor_assets' );

function editor_assets(): void
{
	$asset = include trailingslashit( __DIR__ ) . 'build/index.asset.php';

	wp_enqueue_script(
		'devblog-command-api',
		trailingslashit( plugin_dir_url( __FILE__ ) ) . 'build/index.js',
		$asset['dependencies'],
		$asset['version'],
		true
	);
}
