
import { store, useCommand } from '@wordpress/commands';
import { dispatch, useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { settings, search, comment, button } from '@wordpress/icons';
import { registerPlugin } from '@wordpress/plugins';

// Adds a link to the Gutenberg Experiments screen in the admin.
// Also shows using the `site-editor` context.
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

// Toggles discussion panel in the core post editor.
if ( undefined !== wp.editPost ) {
	registerPlugin( 'dev-blog-command-palette', {
		render: () => {
			// Determine if the discussion panel is enabled.
			const discussionPanelEnabled = useSelect( ( select ) => {
				return select( 'core/edit-post' ).isEditorPanelEnabled( 
					'discussion-panel' 
				);
			}, [] );

			// Get functions for toggling panels and creating snackbars.
			const { toggleEditorPanelEnabled } = useDispatch( 'core/edit-post' );
			const { createInfoNotice }         = useDispatch( 'core/notices'   );

			// Register command to toggle discussion panel.
			useCommand( {
				name:  'dev-blog/discussion-show-hide',
				label: discussionPanelEnabled
				       ? __( 'Hide discussion panel', 'dev-blog' ) 
				       : __( 'Show discussion panel', 'dev-blog' ),
				icon:  comment,
				callback: ( { close } ) => {
					// Toggle the discussion panel.
					toggleEditorPanelEnabled( 'discussion-panel' );
					
					// Add a snackbar notice.
					createInfoNotice(
						discussionPanelEnabled
						? __( 'Discussion panel hidden.', 'dev-blog' )
						: __( 'Discussion panel displayed.', 'dev-blog' ),
						{
							id:   'dev-blog/toggle-discussion/notice',
							type: 'snackbar'
						}
					);
		
					close();
				}
			} );
		}
	} );
}

/*
// Toggles Discussion panel in the post editor. Checks if we're editing a post 
// via `wp.editPost` before registering the command.
if ( undefined !== wp.editPost ) {
	dispatch( store ).registerCommand( {
		name:  'dev-blog/discussion-panel',
		label: __( 'Toggle discussion panel', 'dev-blog' ),
		icon:  comment,
		callback: ( { close } ) => {
			dispatch( 'core/edit-post' ).toggleEditorPanelEnabled(
				'discussion-panel'
			);
			close();
		}
	} );
}
/**/

// Toggles Button/Icon Labels in the site and post editors.
dispatch( store ).registerCommand( {
	name:  'dev-blog/toggle-button-labels',
	label: __( 'Toggle Button Labels', 'dev-blog' ),
	icon:  button,
	callback: ( { close } ) => {

		// Toggles preference for site editor.
		if ( undefined !== wp.editSite ) {
			dispatch( 'core/preferences' ).toggle(
				'core/edit-site',
				'showIconLabels'
			);
		}

		// Toggles preference for post editor.
		else if ( undefined !== wp.editPost ) {
			dispatch( 'core/preferences' ).toggle(
				'core/edit-post',
				'showIconLabels'
			);
		}

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
