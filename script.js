window.addEventListener("load",function(){
	console.log("hit");
	const registerServiceWorker = async() => {
		if('serviceWorker' in navigator) {
			try {
				const registration = await navigator.serviceWorker.register(
					'/sw.js',
					{
						scope: '/'
					}
				);
				if (registration.installing) {
					console.log('Service worker installing');
				} else if (registration.waiting) {
					console.log('Service worker installed');
				} else if (registration.active) {
					console.log('Service worker active');
				} catch (error) {
					console.error(`Registration failed with ${error}`);
				}
			}
		}
	};
	const DBOpenRequest = window.indexedDB.open("list");
	
	console.log(indexedDB.databases());
	
});