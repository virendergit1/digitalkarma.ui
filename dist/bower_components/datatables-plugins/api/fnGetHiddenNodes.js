/**
 * digitalkarma - 2016/01/28 22:29:23 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:29:00 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:28:08 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:27:18 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:26:56 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:23:59 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:23:10 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:22:03 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:14:19 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:12:47 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:11:34 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:11:20 UTC
*/
/**
 * digitalkarma - 2016/01/28 22:10:20 UTC
*/
/**
 * digitalkarma - 2016/01/28 20:24:36 UTC
*/
/**
 * digitalkarma - 2016/01/28 20:23:30 UTC
*/
/**
 * digitalkarma - 2016/01/28 20:20:05 UTC
*/
/**
 * Get a list of all `dt-tag tr` nodes in the table which are not currently
 * visible (useful for building forms).
 *
 * This function is marked as deprecated as using the `dt-api rows()` method in
 * DataTables 1.10+ is preferred to this approach.
 *
 *  @name fnGetHiddenNodes
 *  @summary Get the `dt-tag tr` elements which are not in the DOM
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *  @deprecated
 *
 *  @example
 *    var table = $('#example').dataTable();
 *    var nodes = table.fnGetHiddenNodes();
 */

jQuery.fn.dataTableExt.oApi.fnGetHiddenNodes = function ( settings )
{
	var nodes;
	var display = jQuery('tbody tr', settings.nTable);

	if ( jQuery.fn.dataTable.versionCheck ) {
		// DataTables 1.10
		var api = new jQuery.fn.dataTable.Api( settings );
		nodes = api.rows().nodes().toArray();
	}
	else {
		// 1.9-
		nodes = this.oApi._fnGetTrNodes( settings );
	}

	/* Remove nodes which are being displayed */
	for ( var i=0 ; i<display.length ; i++ ) {
		var iIndex = jQuery.inArray( display[i], nodes );

		if ( iIndex != -1 ) {
			nodes.splice( iIndex, 1 );
		}
	}

	return nodes;
};
