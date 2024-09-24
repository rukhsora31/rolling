const products = [
    {
        img:'./img/img1.avif',
        name:'3D Soft Curves',
        user:'🧒🏻Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'./img/img2.jpg',
        name:'The mystery of the black square',
        user:'👧🏽Jenny Wilson',
        price:'0.24 ETH'
    },
    {
        img:'./img/img3.jpeg',
        name:'Pink Cloud 🌥',
        user:'👩🏻‍🦰Floyd Miles',
        price:'0.3 ETH'
    },
    {
        img:'./img/img4.png',
        name:'3D Ethereum',
        user:'👩🏼‍🦱Jane Cooper',
        price:'0.12 ETH'
    },
]

const wrapper = document.querySelector('.live__wrapper')
products.forEach(card => {
    wrapper.innerHTML += `
    <div class="live__card">
                    <img class="live__img" src=${card.img} alt="">

                    <div class="live__box">
                        <h3>${card.name}</h3>
                        <div>
                            <p>${card.user}</p>
                            <p>
                                Current Bid <br>
                                <b>${card.price}</b>
                            </p>
                        </div>
                    </div>
                </div>
    `
})



const products2 = [
    {
        img:'https://www.advancedsciencenews.com/wp-content/uploads/2023/09/Brain.jpg',
        name:'3D Soft Curves',
        user:'🧒🏻Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'https://cdn.thingiverse.com/renders/57/af/a5/f3/d3/man_stand_4_display_large.jpg',
        name:'The mystery of the black square',
        user:'👧🏽Jenny Wilson',
        price:'0.24 ETH'
    },
    {
        img:'https://i.pinimg.com/736x/0f/f7/c3/0ff7c3cfa881cc7832b85220d826001a.jpg',
        name:'Pink Cloud 🌥',
        user:'👩🏻‍🦰Floyd Miles',
        price:'0.3 ETH'
    },
    {
        img:'https://t3.ftcdn.net/jpg/04/82/44/50/360_F_482445041_BqrLMC8v9OLkk9xz6tKi0jcWPlGwWWQQ.jpg',
        name:'3D Ethereum',
        user:'👩🏼‍🦱Jane Cooper',
        price:'0.12 ETH'
    },
    {
        img:'https://wallpapers.com/images/hd/mobile-4k-tv3dim7ntx6hg6xn.jpg',
        name:'3D Soft Curves',
        user:'🧒🏻Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'https://expertphotography.b-cdn.net/wp-content/uploads/2021/08/3D-Photography-James-Bak.jpg',
        name:'The mystery of the black square',
        user:'👧🏽Jenny Wilson',
        price:'0.24 ETH'
    },
    {
        img:'https://i.pinimg.com/736x/59/71/1b/59711b5b7b2602502dabce7a4ebef20c.jpg',
        name:'Pink Cloud 🌥',
        user:'👩🏻‍🦰Floyd Miles',
        price:'0.3 ETH'
    },
    {
        img:'https://resize.indiatvnews.com/en/resize/newbucket/1080_-/2022/09/kim-taehyung-hot-photo-1664518539.jpg',
        name:'3D Ethereum',
        user:'👩🏼‍🦱Jane Cooper',
        price:'0.12 ETH'
    },
    {
        img:'https://i.pinimg.com/474x/53/74/7c/53747c3c0b4a1c0cfe273e6131f3d45f.jpg',
        name:'3D Soft Curves',
        user:'🧒🏻Esther Howard',
        price:'0.85 ETH'
    },
    {
        img:'https://i0.wp.com/picjumbo.com/wp-content/uploads/man-looking-into-the-distance-on-top-of-the-mountain-free-image.jpg?w=600&quality=80',
        name:'The mystery of the black square',
        user:'👧🏽Jenny Wilson',
        price:'0.24 ETH'
    },
    {
        img:'https://i.pinimg.com/originals/3f/df/d3/3fdfd3d7631abdfe3441110c6730de72.jpg',
        name:'Pink Cloud 🌥',
        user:'👩🏻‍🦰Floyd Miles',
        price:'0.3 ETH'
    },
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVqG9Gj4qJe2f8uTZ0w3tSGifoTcmvRSiSg&s',
        name:'3D Ethereum',
        user:'👩🏼‍🦱Jane Cooper',
        price:'0.12 ETH'
    },
]

