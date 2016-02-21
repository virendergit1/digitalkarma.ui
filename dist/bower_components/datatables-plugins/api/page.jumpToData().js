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
 * It can be quite useful to jump straight to a page which contains a certain
 * piece of data (a user name for example). This plug-in provides exactly that
 * ability, searching for a given data parameter from a given column and
 * immediately shifting the paging of the table to jump to that point.
 *
 * If multiple data points match the requested data, the paging will be shifted
 * to show the first instance. If there are no matches, the paging will not
 * change.
 *
 * Note that unlike the core DataTables API methods, this plug-in will
 * automatically call `dt-api draw()` to redraw the table with the current page
 * shown.
 *
 *  @name page.JumpToData()
 *  @summary Jump to a page by searching for data from a column
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *  @requires DataTables 1.10+
 *
 *  @param {*} data Data to search for
 *  @param {integer} column Column index
 *  @returns {Api} DataTables API instance
 *
 *  @example
 *    var table = $('#example').DataTable();
 *    table.page.jumpToData( "Allan Jardine", 0 );
 */

jQuery.fn.dataTable.Api.register( 'page.jumpToData()', function ( data, column ) {
	var pos = this.column(column, {order:'current'}).data().indexOf( data );

	if ( pos >= 0 ) {
		var page = Math.floor( pos / this.page.info().length );
		this.page( page ).draw( false );
	}

	return this;
} );