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
 * When DataTables removes columns from the display (`bVisible` or
 * `fnSetColumnVis`) it removes these elements from the DOM, effecting the index
 * value for the column positions. This function converts the data column index
 * (i.e. all columns regardless of visibility) into a visible column index.
 *
 * DataTables 1.10+ has this ability built-in through the
 * `dt-api column.index()` method. As such this method is marked deprecated, but
 * is available for use with legacy version of DataTables.
 *
 *  @name fnColumnIndexToVisible
 *  @summary Convert a column data index to a visible index.
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *  @deprecated
 *
 *  @param {integer} iMatch Column data index to convert to visible index
 *  @returns {integer} Visible column index
 *
 *  @example
 *    var table = $('#example').dataTable( {
 *      aoColumnDefs: [
 *        { bVisible: false, aTargets: [1] }
 *      ]
 *    } );
 *
 *    // This will show 1
 *    alert( 'Column 2 visible index: '+table.fnColumnIndexToVisible(2) );
 */

jQuery.fn.dataTableExt.oApi.fnColumnIndexToVisible = function ( oSettings, iMatch )
{
	return oSettings.oApi._fnColumnIndexToVisible( oSettings, iMatch );
};
