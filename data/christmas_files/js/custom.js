$(function(){

	// grabbing the audio element from the page
	var audio = $('audio')[0];
	var directory = './christmas_files/songs/';
	var song = 'merry';
	audio.setAttribute('src', directory + song + '.mp3');

	audio.play();
	$('.play').addClass('pause');
	$('.play').removeClass('play');

	// playing the audio on click event
	$('.play').live("click",function(){
		audio.play();
		$(this).addClass('pause');
		$(this).removeClass('play');
	});

	// pausing the audio on click event
	$('.pause').live("click",function(){
		audio.pause();
		$(this).addClass('play');
		$(this).removeClass('pause');
	});

	// binding time update event and replay the audio once it's finished
	audio.addEventListener('timeupdate', function(){
		if(audio.currentTime >= audio.duration)
		{
			audio.currentTime=0;
			audio.play();
		}
	});

	$('.galleria-thumbnails-tab').live("click",function(){
		$('.galleria-thumbnails-list').toggle();
	});

	$('.galleria_pause').live("click",function(){
		var gallery = Galleria.get(0); // gallery is now the first galleria instance
		gallery.pause();
		$(this).addClass('galleria_play');
		$(this).removeClass('galleria_pause');
	});

	$('.galleria_play').live("click",function(){
		var gallery = Galleria.get(0); // gallery is now the first galleria instance
		gallery.play();
		$(this).addClass('galleria_pause');
		$(this).removeClass('galleria_play');
	});

});
