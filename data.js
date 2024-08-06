const data = [
  {
    imgID: 1,
    name: "Royal Enfield Bike",
    category: "Bike",
    imgAddress:
      "https://images.unsplash.com/photo-1614152412509-7a5afc18c75b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Um95YWwlMjBFbmZpZWxkJTIwYmlrZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    imgID: 2,
    name: "Mountain Bike",
    category: "Bike",
    imgAddress:
      "https://images.unsplash.com/photo-1530173235220-f6825c107a77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1vdW50YWluJTIwQmlrZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    imgID: 3,
    name: "City Bike",
    category: "Bike",
    imgAddress:
      "https://images.unsplash.com/photo-1626840362735-afb64615318d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJpa2VzfGVufDB8fDB8fHww",
  },
  {
    imgID: 4,
    name: "Road Bike",
    category: "Bike",
    imgAddress:
      "https://images.unsplash.com/photo-1618695349120-6de4d26c2859?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJpa2VzfGVufDB8fDB8fHww",
  },
  {
    imgID: 5,
    name: "Vintage Bike",
    category: "Bike",
    imgAddress:
      "https://images.unsplash.com/photo-1619022412216-4f02215fb0cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJpa2VzfGVufDB8fDB8fHww",
  },
  {
    imgID: 6,
    name: "Racing Bike",
    category: "Bike",
    imgAddress:
      "https://images.unsplash.com/photo-1622185134994-3e87da0f1bb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJpa2VzfGVufDB8fDB8fHww",
  },
  // More bike images...
  {
    imgID: 7,
    name: "Sunrise in the Forest",
    category: "Nature",
    imgAddress:
      "https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFN1bnJpc2UlMjBpbiUyMHRoZSUyMEZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    imgID: 8,
    name: "Waterfall",
    category: "Nature",
    imgAddress:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2F0ZXJmYWxsfGVufDB8fDB8fHww",
  },
  {
    imgID: 9,
    name: "Sunset on the Beach",
    category: "Nature",
    imgAddress: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHN1bnNldCUyMG9uJTIwdGhlJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D",
  },
  {
    imgID: 10,
    name: "Snowy Mountains",
    category: "Nature",
    imgAddress: "https://images.unsplash.com/photo-1518473149927-42e231179882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNub3d5JTIwbW91bnRhaW5zfGVufDB8fDB8fHww",
  },
    {
      imgID: 11,
      name: "Lush Green Valley",
      category: "Nature",
      imgAddress: "https://images.unsplash.com/photo-1536048810607-3dc7f86981cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8THVzaCUyMEdyZWVuJTIwVmFsbGV5fGVufDB8fDB8fHww",
    },
    {
      imgID: 12,
      name: "Autumn Leaves",
      category: "Nature",
      imgAddress: "https://images.unsplash.com/photo-1623039925595-bb30257f6717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXV0dW1uJTIwTGVhdmVzfGVufDB8fDB8fHww",
    },

    {
      imgID: 13,
      name: "Motivational Quote",
      category: "Quotes",
      imgAddress: "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW90aXZhdGlvbmFsJTIwUXVvdGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      imgID: 14,
      name: "Inspiring Quote",
      category: "Quotes",
      imgAddress: "https://plus.unsplash.com/premium_photo-1671599010192-23b6bfd6fb6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5zcGlyaW5nJTIwcXVvdGVzfGVufDB8fDB8fHww",
    },
    {
      imgID: 15,
      name: "Success Quote",
      category: "Quotes",
      imgAddress: "https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3VjY2VzcyUyMFF1b3RlfGVufDB8fDB8fHww",
    },
    {
      imgID: 16,
      name: "Positive Quote",
      category: "Quotes",
      imgAddress: "https://plus.unsplash.com/premium_photo-1671512497719-173938f4d3a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UG9zaXRpdmUlMjBRdW90ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      imgID: 17,
      name: "Inspirational Quote",
      category: "Quotes",
      imgAddress: "https://images.unsplash.com/photo-1612436524004-4f90d7fe71a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW5zcGlyYXRpb25hbCUyMFF1b3RlfGVufDB8fDB8fHww",
    },
    {
      imgID: 18,
      name: "Motivating Quote",
      category: "Quotes",
      imgAddress: "https://images.unsplash.com/photo-1650513737590-4a00deeddc7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE1vdGl2YXRpbmclMjBRdW90ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
 
    {
      imgID: 19,
      name: "Cartoon",
      category: "Cartoons",
      imgAddress: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RnVubnklMjBDYXJ0b29ufGVufDB8fDB8fHww",
    },
    {
      imgID: 20,
      name: "Silly Cartoon",
      category: "Cartoons",
      imgAddress: "https://images.unsplash.com/photo-1515041219749-89347f83291a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U2lsbHklMjBDYXJ0b29ufGVufDB8fDB8fHww",
    },
    // {
    //   imgID: 21,
    //   name: "Cute Cartoon",
    //   category: "Cartoons",
    //   imgAddress: "",
    // },
    {
      imgID: 22,
      name: "Angry Cartoon",
      category: "Cartoons",
      imgAddress: "https://images.unsplash.com/photo-1503525537183-c84679c9147f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QW5ncnklMjBtaW5pb258ZW58MHx8MHx8fDA%3D",
    },
    {
      imgID: 23,
      name: "Happy Cartoon",
      category: "Cartoons",
      imgAddress: "https://images.unsplash.com/photo-1515041219749-89347f83291a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9tJTIwYW5kJTIwamVycnklMjBjYXJ0b29ufGVufDB8fDB8fHww",
    },
    {
      imgID: 24,
      name: "Sad Cartoon",
      category: "Cartoons",
      imgAddress: "https://images.unsplash.com/photo-1670202602615-ec8ee6c2ea7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHx0b20lMjBhbmQlMjBqZXJyeSUyMGNhcnRvb258ZW58MHx8MHx8fDA%3D",
    },

    {
      imgID: 25,
      name: "Anime Character 1",
      category: "Anime",
      imgAddress: "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEFuaW1lJTIwQ2hhcmFjdGVyfGVufDB8fDB8fHww",
    },
    {
      imgID: 26,
      name: "Anime Character 2",
      category: "Anime",
      imgAddress: "https://images.unsplash.com/photo-1615592389070-bcc97e05ad01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5pbWUlMjBDaGFyYWN0ZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      imgID: 27,
      name: "Anime Character 3",
      category: "Anime",
      imgAddress: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEFuaW1lJTIwQ2hhcmFjdGVyfGVufDB8fDB8fHww",
    },
    {
      imgID: 28,
      name: "Anime Character 4",
      category: "Anime",
      imgAddress: "https://images.unsplash.com/photo-1594007759138-855170ec8dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEFuaW1lJTIwQ2hhcmFjdGVyfGVufDB8fDB8fHww",
    },
    {
      imgID: 29,
      name: "Anime Character 5",
      category: "Anime",
      imgAddress: "https://images.unsplash.com/photo-1614583225976-6cbcf152b562?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fEFuaW1lJTIwQ2hhcmFjdGVyfGVufDB8fDB8fHww",
    },
    {
      imgID: 30,
      name: "Anime Character 6",
      category: "Anime",
      imgAddress: "https://images.unsplash.com/photo-1521714161819-15534968fc5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxBbmltZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      imgID: 31,
      name: "Anime Character 7",
      category: "Anime",
      imgAddress: "",
    },
    {
      imgID: 32,
      name: "Anime Character 8",
      category: "Anime",
      imgAddress: "https://images.unsplash.com/photo-1630207831419-3532bcb828d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk4fHxBbmltZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      imgID: 33,
      name: "Anime Character 9",
      category: "Anime",
      imgAddress: "",
    },
    {
      imgID: 34,
      name: "Anime Character 10",
      category: "Anime",
      imgAddress: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWUlMjBjaGFyYWN0ZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      imgID: 35,
      name: "Anime Character 11",
      category: "Anime",
      imgAddress: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1lJTIwY2hhcmFjdGVyfGVufDB8fDB8fHww",
    },
    {
      imgID: 36,
      name: "Anime Character 12",
      category: "Anime",
      imgAddress: "https://images.unsplash.com/photo-1575540325855-4b5d285a3845?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGFuaW1lJTIwY2hhcmFjdGVyfGVufDB8fDB8fHww",
    },

    {
      imgID: 37,
      name: "Abstract Art 1",
      category: "Art",
      imgAddress: "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWJzdHJhY3QlMjBBcnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      imgID: 38,
      name: "Abstract Art 2",
      category: "Art",
      imgAddress: "https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWJzdHJhY3QlMjBBcnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      imgID: 39,
      name: "Abstract Art 3",
      category: "Art",
      imgAddress: "https://images.unsplash.com/photo-1599422314077-f4dfdaa4cd09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEFic3RyYWN0JTIwQXJ0fGVufDB8fDB8fHww",
    },
    {
      imgID: 40,
      name: "Abstract Art 4",
      category: "Art",
      imgAddress: "https://images.unsplash.com/photo-1615012553971-f7251c225e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEFic3RyYWN0JTIwQXJ0fGVufDB8fDB8fHww",
    },
    {
      imgID: 41,
      name: "Abstract Art 5",
      category: "Art",
      imgAddress: "https://images.unsplash.com/photo-1570744389406-f9dcdcb67ba8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fEFic3RyYWN0JTIwQXJ0fGVufDB8fDB8fHww",
    },
    {
      imgID: 42,
      name: "Abstract Art 6",
      category: "Art",
      imgAddress: "https://images.unsplash.com/photo-1580136608079-72029d0de130?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fEFic3RyYWN0JTIwQXJ0fGVufDB8fDB8fHww",
    },

    {
      imgID: 43,
      name: "Classic Car",
      category: "Cars",
      imgAddress: "https://images.unsplash.com/photo-1587750059638-e7e8c43b99fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2xhc3NpYyUyMENhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      imgID: 44,
      name: "Sports Car",
      category: "Cars",
      imgAddress: "https://images.unsplash.com/photo-1516298252535-cf2ac5147f9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3BvcnRzJTIwQ2FyfGVufDB8fDB8fHww",
    },
    {
      imgID: 45,
      name: "Luxury Car",
      category: "Cars",
      imgAddress: "https://images.unsplash.com/photo-1541348263662-e068662d82af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3BvcnRzJTIwQ2FyfGVufDB8fDB8fHww",
    },
    {
      imgID: 46,
      name: "Vintage Car",
      category: "Cars",
      imgAddress: "https://images.unsplash.com/photo-1579508542697-bb18e7d9aeaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3BvcnRzJTIwQ2FyfGVufDB8fDB8fHww",
    },
    {
      imgID: 47,
      name: "Muscle Car",
      category: "Cars",
      imgAddress: "https://images.unsplash.com/photo-1612813562440-f3f455f77bf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TXVzY2xlJTIwQ2FyfGVufDB8fDB8fHww",
    },
    {
      imgID: 48,
      name: "SUV",
      category: "Cars",
      imgAddress: "https://images.unsplash.com/photo-1598248691267-4a62dfdfd8a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U1VWfGVufDB8fDB8fHww",
    },

    {
      imgID: 49,
      name: "Beach Sunset",
      category: "Nature",
      imgAddress: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmVhY2glMjBTdW5zZXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      imgID: 50,
      name: "Snowy Forest",
      category: "Nature",
      imgAddress: "https://images.unsplash.com/photo-1501621665255-6bc2dc9c0f6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFNub3d5JTIwRm9yZXN0fGVufDB8fDB8fHww",
    },
    {
      imgID: 51,
      name: "Desert Landscape",
      category: "Nature",
      imgAddress: "https://images.unsplash.com/photo-1560336767-9bb468f204c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RGVzZXJ0JTIwTGFuZHNjYXBlfGVufDB8fDB8fHww",
    },
    {
      imgID: 52,
      name: "Tropical Rainforest",
      category: "Nature",
      imgAddress: "https://images.unsplash.com/photo-1530215078880-605aa750b7bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VHJvcGljYWwlMjBSYWluZm9yZXN0fGVufDB8fDB8fHww",
    },
    {
      imgID: 53,
      name: "Mountain Range",
      category: "Nature",
      imgAddress: "https://images.unsplash.com/photo-1590256518627-c9f8a6855185?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TW91bnRhaW4lMjBSYW5nZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      imgID: 54,
      name: "Field of Flowers",
      category: "Nature",
      imgAddress: "https://images.unsplash.com/photo-1543862475-eb136770ae9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmllbGQlMjBvZiUyMEZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
    },
  
    {
      imgID: 55,
      name: "Inspirational Quote 1",
      category: "Quotes",
      imgAddress: "https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fEluc3BpcmF0aW9uYWwlMjBRdW90ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      imgID: 56,
      name: "Inspirational Quote 2",
      category: "Quotes",
      imgAddress: "https://plus.unsplash.com/premium_photo-1683749810427-9f460939f702?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fEluc3BpcmF0aW9uYWwlMjBRdW90ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      imgID: 57,
      name: "Inspirational Quote 3",
      category: "Quotes",
      imgAddress: "https://images.unsplash.com/photo-1515288207449-100e125abccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fEluc3BpcmF0aW9uYWwlMjBRdW90ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      imgID: 58,
      name: "Inspirational Quote 4",
      category: "Quotes",
      imgAddress: "https://images.unsplash.com/photo-1576665665113-e262f19a3fa7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fEluc3BpcmF0aW9uYWwlMjBRdW90ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      imgID: 59,
      name: "Inspirational Quote 5",
      category: "Quotes",
      imgAddress: "https://cdn.pixabay.com/photo/2016/01/12/22/37/inspiration-1136862_640.jpg",
    },
    {
      imgID: 60,
      name: "Inspirational Quote 6",
      category: "Quotes",
      imgAddress: "https://cdn.pixabay.com/photo/2016/03/13/23/50/inspirational-1254724_640.png",
    },

    {
      imgID: 61,
      name: "Cartoon 1",
      category: "Cartoons",
      imgAddress: "https://images.pexels.com/photos/13906712/pexels-photo-13906712.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      imgID: 62,
      name: "Cartoon 2",
      category: "Cartoons",
      imgAddress: "",
    },
    {
      imgID: 63,
      name: "Cartoon 3",
      category: "Cartoons",
      imgAddress: "https://images.unsplash.com/photo-1620428268482-cf1851a36764?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2FydG9vbnN8ZW58MHx8MHx8fDA%3D",
    },
    {
      imgID: 64,
      name: "Cartoon 4",
      category: "Cartoons",
      imgAddress: "https://images.unsplash.com/photo-1515041219749-89347f83291a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2FydG9vbnN8ZW58MHx8MHx8fDA%3D",
    },
    {
      imgID: 65,
      name: "Cartoon 5",
      category: "Cartoons",
      imgAddress: "https://images.unsplash.com/photo-1616097970275-1e187b4ce59f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fENhcnRvb25zfGVufDB8fDB8fHww",
    },
    {
      imgID: 66,
      name: "Cartoon 6",
      category: "Cartoons",
      imgAddress: "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fENhcnRvb25zfGVufDB8fDB8fHww",
    },
  
    {
      imgID: 67,
      name: "Anime Character 13",
      category: "Anime",
      imgAddress: "https://images.unsplash.com/photo-1614583225154-5fcdda07019e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QW5pbWUlMjBDaGFyYWN0ZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      imgID: 68,
      name: "Anime Character 14",
      category: "Anime",
      imgAddress: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFuaW1lJTIwQ2hhcmFjdGVyfGVufDB8fDB8fHww",
    },
    {
      imgID: 69,
      name: "Anime Character 15",
      category: "Anime",
      imgAddress: "https://cdn.pixabay.com/photo/2022/12/01/04/40/backpacker-7628303_640.jpg",
    },
  //   {
  //     imgID: 70,
  //     name: "Anime Character 16",
  //     category: "Anime",
  //     imgAddress: "",
  //   },
  //   {
  //     imgID: 71,
  //     name: "Anime Character 17",
  //     category: "Anime",
  //     imgAddress: "",
  //   },
  //   {
  //     imgID: 72,
  //     name: "Anime Character 18",
  //     category: "Anime",
  //     imgAddress: "",
  //   },
  //   // More anime images...
  //   // Add more objects as needed

  //   // Previous objects...
  //   {
  //     imgID: 73,
  //     name: "Abstract Art 7",
  //     category: "Art",
  //     imgAddress: "",
  //   },
  //   {
  //     imgID: 74,
  //     name: "Abstract Art 8",
  //     category: "Art",
  //     imgAddress: "",
  //   },
  //   {
  //     imgID: 75,
  //     name: "Abstract Art 9",
  //     category: "Art",
  //     imgAddress: "",
  //   },
  //   {
  //     imgID: 76,
  //     name: "Abstract Art 10",
  //     category: "Art",
  //     imgAddress: "",
  //   },
  //   {
  //     imgID: 77,
  //     name: "Abstract Art 11",
  //     category: "Art",
  //     imgAddress: "",
  //   },
  //   {
  //     imgID: 78,
  //     name: "Abstract Art 12",
  //     category: "Art",
  //     imgAddress: "",
  //   },
  //   // More abstract art images...
  //   {
  //     imgID: 79,
  //     name: "Classic Car 1",
  //     category: "Cars",
  //     imgAddress: "",
  //   },
  //   {
  //     imgID: 80,
  //     name: "Classic Car 2",
  //     category: "Cars",
  //     imgAddress: "",
  //   },
  //   {
  //     imgID: 81,
  //     name: "Classic Car 3",
  //     category: "Cars",
  //     imgAddress: "",
  //   },
  //   {
  //     imgID: 82,
  //     name: "Classic Car 4",
  //     category: "Cars",
  //     imgAddress: "",
  //   },
  //   {
  //     imgID: 83,
  //     name: "Classic Car 5",
  //     category: "Cars",
  //     imgAddress: "",
  //   },
  //   {
  //     imgID: 84,
  //     name: "Classic Car 6",
  //     category: "Cars",
  //     imgAddress: "",
  //   },
  //   // More classic car images...
  //   {
  //     imgID: 85,
  //     name: "Beach Scene",
  //     category: "Scenery",
  //     imgAddress: "",
  //   },
  //   {
  //     imgID: 86,
  //     name: "Mountain Landscape",
  //     category: "Scenery",
  //     imgAddress: "",
  //   },
  //   {
  //     imgID: 87,
  //     name: "City Skyline",
  //     category: "Scenery",
  //     imgAddress: "",
  //   },
  //   {
  //     imgID: 88,
  //     name: "Countryside View",
  //     category: "Scenery",
  //     imgAddress: "",
  //   },
  //   {
  //     imgID: 89,
  //     name: "Forest Path",
  //     category: "Scenery",
  //     imgAddress: "",
  //   },
  //   {
  //     imgID: 90,
  //     name: "Desert Oasis",
  //     category: "Scenery",
  //     imgAddress: "",
  //   },
  // More scenery images...
  // Add more objects as needed
];
