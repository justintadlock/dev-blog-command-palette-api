
import { store }    from '@wordpress/commands';
import { dispatch } from '@wordpress/data';
import { __ }       from '@wordpress/i18n';
import { settings, search, comment, button } from '@wordpress/icons';

// Adds a link to the Gutenberg Experiments screen in the admin.
dispatch( store ).registerCommand( {
	name:  'dev-blog/gutenberg-experiments',
	label: __( 'Gutenberg Experiments', 'dev-blog' ),
	icon:  settings,
	context: 'site-editor',
	callback: ( { close } ) => {
		document.location.href = 'admin.php?page=gutenberg-experiments';
		close();
	}
} );

// Adds a link to the Gutenberg Demo screen in the admin.
dispatch( store ).registerCommand( {
	name:  'dev-blog/gutenberg-demo',
	label: __( 'Gutenberg Demo', 'dev-blog' ),
	icon:  search,
	callback: ( { close } ) => {
		document.location.href = 'admin.php?page=gutenberg';
		close();
	}
} );

// Toggles Discussion panel in the post editor.
// Is there a way to only show this command for the post editor?
dispatch( store ).registerCommand( {
	name:  'dev-blog/discussion-panel',
	label: __( 'Toggle Discussion Panel', 'dev-blog' ),
	icon:  comment,
	context: 'post-editor', // Not an available context.
	callback: ( { close } ) => {
		dispatch( 'core/edit-post' ).toggleEditorPanelEnabled(
			'discussion-panel'
		);
		close();
	}
} );

// Toggles Button/Icon Labels in the site and post editors.
dispatch( store ).registerCommand( {
	name:  'dev-blog/toggle-button-labels',
	label: __( 'Toggle Button Labels', 'dev-blog' ),
	icon:  button,
	context: 'site-editor-edit',
	callback: ( { close } ) => {
		// Is there a way to contextually determine whether we are
		// in the site or post editor?

		// Toggles preference for site editor.
		dispatch( 'core/preferences' ).toggle(
			'core/edit-site',
			'showIconLabels'
		);

		// Toggles preference for post editor.
		dispatch( 'core/preferences' ).toggle(
			'core/edit-post',
			'showIconLabels'
		);

		close();
	}
} );

/*
name: action.name,
label: action.label, // command label
searchLabel: action.searchLabel, // used when searching
context: action.context,
callback: action.callback,
icon: action.icon,
*/
