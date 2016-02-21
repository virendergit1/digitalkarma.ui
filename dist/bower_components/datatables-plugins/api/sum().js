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
 * Fairly simply, this plug-in will take the data from an API result set
 * and sum it, returning the summed value. The data can come from any data
 * source, including column data, cells or rows.
 *
 *  @name sum()
 *  @summary Sum the values in a data set.
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *  @requires DataTables 1.10+
 *
 *  @returns {Number} Summed value
 *
 *  @example
 *    // Simply get the sum of a column
 *    var table = $('#example').DataTable();
 *    table.column( 3 ).data().sum();
 *
 *  @example
 *    // Insert the sum of a column into the columns footer, for the visible
 *    // data on each draw
 *    $('#example').DataTable( {
 *      drawCallback: function () {
 *        var api = this.api();
 *        api.table().footer().to$().html(
 *          api.column( 4, {page:'current'} ).data().sum()
 *        );
 *      }
 *    } );
 */

jQuery.fn.dataTable.Api.register( 'sum()', function () {
	return this.flatten().reduce( function ( a, b ) {
		return (a*1) + (b*1); // cast values in-case they are strings
	} );
} );

