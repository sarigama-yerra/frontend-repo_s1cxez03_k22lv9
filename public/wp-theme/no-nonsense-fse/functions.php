<?php
/**
 * No‑Nonsense FSE theme functions
 */
if (!defined('NONONSENSE_VERSION')) {
    define('NONONSENSE_VERSION', '1.0.0');
}

add_action('after_setup_theme', function () {
    // Ondersteuning voor block styles & editor styles
    add_theme_support('wp-block-styles');
    add_theme_support('editor-styles');
    add_editor_style('style.css');

    // Register nav menu
    register_nav_menus([
        'primary' => __('Hoofdmenu', 'nononsense'),
    ]);
});

// Enqueue front-end assets (Spline viewer)
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('nononsense-style', get_stylesheet_uri(), [], NONONSENSE_VERSION);
    wp_enqueue_script('spline-viewer', 'https://unpkg.com/@splinetool/viewer/build/spline-viewer.js', [], NONONSENSE_VERSION, true);
});

// Blok patronen laden
add_action('init', function () {
    $patterns_dir = get_theme_file_path('patterns');
    if (!is_dir($patterns_dir)) {
        return;
    }
    $files = glob($patterns_dir . '/*.php');
    foreach ($files as $file) {
        register_block_pattern_from_file('nononsense/' . basename($file, '.php'), $file);
    }
});
