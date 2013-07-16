/*! BYU-Templates - v2.0.0  */

function getWidth() {
    var w = jQuery(window).width();
    return log(w), w
}

function activateMenus() {
    jQuery("#search-menu").delegate(".menu-button", "click", function (e) {
        e.stopPropagation(), e.preventDefault(), jQuery("body").toggleClass("sideNav")
    }), jQuery("nav li:has(.mega, .sub) > a").click(function (e) {
        e.preventDefault();
        var li = $(this).parent();
        return li.hasClass("hover") && clickOpened ? li.removeClass("hover") : (li.addClass("hover"), $("nav li").not(li).removeClass("hover"), clickOpened = !0), !1
    }), jQuery("nav li:has(.mega, .sub)").click(function (e) {
        e.stopPropagation()
    }), jQuery("nav.no-js").removeClass("no-js"), jQuery("nav li .sub").each(function () {
        var mega = $(this),
            left = mega.parent().position().left;
        left > mega.parent().parent().outerWidth() - mega.outerWidth() && mega.css("right", 0)
    }), jQuery(window).resize(function () {
        $(window).width() > 768 && $("body").removeClass("sideNav")
    })
}

function hideSearch() {
    jQuery("#basic-search").hide()
}

function loadSearch() {
    log("Load search"), window.__gcse = {
        callback: hideSearch
    },
    function () {
        var cx = "009932716493032633443:hlqjz33kfkc",
        gcse = document.createElement("script");
        gcse.type = "text/javascript", 
		gcse.async = !0,
		gcse.src = ("https:" == document.location.protocol ? "https:" : "http:") + "//www.google.com/cse/cse.js?cx=" + cx;
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(gcse, s),
	}()
}

function setupNavPosition() {}

function rollOver() {
    $(this).hasClass("hover") || (clickOpened = !1, $(this).addClass("hover"), $("nav li").not(this).removeClass("hover"), $(document).click(hideAllMenus))
}

function rollOut() {
    $(this).removeClass("hover")
}

function hideAllMenus() {
    $("nav li").removeClass("hover"), $(document).unbind("click")
}

function endsWith(str, suffix) {
    return -1 !== str.indexOf(suffix, str.length - suffix.length)
}! function ($) {
    "use strict";

    function clearMenus() {
        $(".dropdown-backdrop").remove(), $(toggle).each(function () {
            getParent($(this)).removeClass("open")
        })
    }

    function getParent($this) {
        var $parent, selector = $this.attr("data-target");
        return selector || (selector = $this.attr("href"), selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, "")), $parent = selector && $(selector), $parent && $parent.length || ($parent = $this.parent()), $parent
    }
    var toggle = "[data-toggle=dropdown]",
        Dropdown = function (element) {
            var $el = $(element).on("click.dropdown.data-api", this.toggle);
            $("html").on("click.dropdown.data-api", function () {
                $el.parent().removeClass("open")
            })
        };
    Dropdown.prototype = {
        constructor: Dropdown,
        toggle: function () {
            var $parent, isActive, $this = $(this);
            if (!$this.is(".disabled, :disabled")) return $parent = getParent($this), isActive = $parent.hasClass("open"), clearMenus(), isActive || ("ontouchstart" in document.documentElement && $('<div class="dropdown-backdrop"/>').insertBefore($(this)).on("click", clearMenus), $parent.toggleClass("open")), $this.focus(), !1
        },
        keydown: function (e) {
            var $this, $items, $parent, isActive, index;
            if (/(38|40|27)/.test(e.keyCode) && ($this = $(this), e.preventDefault(), e.stopPropagation(), !$this.is(".disabled, :disabled"))) {
                if ($parent = getParent($this), isActive = $parent.hasClass("open"), !isActive || isActive && 27 == e.keyCode) return 27 == e.which && $parent.find(toggle).focus(), $this.click();
                $items = $("[role=menu] li:not(.divider):visible a", $parent), $items.length && (index = $items.index($items.filter(":focus")), 38 == e.keyCode && index > 0 && index--, 40 == e.keyCode && index < $items.length - 1 && index++, ~index || (index = 0), $items.eq(index).focus())
            }
        }
    };
    var old = $.fn.dropdown;
    $.fn.dropdown = function (option) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data("dropdown");
            data || $this.data("dropdown", data = new Dropdown(this)), "string" == typeof option && data[option].call($this)
        })
    }, $.fn.dropdown.Constructor = Dropdown, $.fn.dropdown.noConflict = function () {
        return $.fn.dropdown = old, this
    }, $(document).on("click.dropdown.data-api", clearMenus).on("click.dropdown.data-api", ".dropdown form", function (e) {
        e.stopPropagation()
    }).on("click.dropdown.data-api", toggle, Dropdown.prototype.toggle).on("keydown.dropdown.data-api", toggle + ", [role=menu]", Dropdown.prototype.keydown)
}(window.jQuery),
/*! 

* @fileOverview Plugins.js
* @version 1.0
* 
* @author BYU Web Community
* @see https://github.com/byuweb/
* @see https://github.com/byuweb/byu-responsive-dev/
* @see https://github.com/byuweb/byu-responsive-dev/blob/gh-pages/src/js/plugins.js
*
* This is where you should include any custom plugins needed for this site.
*/
window.log = function () {
    log.history = log.history || [], log.history.push(arguments), this.console && console.log(Array.prototype.slice.call(arguments))
},
function (doc) {
    var write = doc.write;
    doc.write = function (q) {
        log("document.write():", arguments), /docwriteregexwhitelist/.test(q) && write.apply(doc, arguments)
    }
}(document),
/*! 

* @fileOverview Script.js
* @version 2.0
* 
* @author BYU Web Community
* @see https://github.com/byuweb/
* @see https://github.com/byuweb/byu-responsive-dev/
* @see https://github.com/byuweb/byu-responsive-dev/blob/gh-pages/src/js/script.js
*/
jQuery(function () {
    getWidth(), jQuery(window).resize(getWidth), loadSearch(), activateMenus()
});