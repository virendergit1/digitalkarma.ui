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
 * This plug-in will take a `dt-tag tr` element and alter the table's paging
 * to make that `dt-tag tr` element (i.e. that row) visible.
 *
 *  @name fnDisplayRow
 *  @summary Shift the table's paging to display a given `dt-tag tr` element
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *
 *  @param {node} nRow Row to display
 *
 *  @example
 *    // Display the 21st row in the table
 *    var table = $('#example').dataTable();
 *    table.fnDisplayRow( table.fnGetNodes()[20] );
 */

jQuery.fn.dataTableExt.oApi.fnDisplayRow = function ( oSettings, nRow )
{
	// Account for the "display" all case - row is already displayed
	if ( oSettings._iDisplayLength == -1 )
	{
		return;
	}

	// Find the node in the table
	var iPos = -1;
	for( var i=0, iLen=oSettings.aiDisplay.length ; i<iLen ; i++ )
	{
		if( oSettings.aoData[ oSettings.aiDisplay[i] ].nTr == nRow )
		{
			iPos = i;
			break;
		}
	}

	// Alter the start point of the paging display
	if( iPos >= 0 )
	{
		oSettings._iDisplayStart = ( Math.floor(i / oSettings._iDisplayLength) ) * oSettings._iDisplayLength;
		if ( this.oApi._fnCalculateEnd ) {
			this.oApi._fnCalculateEnd( oSettings );
		}
	}

	this.oApi._fnDraw( oSettings );
};
