$(document).ready(function(){
    let account = 0
    //$('h1').css('color','red');
    //$('h1').css('font-size','50pt')
    $('#change-color').click(function(){
        $('h1').css('color','blue')

        $('h1').text('Hola Isaac')

    })

    $('#change-class').click(function(){
        $('p').addClass('resaltar')
    })

    $('#remove-class').click(function(){
        $('p').removeClass('resaltar')
    })
    
    $('#toggle-class').click(function(){
        $('p').toggleClass('resaltar')
    })

    $('#create-list').click(function(){
        const items = ['Carlos','Patricio','Felipe','Angela']
        let listItem = '<ul class="list-group">'
        items.forEach(function(item){
            listItem += `<li class="list-group-item">${item}</li>`

        })
        listItem += '</ul>'

        $('#list-container').html(listItem)
    })

    $('#create-dinamic').click(function(){
        account++
        let nuevoElemento = $(`<li class="list-group-item">${account}</li>`)
        let auxAccount = account
        nuevoElemento.click(function (){
            console.log('******',auxAccount)
        })
        $('#dinamic-list').append(nuevoElemento)
    })

    $('#leer-post').click(function() {
        // AJAX
        $.get("https://jsonplaceholder.typicode.com/posts", function(data) {
          let listData = '<ul class="list-group">';
      
          data.forEach(function(post) {
            const title = post.title;
            const body = post.body; 
      
            listData += `<li class="list-group-item">`;
            listData += `<h2>${title}</h2>`; 
            listData += `<p>${body}</p>`;
      
            listData += '</li>';
          });
      
          listData += '</ul>';
      
          $('#list-data').html(listData);
        });
      }
    );

    $('#crear-post').click(function(){
        $.post('https://jsonplaceholder.typicode.com/posts',{

            title: $('#title').val(),
            body: $('#body').val(),
            userId: 1,
        }, function(data){
            $('#title').val('')
            $('#body').val('')
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Post creado exitosamente",
                showConfirmButton: false,
                timer: 2500
              });
        })
        .fail(function (error){
            Swal.fire({
                title: 'Error!',
                text: 'No se ha creado el post, intente mas tarde',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        })
    })

})


/*<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul> */