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
 * Telephone numbers are a common data point to display in HTML tables, and are
 * often formatted (e.g. `dt-string 555-1234`). Typically, when searching a
 * table a user would need to enter the number in exactly the same format it is
 * displayed in, but this is not always convenient (e.g. you might search for
 * `dt-string 5551`).
 *
 * This filtering plug-in will allow both forms to be matched be providing both
 * the formatted and de-formatted data to the table's search.
 * 
 *  @summary Make phone numbers searchable formatted or unformatted
 *  @name Phone number
 *  @author Allan Jardine
 *
 *  @example
 *    $(document).ready(function() {
 *      $('#example').dataTable( {
 *        columnDefs: [
 *          { type: 'phoneNumber', target: 4 }
 *        ]
 *      } );
 *    } );
 */

jQuery.fn.DataTable.ext.type.search.phoneNumber = function ( data ) {
    return ! data ?
        '' :
        typeof data === 'string' ?
            data + data.replace(/[ \-]/g, '') :
            data;
};
