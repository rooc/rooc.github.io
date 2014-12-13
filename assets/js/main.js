require(["jquery", "vendor/domReady!", "helpers"], function($) {

	// Highlightjs
	require(["highlightjs"], function(hljs) {
		// console.log(hljs.listLanguages());
		hljs.initHighlighting();
	});

	var docUrl = document.location.href;

	// if ( docUrl.indexOf( "folio" ) > 0 ) {
	// 	$( "ul.nav .nav-item:eq(1)" ).addClass( "nav-item--active" );
	// }

	if (docUrl.indexOf("blog") > 0) {
		$("ul.nav .nav-item:eq(0)").addClass("nav-item--active");
	}

	if ($('img[title*=caption]').length) {
		$('img[title*=caption]').each(function() {
			var $this;
			$this = $(this);
			return $this.after("<div class='c-center l-box-s c-small'>" + ($this.attr("alt")) + "</div>");
		});
	}

	if ($('img[title*=zoom]').length) {
		$('img[title*=zoom]').on("click", function() {
			return $(this).toggleClass("l-zoom");
		});
	}

	if ($('.jsbin-embed').length > 0) {
		require(["jsbin"]);
	}

	if ($('.caniuse').length > 0) {
		require(["caniuse"]);
	}

	if ($('.popup-trigger').length) {
		require(["plugin/popup"], function() {
			$('.popup-trigger').popify({
				width: "15em",
				height: "10em"
			});
		});
	}

	// filters on archive page

	if ($('.js-filter').length > 0) {
		require(["plugin/jquery.filter"], function() {
			$('.js-filter').filterize({
				type: "bytags",
				tagClassActive: "list--tags-item--active",
				tagClass: "list--tags-item",
				item: ".archive-item",
				keywordsItem: ".meta--archive"
			});
		})
	}

});