const wrapper2 = document.querySelector('.live__wrapper2')
products2.forEach(card => {
    wrapper2.innerHTML += `
    <div class="live__card">
                    <img class="live__img" src=${card.img} alt="">

                    <div class="live__box">
                        <h3>${card.name}</h3>
                        <div>
                            <p>${card.user}</p>
                            <p>
                                Current Bid <br>
                                <b>${card.price}</b>
                            </p>
                        </div>
                    </div>
                </div>
    `
})


const products3 = [
    {
        img:'https://free-3dtextureshd.com/wp-content/uploads/2024/03/71.jpg.webp',
        name:'3D Soft Curves',
        userImg:'./img/user-img-1.png',
        user:'Savannah Nguyen',
        subs:'238 Followers'
    },
    {
        img:'https://i.pinimg.com/1200x/6f/cc/bd/6fccbdefc3dc149d62c065d846c019d9.jpg',
        name:'3D Soft Curves',
        userImg:'./img/user-img-1.png',
        user:'Savannah Nguyen',
        subs:'238 Followers'
    },
    {
        img:'https://planner5d.com/blog/content/images/2024/02/retro-game-room-pool-table.jpg',
        name:'3D Soft Curves',
        userImg:'./img/user-img-1.png',
        user:'Savannah Nguyen',
        subs:'238 Followers'
    },
    {
        img:'https://imageio.forbes.com/specials-images/imageserve/5feb9660fa413bd055df602c/Diverse-group-of-students-playing-esports/960x0.jpg?height=474&width=711&fit=bounds',
        name:'3D Soft Curves',
        userImg:'./img/user-img-1.png',
        user:'Savannah Nguyen',
        subs:'238 Followers'
    },
    {
        img:'https://free-3dtextureshd.com/wp-content/uploads/2024/03/71.jpg.webp',
        name:'3D Soft Curves',
        userImg:'./img/user-img-1.png',
        user:'Savannah Nguyen',
        subs:'238 Followers'
    },
   
    {
        img:'https://i.pinimg.com/1200x/6f/cc/bd/6fccbdefc3dc149d62c065d846c019d9.jpg',
        name:'3D Soft Curves',
        userImg:'./img/user-img-1.png',
        user:'Savannah Nguyen',
        subs:'238 Followers'
    },
    {
        img:'https://planner5d.com/blog/content/images/2024/02/retro-game-room-pool-table.jpg',
        name:'3D Soft Curves',
        userImg:'./img/user-img-1.png',
        user:'Savannah Nguyen',
        subs:'238 Followers'
    },
    {
        img:'https://imageio.forbes.com/specials-images/imageserve/5feb9660fa413bd055df602c/Diverse-group-of-students-playing-esports/960x0.jpg?height=474&width=711&fit=bounds',
        name:'3D Soft Curves',
        userImg:'./img/user-img-1.png',
        user:'Savannah Nguyen',
        subs:'238 Followers'
    },

]

const wrapper3 = document.querySelector('.top__wrapper')
products3.forEach(card => {
    wrapper3.innerHTML += `
    <div class="live__card">
                    <img class="live__img" src=${card.img} alt="">

                    <div class="top__box">
                        <img class="top__user" src=${card.userImg} alt="">

                        <div>
                            <h5>${card.user}✔️</h5>
                            <p>Bad Artist, NFT Enthusiast, Metaverse Innovator
                                Supporting #bitcoin since 2012.</p>

                            <div>
                                <h5>${card.subs}</h5>
                                <button>Follow</button>
                            </div>
                        </div>
                    </div>
                </div>
    `
})


const btn = document.querySelector('#open-btn')
const modal = document.querySelector('#modal')
const modal__close = document.querySelector('#close')
const body = document.querySelector('body')

btn.onclick = () => {
    modal.classList.add('active')
    body.classList.add('scroll')

}
modal__close.onclick = () => {
    modal.classList.remove('active')
    body.classList.remove('scroll')
}



document.getElementById('telegramForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const token = '7214727437:AAHRrSuEadIqOb4YDCkgB8EZW0lcYzGUlYE';  // Замените на ваш токен
    const chat_id = '-4571562933';  // Замените на ваш chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Формируем сообщение
    const message = `Name: ${name}\nPhone: ${phone}`;

    const data = {
      chat_id: chat_id,
      text: message
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        // alert("Message sent!");
       
        const thanks = document.querySelector('#thanks')
        thanks.innerText = 'spasibo chto otpravil danniye'

        setTimeout(() => {
             location.reload()
        }, 3000);
      } else {
        alert("Error sending message.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error sending message.");
    });
  });