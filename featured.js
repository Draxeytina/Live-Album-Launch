const featuredArtists = [
  {
    name: 'Mellisa Mashiki',
    affiliation: 'Mellisa Music, UFIC',
    img: './images/mellisa1.jpg',
    bio: 'Mellisa was born in Mutare. Raised by Pastors, she grew up in the choir. Her passion for worship has never ceased since',
  },
  {
    name: 'Priscilla Tande',
    affiliation: 'Priscilla Music, UFIC',
    img: './images/priscilla1.jpg',
    bio: 'Priscilla was born in Mutare. Being a child in a family of Pastors, she dedicated her time to church singing in the choir. She later got married to Ngonidzashe Tande and started her own record label',
  },
  {
    name: 'Nyarai Gweshe',
    affiliation: 'DIrect WOrship, UFIC',
    img: './images/nyarai1.jpg',
    bio: 'Nyarai grew up with a longing for music. Her devotion led her to serve in UFIC Mutare and later Direct Worship with the renowned artist Minister Michael Mahendere. She has launched her first single in 2022 titled One Spirit.',
  },
  {
    name: 'Prince Chakanyanza',
    affiliation: 'UFIC',
    img: './images/prince1.jpg',
    bio: 'Prince grew up in a family of worshippers known for their unique vocals. Together with his brother Andrew, they produced a hit song called Rugare. He plays the role of lead in UFIC Mutare city choir.',
  },
  {
    name: 'Carol Nyakuba',
    affiliation: 'Carol Music, UFIC',
    img: './images/carol1.jpg',
    bio: 'Carol has always been a gem with a unique voice. She got married to Pastor Nyakuba. She has launched many powerful songs of worship and serves in the UFIC choir.',
  },
  {
    name: 'Ezekiel Paul',
    affiliation: 'Ezekiel Music, UFIC',
    img: './images/ezekiel1.jpg',
    bio: 'Ezekiel is know for his low tempo fine voice. He has made amazing duets with renowned artists around Zimbabwe.',
  },
];

const container = document.getElementById('featured-artists');

for (let i = 0; i < featuredArtists.length; i += 1) {
  const read = `
    <div class="featured-artists-inner">
        <div>
            <img class="img-artist" src="${featuredArtists[i].img}" alt="...">
        </div>
        <div class="data-artist">
            <h2 class="artist-name">${featuredArtists[i].name}</h2>
            <p class="artist-affiliation">${featuredArtists[i].affiliation}</p>
            <p class="division-greyline">___</p>
            <p class="artist-bio">${featuredArtists[i].bio}</p>
        </div>
    </div>`;

  container.innerHTML += read;
}