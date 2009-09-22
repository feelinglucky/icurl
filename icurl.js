// vim: set et sw=4 ts=4 sts=4 fdm=marker ff=unix fenc=utf8 nobomb:
/**
 * iCurl Javascript
 *
 * @author mingcheng<i.feelinglucky@gmail.com>
 * @date   2009-09-22
 * @link   http://www.gracecode.com/
 */

window.addEvent('domready', function() {
    var escapeHTML = function(str) {
		var div = document.createElement('div');
		var text = document.createTextNode(str);
		div.appendChild(text);
		return div.innerHTML;
    };
    var result = $('result').empty();

    /*
    result.addEvent('click', function(e){
        this.select();
        e.stop();
    });
    */

    $('ag').value = navigator.userAgent;

    $('show_extra').addEvent('click', function(e) {
        $('extra')[$('extra').hasClass('hidden') ? 'removeClass' : 'addClass']('hidden');
        e.stop();
    });

    $('a').addEvent('click', function(e) {
        $('auth')[$('auth').hasClass('hidden') ? 'removeClass' : 'addClass']('hidden');
    });

    $('icurl').addEvent('submit', function(e){
        e.stop();

        result.empty().removeClass('hidden').addClass('ajax-loading');
        this.set('send', {
            onComplete: function(response) {
                result.removeClass('ajax-loading').set('html', escapeHTML(response));
            }
        });
        this.send();
    });
});
