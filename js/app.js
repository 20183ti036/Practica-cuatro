if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js');
}

//if(window.caches){
    console.log("Tienes caches...");
    caches.open('cache1');
    
    
    caches.has('cache1').then((resp =>{
        console.log('has', resp);
    }));

    ;

    caches.open('cache1').then((cache)=>{
        cache.addAll(
            ([
                '/index.html',
                '/porfolio/Division.html',
                '/porfolio/Multiplicacion.html',
                '/porfolio/Resta.html',
                '/porfolio/Suma.html',
                '/css/style.css',
                '/image/KOBE.JPG',
                '/js/app.js',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
            ])
        )

    });

//}
//github.io/nombreReport
//github.io/sw.js