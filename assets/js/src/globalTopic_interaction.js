//
// Fake topic search
//
function renderNavigation() {
	if ($('.mainNav').length < 1) {
		views.nav_show({
			"loggedIn": true,
			"isModern": false
		});
	}
}

// "show all" button
function expandCategories(e) {
	var $listContainer    = $('#listContainer'),
			$expandCategories = $('#expandCategories'),
			$categoryList     = $('.js-categoryList > ul'),
			gridListClasses   = 'gridList gridList--has1 atMedium_gridList--has3 atLarge_gridList--has1';

	e.original.preventDefault();
	console.log(e);

	if($listContainer.hasClass('js-listClosed')){
		$listContainer.removeClass('js-listClosed').addClass('js-listOpen');
		$expandCategories.removeClass('valign--top padding--top').addClass('valign--top padding--top');
		console.log($categoryList);
		$categoryList.addClass(gridListClasses);
		$categoryList.children('li').addClass('gridList-item');

		// $('#categoryList').css('height', 'auto');

		console.log('list-opened');
	} else {
		$listContainer.removeClass('js-listOpen').addClass('js-listClosed');
		$expandCategories.addClass('valign--top padding--top').removeClass('valign--top padding--top');
		$categoryList.removeClass(gridListClasses);
		$categoryList.children('li').removeClass('gridList-item');

		console.log('list-closed');
		// $expandCategories.removeClass('js-expandCategories--closed').addClass('js-expandCategories--expanded');
	}

	// set #listContainer to '.js-listOpen', remove '.js-listClosed'
		// set #categoryList to height:auto;
		// set #expandCategories to .valign--top
		// change #expandCategories a icon to point up
}
