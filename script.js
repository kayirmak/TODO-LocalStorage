$(document).ready(() => {

    $('#btn-add').click(() => {
        let value = $('#inp').val();

        if(!value){
            alert('Заполните поле');
            return;
        }

        const taskObj = {
            task: value
        };

        setItemToStorage(taskObj);
        renderData();

        $('#inp').val('');

    })

    const setItemToStorage = (taskObj) => {
        if(!localStorage.getItem('data')){
            localStorage.setItem('data', '[]');
        }

        const storageTasksData = JSON.parse(localStorage.getItem('data'));
        storageTasksData.push(taskObj);

        localStorage.setItem('data', JSON.stringify(storageTasksData));
    
    }


    const renderData = () => {
        let data = JSON.parse(localStorage.getItem('data'));

        if(!data) return;

        $('#list').html('');

        data.forEach(item => {
            $('#list').append(`<li>
            ${item.task}
            <button class = 'btn-delete fas fa-trash-alt'></button>
            </li>`);
        });


    }
    
    
    renderData()


    $('body').on('click','.btn-delete', function(){
        let data = JSON.parse(localStorage.getItem('data'));

        let index = $(this).parent().index();

        data.splice(index, 1);

        localStorage.setItem('data', JSON.stringify(data));

        renderData()
    })


    $('#btn-clear').on('click', function(){
        let data = JSON.parse(localStorage.getItem('data'));
      
        data.splice(0, data.length);
        
        localStorage.setItem('data', JSON.stringify(data))

        renderData();

    })

    $('#list').on('click', 'li', function(){
        $(this).toggleClass('completed')
    })
    

    






})