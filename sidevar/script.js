$(function () {
    let duration = 400,
        $aside = $('.main aside'),
        $sidebar = $aside.find('button').on('click', function () {
            $aside.toggleClass('open');
            if ($aside.hasClass('open')) {
                $aside.stop(true).animate({
                    left: 0
                }, duration);

                $sidebar.find('span').text('CLOSE');
            } else {
                $aside.stop(true).animate({
                    left: -300
                }, duration);

                $sidebar.find('span').text('OPEN');
            }
        })
});