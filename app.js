$(document).ready(function (){
// put the albums on the page
  var albumsString = '';
  albums.forEach(function (item, idx, arr){
    albumsString += `<div class="album" data-id="${item.id}">
                    <h3>${item.title}</h3>
                    <img src="${item.cover}" alt="">
                    </div>`;
  })
    $('.albums').html(albumsString);

// when the album is clicked, the pictures are displayed
    $('.albums').on('click', '.album', function(event) {
        event.preventDefault();
        console.log($(this).data('id'));
        var albumId = $(this).data('id');
        var chosenAlbum = albums.filter(function (item, idx, arr){
          return item.id === albumId;
      })
      var photosString = '';
        chosenAlbum[0].pictures.forEach(function(item, idx, arr){
          photosString += `<div class="photo">
                          <h3>${item.caption}</h3>
                          <img src="${item.photo}" alt="">
                          </div>`
      });
      $('.albumThumbnails').html(photosString);

      $('.albumThumbnails').addClass('active');
      $('.albums').hide();

    })

// creates the list items and takes you back to the album page
    var places = albums.map(function(item, idx, arr){
      return "<li>" + item.title + "</li>"
    })
      places.forEach(function(item, idx,arr){
        return $('.sidebar').html(places)
      })
    $('li').on('click', function (event) {
      event.preventDefault();
      var clickedListItem = $(this).text();
      console.log($(this).text());

      var chosenAlbum = albums.filter(function (item, idx, arr){
        return item.title === clickedListItem;
      })
    var photosString = '';
      chosenAlbum[0].pictures.forEach(function(item, idx, arr){
        photosString += `<div class="photo">
                        <h3>${item.caption}</h3>
                        <img src="${item.photo}" alt="">
                        </div>`
    });
    $('.albumThumbnails').html(photosString);
    $('.albumThumbnails').addClass('active');
    $('.albums').hide()
    })

    $('.photo').on('click',function (event) {
      console.log(this);
      $(this).siblings().hide();
      // $(this).css('background-color','red');
});
})
