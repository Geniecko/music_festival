document.addEventListener( 'DOMContentLoaded', function() {
    const dataUrl = 'Assets/Data/artists.json';
    const showArtistNumber = 3;

    function createArtistsItem(itemData){
        const aHref = document.createElement('a');
        aHref.href = itemData.link;
        aHref.classList.add('artists__link');
      
        const artistItem = document.createElement('div');
        artistItem.classList.add('artists__item');
        artistItem.classList.add('item');
        itemData.link ?  artistItem.classList.add('has-link') : null;
        
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('item__image-wrapper');

        const image = document.createElement('img');
        image.src = itemData.imageUrl;
        imageWrapper.appendChild(image);

        const itemHeader = document.createElement('div');
        itemHeader.classList.add('item__header');

        const headline = document.createElement('h5');
        headline.classList.add('headline-light');
        headline.classList.add('headline-nospace');
        headline.innerText = itemData.name;

        const itemDate = document.createElement('span');
        itemDate.classList.add('item__date');
        itemDate.innerText = itemData.date;

        itemHeader.appendChild(headline);
        itemHeader.appendChild(itemDate);

        const description = document.createElement('p');
        description.classList.add('paragraph-gray');
        description.innerText = itemData.description;

        const button = document.createElement('button');
        button.classList.add('item__button');

        const buttonLabel = document.createElement('span');
        buttonLabel.innerText = 'READ MORE';
        
        const buttonIcon = document.createElement('img');
        buttonIcon.src = 'Assets/Icons/arrow-right.svg';

        button.appendChild(buttonLabel);
        button.appendChild(buttonIcon);

        const contentWrapper = document.createElement('div');
        contentWrapper.classList.add('item__content');

        itemData.name ? contentWrapper.appendChild(itemHeader) : null;
        itemData.description ? contentWrapper.appendChild(description): null;
        itemData.link ? contentWrapper.appendChild(button) : null;

        itemData.imageUrl ? artistItem.appendChild(imageWrapper) : null;
        artistItem.appendChild(contentWrapper);
        
        if(itemData.link){
            aHref.appendChild(artistItem);
            document.querySelector('.artists__items').appendChild(aHref);
        } else {
            document.querySelector('.artists__items').appendChild(artistItem);
        }
    }

    function fetchData(){
        fetch(dataUrl).then(response => {
            return response.json();
          }).then(data => {
            initArtist(data);
          }).catch(err => {
            console.log(err);
          });
    }

    function initArtist(data){
        const showMoreArtist = document.getElementById('showMoreArtists');

        for(let i = 0; i < showArtistNumber; i++){
            createArtistsItem(data.shift());

            if(data.length == 0){
                showMoreArtist.remove();
                break;
            }
        }
        
        showMoreArtist.addEventListener('click', () => {
            for(let i = 0; i < showArtistNumber; i++){
                createArtistsItem(data.shift());
                if(data.length == 0){
                    showMoreArtist.remove();
                    break;
                }
            }
        });
    }

    fetchData();
});