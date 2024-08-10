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
})


/*<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul> */