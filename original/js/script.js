		// inisialisasi javascript untuk pertama kali
	
		// panggil materialize untuk sidebar
		const sideNav = document.querySelectorAll('.sidenav');
		// M object dari materialize untk menjalankan fungsi javascript di materialize
		M.Sidenav.init(sideNav); // Materialize, jalankan fitur sidenav di element sideNav (no custom options)

		// panggil materialize untuk slider
		const slider = document.querySelectorAll('.slider');
		M.Slider.init(slider, {
			// custom options
			indicators: false,
			height: 500,
			transition: 600,
			interval: 8000
		});

 		// panggil parallax di materialize
 		const parallax = document.querySelectorAll('.parallax');
 		M.Parallax.init(parallax);

 		// panggil materialize materialboxed 
 		const materialbox = document.querySelectorAll('.materialboxed');
 		M.Materialbox.init(materialbox);

 		// panggil scrollspy di materialize
 		const scrollspy = document.querySelectorAll('.scrollspy');
 		M.ScrollSpy.init(scrollspy,{
 			// custom options
 			scrollOffset: 50 
 		}); 

		function initialize() {
			const map = new google.maps.Map(document.getElementById('map'), {
				center:  new google.maps.LatLng(-9.662583, 120.2684609 ),
				zoom: 17, 
				mapTypeId: google.maps.MapTypeId.satellite
			});

			const infowindow = new google.maps.InfoWindow({
				content: '<h5>Mr.Balens Barber Shop</h5>',
				position: {lat: -9.662583, lng: 120.2684609}, 
			});

			const marker = new google.maps.Marker({
				position: {lat: -9.662583, lng: 120.2684609},
				map: map,
				title: 'Mr.Balens Barber Shop', 
			});	

			marker.addListener('click', function(){
				infowindow.open(map, marker);
			});
		}

