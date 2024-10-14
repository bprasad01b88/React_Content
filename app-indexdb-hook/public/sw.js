let cacheData = "appV1";

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            return cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/static/css/main.chunk.css',
                '/bootstrap.min.css',
                '/index.html',
                '/',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.open(event.request.url).then(function(cache) {
        return cache.match(event.request).then(function (response) {
          if(navigator.onLine){
            return fetch(event.request).then(function(response) {
              if(event.request.method == 'GET'){
                cache.put(event.request, response.clone());
              }
              return response;
            });
          }else{
            if(response){
              return response
            }else{
              return null
            }
          }
        });
      })
    );
});

self.addEventListener('sync', function(event) {
    if (event.tag == 'order') {
      event.waitUntil(getUserData());
    }
  });

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((resp) => {
            return resp || fetch(event.request).catch(() => {
                return new Response("console.warn('Internet not working')");
            });
        })
    );
});
const URL = "https://jsonplaceholder.typicode.com/users";

// get data from indexedb
function getUserData(){
  var indexedDBOpenRequest = indexedDB.open("MyDB", 1)
  indexedDBOpenRequest.onsuccess = function () {
    let db = this.result
    let transaction = db.transaction('people', 'readwrite');
    let storeObj = transaction.objectStore("people");
    var cursorRequest = storeObj.openCursor();
    cursorRequest.onsuccess = function(evt) {                    
      var cursor = evt.target.result;
      if (cursor) {
        console.log("cursor.value", cursor.value)
        sendUserData(cursor.value, cursor.key)
          cursor.continue();
      }
    };
  }
  indexedDBOpenRequest.onerror = function (error) {
    console.error('IndexedDB error:', error)
  }
}

// order sent to the server
function sendUserData(data, index){
  fetch(URL , {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((response) => {
    if(response){
      deleteFromIndexdb(index)
    }
  });
}

// delete data from indexedb, that sent to server 
function deleteFromIndexdb(index){
  var indexedDBOpenRequest = indexedDB.open("MyDB", 1)
  indexedDBOpenRequest.onsuccess = function () {
    let db = this.result
    let transaction = db.transaction('people', 'readwrite');
    let storeObj = transaction.objectStore("people");
    storeObj.delete(index)
  }
}