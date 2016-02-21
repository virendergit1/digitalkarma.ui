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
 * When doing some heavy processing of your own (for example using fnOpen with
 * data loading from the server) it can be useful to make use of the
 * 'processing' indicator built-into DataTables. This plug-in function exposes
 * the internal DataTables function so it can be used for exactly this.
 *
 *  @name fnProcessingIndicator
 *  @summary Show and hide the DataTables processing element through the API.
 *  @author Allan Chappell
 *
 *  @param {boolean} [onoff=true] Show (`true`) or hide (`false`) the processing
 *    element.
 *
 *  @example
 *    var table = $('#example').dataTable();
 *    table.fnProcessingIndicator();      // On
 *    table.fnProcessingIndicator(false); // Off
 */

jQuery.fn.dataTableExt.oApi.fnProcessingIndicator = function ( oSettings, onoff )
{
	if ( onoff === undefined ) {
		onoff = true;
	}
	this.oApi._fnProcessingDisplay( oSettings, onoff );
};
