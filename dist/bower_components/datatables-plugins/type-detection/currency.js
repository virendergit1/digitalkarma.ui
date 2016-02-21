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
 * This plug-in will add automatic detection for currency columns to 
 * DataTables. Note that only $, £ and € symbols are detected with this code,
 * but it is trivial to add more or change the current ones. This is best used
 * in conjunction with the currency sorting plug-in.
 * 
 * DataTables 1.10+ has currency sorting abilities built-in and will be
 * automatically detected. As such this plug-in is marked as deprecated, but
 * might be useful when working with old versions of DataTables.
 *
 *  @name Currency
 *  @summary Detect data of numeric type with a leading currency symbol.
 *  @deprecated
 *  @author [Allan Jardine](http://sprymedia.co.uk), Nuno Gomes
 */

(function(){

// Change this list to the valid characters you want
var validChars = "$£€c" + "0123456789" + ".-,'";

// Init the regex just once for speed - it is "closure locked"
var
	str = jQuery.fn.dataTableExt.oApi._fnEscapeRegex( validChars ),
	re = new RegExp('[^'+str+']');


jQuery.fn.dataTableExt.aTypes.unshift(
   function ( data )
	{
		if ( typeof data !== 'string' || re.test(data) ) {
			return null;
		}

		return 'currency';
	}
);

}());

