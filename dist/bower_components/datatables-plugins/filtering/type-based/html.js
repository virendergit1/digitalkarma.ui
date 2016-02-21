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
 * DataTables has a built in type called `html` which will strip HTML tags 
 * from a search string, but it doesn't cope with nested HTML inside another 
 * element's attributes (for example DOM0 events with have HTML in them). This
 * plug-in function overrules the built-in method and provides complete HTML
 * tag removal.
 * 
 * Note that this function is not included in DataTables by
 * default because it is slightly slower than the built-in method, which is
 * good enough for by far the majority of use cases.
 *
 *  @summary Strip HTML using DOM methods
 *  @name html
 *  @author _guillimon_
 *
 *  @example
 *    $(document).ready(function() {
 *        $('#example').dataTable({
 *            "columnDefs": [
 *                { type: "html", target: 0 }
 *            ]
 *        });
 *    } );
 */

(function () {

var _div = document.createElement('div');

jQuery.fn.dataTable.ext.type.search.html = function ( data ) {
	_div.innerHTML = data;

	return _div.textContent ?
		_div.textContent.replace(/\n/g," ") :
		_div.innerText.replace(/\n/g," ");
};

})();
